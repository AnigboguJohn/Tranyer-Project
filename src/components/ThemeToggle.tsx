import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  variant?: 'ghost' | 'outline' | 'default';
  showLabel?: boolean;
  className?: string;
}

const ThemeToggle = ({ variant = 'ghost', showLabel = false, className = '' }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size={showLabel ? 'default' : 'icon'}
      onClick={toggleTheme}
      className={`${className} ${variant === 'ghost' ? 'text-header-foreground hover:bg-white/10' : ''}`}
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      {showLabel && (
        <span className="ml-2">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
      )}
    </Button>
  );
};

export default ThemeToggle;
