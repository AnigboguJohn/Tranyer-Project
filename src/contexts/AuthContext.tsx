import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types';

interface StoredAuthUser extends User {
  password: string;
}

interface AuthContextType {
  user: User | null;
  session: Record<string, unknown> | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<{ error: Error | null }>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
  updatePassword: (password: string) => Promise<{ error: Error | null }>;
  pendingCartAction: (() => void) | null;
  setPendingCartAction: (action: (() => void) | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_USERS_KEY = 'tranyer_auth_users';
const CURRENT_USER_KEY = 'tranyer_current_user';

const loadStoredUsers = (): StoredAuthUser[] => {
  const stored = localStorage.getItem(AUTH_USERS_KEY);
  return stored ? (JSON.parse(stored) as StoredAuthUser[]) : [];
};

const saveStoredUsers = (users: StoredAuthUser[]) => {
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
};

const createSession = (user: User) => ({ user });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pendingCartAction, setPendingCartAction] = useState<(() => void) | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (storedUser) {
      const parsed = JSON.parse(storedUser) as User;
      setUser(parsed);
      setSession(createSession(parsed));
    }
    setIsLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    const users = loadStoredUsers();
    const existing = users.find((item) => item.email === email.toLowerCase());

    if (!existing || existing.password !== password) {
      return { error: new Error('Invalid email or password') };
    }

    const signedInUser: User = {
      id: existing.id,
      email: existing.email,
      name: existing.name,
      avatar: existing.avatar,
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(signedInUser));
    setUser(signedInUser);
    setSession(createSession(signedInUser));

    return { error: null };
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    const normalizedEmail = email.toLowerCase();
    const users = loadStoredUsers();
    const existing = users.find((item) => item.email === normalizedEmail);

    if (existing) {
      return { error: new Error('An account with that email already exists') };
    }

    const newUser: StoredAuthUser = {
      id: `${Date.now()}`,
      email: normalizedEmail,
      name: fullName,
      avatar: undefined,
      password,
    };

    saveStoredUsers([...users, newUser]);
    const signedInUser: User = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      avatar: newUser.avatar,
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(signedInUser));
    setUser(signedInUser);
    setSession(createSession(signedInUser));

    return { error: null };
  };

  const signOut = async () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    setUser(null);
    setSession(null);
  };

  const signInWithGoogle = async () => {
    return { error: new Error('Google sign-in is disabled in frontend-only mode') };
  };

  const resetPassword = async (email: string) => {
    const users = loadStoredUsers();
    const existing = users.find((item) => item.email === email.toLowerCase());

    if (!existing) {
      return { error: new Error('No account found for that email') };
    }

    return { error: null };
  };

  const updatePassword = async (password: string) => {
    if (!user) {
      return { error: new Error('You must be signed in to update your password') };
    }

    const users = loadStoredUsers();
    const updatedUsers = users.map((item) =>
      item.email === user.email ? { ...item, password } : item
    );

    saveStoredUsers(updatedUsers);
    return { error: null };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isLoading,
        signIn,
        signUp,
        signOut,
        signInWithGoogle,
        resetPassword,
        updatePassword,
        pendingCartAction,
        setPendingCartAction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
