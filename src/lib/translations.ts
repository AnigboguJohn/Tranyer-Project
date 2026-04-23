import { Language } from '@/contexts/LocalizationContext';

export type TranslationKey = 
  // Navigation
  | 'nav.home'
  | 'nav.products'
  | 'nav.categories'
  | 'nav.deals'
  | 'nav.cart'
  | 'nav.wishlist'
  | 'nav.account'
  | 'nav.search'
  | 'nav.allCategories'
  | 'nav.flashSales'
  // Hero
  | 'hero.shopNow'
  | 'hero.viewDeals'
  // Products
  | 'products.addToCart'
  | 'products.buyNow'
  | 'products.outOfStock'
  | 'products.inStock'
  | 'products.reviews'
  | 'products.freeShipping'
  | 'products.discount'
  | 'products.quickView'
  | 'products.addToWishlist'
  | 'products.removeFromWishlist'
  // Product Detail
  | 'product.notFound'
  | 'product.backToProducts'
  | 'product.description'
  | 'product.specifications'
  | 'product.reviews'
  | 'product.relatedProducts'
  | 'product.quantity'
  | 'product.addToCart'
  | 'product.buyNow'
  | 'product.share'
  | 'product.addToWishlist'
  // Cart
  | 'cart.empty'
  | 'cart.checkout'
  | 'cart.total'
  | 'cart.subtotal'
  | 'cart.shipping'
  | 'cart.continueShopping'
  | 'cart.removeItem'
  | 'cart.updateQuantity'
  // Auth
  | 'auth.login'
  | 'auth.signup'
  | 'auth.logout'
  | 'auth.email'
  | 'auth.password'
  | 'auth.forgotPassword'
  | 'auth.createAccount'
  | 'auth.welcomeBack'
  | 'auth.newCustomer'
  // Common
  | 'common.viewAll'
  | 'common.loading'
  | 'common.error'
  | 'common.success'
  | 'common.cancel'
  | 'common.save'
  | 'common.delete'
  | 'common.edit'
  | 'common.search'
  | 'common.filter'
  | 'common.sort'
  | 'common.price'
  | 'common.quantity'
  | 'common.total'
  | 'common.back'
  | 'common.next'
  | 'common.previous'
  | 'common.submit'
  | 'common.close'
  | 'common.yes'
  | 'common.no'
  | 'common.confirm'
  // Footer
  | 'footer.aboutUs'
  | 'footer.contactUs'
  | 'footer.help'
  | 'footer.terms'
  | 'footer.privacy'
  | 'footer.careers'
  | 'footer.blog'
  | 'footer.press'
  | 'footer.returns'
  | 'footer.shipping'
  | 'footer.trackOrder'
  | 'footer.cookies'
  | 'footer.newsletter'
  | 'footer.newsletterDesc'
  | 'footer.subscribe'
  // Sections
  | 'sections.topDeals'
  | 'sections.newArrivals'
  | 'sections.flashSales'
  | 'sections.popular'
  | 'sections.categories'
  | 'sections.featuredProducts'
  | 'sections.recommended'
  | 'sections.bestSellers'
  // Account
  | 'account.profile'
  | 'account.orders'
  | 'account.addresses'
  | 'account.payment'
  | 'account.settings'
  | 'account.rewards'
  | 'account.myAccount'
  | 'account.orderHistory'
  | 'account.savedAddresses'
  | 'account.paymentMethods'
  // Checkout
  | 'checkout.title'
  | 'checkout.shippingAddress'
  | 'checkout.paymentMethod'
  | 'checkout.orderSummary'
  | 'checkout.placeOrder'
  | 'checkout.secureCheckout'
  // Forms
  | 'form.firstName'
  | 'form.lastName'
  | 'form.email'
  | 'form.phone'
  | 'form.address'
  | 'form.city'
  | 'form.state'
  | 'form.country'
  | 'form.zipCode'
  | 'form.required'
  | 'form.optional'
  // Messages
  | 'message.addedToCart'
  | 'message.addedToWishlist'
  | 'message.removedFromWishlist'
  | 'message.orderPlaced'
  | 'message.loginRequired'
  | 'message.accountCreated'
  // Settings
  | 'settings.title'
  | 'settings.notifications'
  | 'settings.security'
  | 'settings.preferences'
  | 'settings.language'
  | 'settings.currency'
  | 'settings.darkMode'
  | 'settings.emailNotifications'
  | 'settings.pushNotifications'
  | 'settings.smsNotifications'
  | 'settings.twoFactor'
  | 'settings.changePassword'
  // Help
  | 'help.title'
  | 'help.searchHelp'
  | 'help.stillNeedHelp'
  | 'help.callUs'
  | 'help.emailUs'
  | 'help.liveChat'
  | 'help.startChat'
  // WhatsApp
  | 'whatsapp.support'
  | 'whatsapp.greeting'
  | 'whatsapp.quickQuestions'
  | 'whatsapp.trackOrder'
  | 'whatsapp.productHelp'
  | 'whatsapp.paymentSupport'
  | 'whatsapp.returnsRefunds'
  | 'whatsapp.shippingInfo'
  | 'whatsapp.startChat'
  // Pricing
  | 'pricing.title'
  | 'pricing.subtitle'
  | 'pricing.freemium'
  | 'pricing.premium'
  | 'pricing.business'
  | 'pricing.perMonth'
  | 'pricing.currentPlan'
  | 'pricing.upgrade'
  | 'pricing.mostPopular';

type Translations = Record<Language, Record<TranslationKey, string>>;

export const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.categories': 'Categories',
    'nav.deals': 'Deals',
    'nav.cart': 'Cart',
    'nav.wishlist': 'Wishlist',
    'nav.account': 'Account',
    'nav.search': 'Search products, brands and categories...',
    'nav.allCategories': 'All Categories',
    'nav.flashSales': 'Flash Sales',
    // Hero
    'hero.shopNow': 'Shop Now',
    'hero.viewDeals': 'View Deals',
    // Products
    'products.addToCart': 'Add to Cart',
    'products.buyNow': 'Buy Now',
    'products.outOfStock': 'Out of Stock',
    'products.inStock': 'In Stock',
    'products.reviews': 'reviews',
    'products.freeShipping': 'Free Shipping',
    'products.discount': 'OFF',
    'products.quickView': 'Quick View',
    'products.addToWishlist': 'Add to Wishlist',
    'products.removeFromWishlist': 'Remove from Wishlist',
    // Product Detail
    'product.notFound': 'Product not found',
    'product.backToProducts': 'Back to Products',
    'product.description': 'Description',
    'product.specifications': 'Specifications',
    'product.reviews': 'Reviews',
    'product.relatedProducts': 'Related Products',
    'product.quantity': 'Quantity',
    'product.addToCart': 'Add to Cart',
    'product.buyNow': 'Buy Now',
    'product.share': 'Share',
    'product.addToWishlist': 'Add to Wishlist',
    // Cart
    'cart.empty': 'Your cart is empty',
    'cart.checkout': 'Checkout',
    'cart.total': 'Total',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.continueShopping': 'Continue Shopping',
    'cart.removeItem': 'Remove Item',
    'cart.updateQuantity': 'Update Quantity',
    // Auth
    'auth.login': 'Log In',
    'auth.signup': 'Sign Up',
    'auth.logout': 'Log Out',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.forgotPassword': 'Forgot Password?',
    'auth.createAccount': 'Create Account',
    'auth.welcomeBack': 'Welcome Back',
    'auth.newCustomer': 'New Customer?',
    // Common
    'common.viewAll': 'View All',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.price': 'Price',
    'common.quantity': 'Quantity',
    'common.total': 'Total',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.submit': 'Submit',
    'common.close': 'Close',
    'common.yes': 'Yes',
    'common.no': 'No',
    'common.confirm': 'Confirm',
    // Footer
    'footer.aboutUs': 'About Us',
    'footer.contactUs': 'Contact Us',
    'footer.help': 'Help Center',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.press': 'Press',
    'footer.returns': 'Returns',
    'footer.shipping': 'Shipping Info',
    'footer.trackOrder': 'Track Order',
    'footer.cookies': 'Cookie Policy',
    'footer.newsletter': 'Subscribe to our Newsletter',
    'footer.newsletterDesc': 'Get updates on new deals and exclusive offers',
    'footer.subscribe': 'Subscribe',
    // Sections
    'sections.topDeals': 'Top Deals for You',
    'sections.newArrivals': 'New Arrivals',
    'sections.flashSales': 'Flash Sales',
    'sections.popular': 'Popular Products',
    'sections.categories': 'Shop by Category',
    'sections.featuredProducts': 'Featured Products',
    'sections.recommended': 'Recommended for You',
    'sections.bestSellers': 'Best Sellers',
    // Account
    'account.profile': 'Profile',
    'account.orders': 'Orders',
    'account.addresses': 'Addresses',
    'account.payment': 'Payment',
    'account.settings': 'Settings',
    'account.rewards': 'Rewards',
    'account.myAccount': 'My Account',
    'account.orderHistory': 'Order History',
    'account.savedAddresses': 'Saved Addresses',
    'account.paymentMethods': 'Payment Methods',
    // Checkout
    'checkout.title': 'Checkout',
    'checkout.shippingAddress': 'Shipping Address',
    'checkout.paymentMethod': 'Payment Method',
    'checkout.orderSummary': 'Order Summary',
    'checkout.placeOrder': 'Place Order',
    'checkout.secureCheckout': 'Secure Checkout',
    // Forms
    'form.firstName': 'First Name',
    'form.lastName': 'Last Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.address': 'Address',
    'form.city': 'City',
    'form.state': 'State',
    'form.country': 'Country',
    'form.zipCode': 'ZIP Code',
    'form.required': 'Required',
    'form.optional': 'Optional',
    // Messages
    'message.addedToCart': 'Added to cart',
    'message.addedToWishlist': 'Added to wishlist',
    'message.removedFromWishlist': 'Removed from wishlist',
    'message.orderPlaced': 'Order placed successfully',
    'message.loginRequired': 'Please log in to continue',
    'message.accountCreated': 'Account created successfully',
    // Settings
    'settings.title': 'Settings',
    'settings.notifications': 'Notifications',
    'settings.security': 'Security',
    'settings.preferences': 'Preferences',
    'settings.language': 'Language',
    'settings.currency': 'Currency',
    'settings.darkMode': 'Dark Mode',
    'settings.emailNotifications': 'Email Notifications',
    'settings.pushNotifications': 'Push Notifications',
    'settings.smsNotifications': 'SMS Notifications',
    'settings.twoFactor': 'Two-Factor Authentication',
    'settings.changePassword': 'Change Password',
    // Help
    'help.title': 'How Can We Help?',
    'help.searchHelp': 'Search for help...',
    'help.stillNeedHelp': 'Still Need Help?',
    'help.callUs': 'Call Us',
    'help.emailUs': 'Email Us',
    'help.liveChat': 'Live Chat',
    'help.startChat': 'Start Chat',
    // WhatsApp
    'whatsapp.support': 'WhatsApp Support',
    'whatsapp.greeting': 'Hi there! 👋 Chat with our support team on WhatsApp for instant help.',
    'whatsapp.quickQuestions': 'Quick questions:',
    'whatsapp.trackOrder': 'Track my order',
    'whatsapp.productHelp': 'Product help',
    'whatsapp.paymentSupport': 'Payment support',
    'whatsapp.returnsRefunds': 'Returns & refunds',
    'whatsapp.shippingInfo': 'Shipping info',
    'whatsapp.startChat': 'Start WhatsApp Chat',
    // Pricing
    'pricing.title': 'Choose Your Plan',
    'pricing.subtitle': 'Start with a free plan and upgrade as you grow',
    'pricing.freemium': 'Freemium',
    'pricing.premium': 'Premium',
    'pricing.business': 'Business',
    'pricing.perMonth': '/month',
    'pricing.currentPlan': 'Current Plan',
    'pricing.upgrade': 'Upgrade',
    'pricing.mostPopular': 'Most Popular',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.categories': 'Catégories',
    'nav.deals': 'Promotions',
    'nav.cart': 'Panier',
    'nav.wishlist': 'Favoris',
    'nav.account': 'Compte',
    'nav.search': 'Rechercher produits, marques et catégories...',
    'nav.allCategories': 'Toutes les catégories',
    'nav.flashSales': 'Ventes Flash',
    // Hero
    'hero.shopNow': 'Acheter',
    'hero.viewDeals': 'Voir les offres',
    // Products
    'products.addToCart': 'Ajouter au panier',
    'products.buyNow': 'Acheter maintenant',
    'products.outOfStock': 'Rupture de stock',
    'products.inStock': 'En stock',
    'products.reviews': 'avis',
    'products.freeShipping': 'Livraison gratuite',
    'products.discount': 'RÉDUCTION',
    'products.quickView': 'Aperçu rapide',
    'products.addToWishlist': 'Ajouter aux favoris',
    'products.removeFromWishlist': 'Retirer des favoris',
    // Product Detail
    'product.notFound': 'Produit non trouvé',
    'product.backToProducts': 'Retour aux produits',
    'product.description': 'Description',
    'product.specifications': 'Spécifications',
    'product.reviews': 'Avis',
    'product.relatedProducts': 'Produits similaires',
    'product.quantity': 'Quantité',
    'product.addToCart': 'Ajouter au panier',
    'product.buyNow': 'Acheter maintenant',
    'product.share': 'Partager',
    'product.addToWishlist': 'Ajouter aux favoris',
    // Cart
    'cart.empty': 'Votre panier est vide',
    'cart.checkout': 'Paiement',
    'cart.total': 'Total',
    'cart.subtotal': 'Sous-total',
    'cart.shipping': 'Livraison',
    'cart.continueShopping': 'Continuer vos achats',
    'cart.removeItem': 'Supprimer',
    'cart.updateQuantity': 'Modifier la quantité',
    // Auth
    'auth.login': 'Connexion',
    'auth.signup': 'Inscription',
    'auth.logout': 'Déconnexion',
    'auth.email': 'E-mail',
    'auth.password': 'Mot de passe',
    'auth.forgotPassword': 'Mot de passe oublié?',
    'auth.createAccount': 'Créer un compte',
    'auth.welcomeBack': 'Bienvenue',
    'auth.newCustomer': 'Nouveau client?',
    // Common
    'common.viewAll': 'Voir tout',
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
    'common.cancel': 'Annuler',
    'common.save': 'Enregistrer',
    'common.delete': 'Supprimer',
    'common.edit': 'Modifier',
    'common.search': 'Rechercher',
    'common.filter': 'Filtrer',
    'common.sort': 'Trier',
    'common.price': 'Prix',
    'common.quantity': 'Quantité',
    'common.total': 'Total',
    'common.back': 'Retour',
    'common.next': 'Suivant',
    'common.previous': 'Précédent',
    'common.submit': 'Soumettre',
    'common.close': 'Fermer',
    'common.yes': 'Oui',
    'common.no': 'Non',
    'common.confirm': 'Confirmer',
    // Footer
    'footer.aboutUs': 'À propos',
    'footer.contactUs': 'Contactez-nous',
    'footer.help': 'Centre d\'aide',
    'footer.terms': 'Conditions générales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.careers': 'Carrières',
    'footer.blog': 'Blog',
    'footer.press': 'Presse',
    'footer.returns': 'Retours',
    'footer.shipping': 'Livraison',
    'footer.trackOrder': 'Suivre ma commande',
    'footer.cookies': 'Politique de cookies',
    'footer.newsletter': 'Inscrivez-vous à notre newsletter',
    'footer.newsletterDesc': 'Recevez les dernières offres et promotions',
    'footer.subscribe': 'S\'inscrire',
    // Sections
    'sections.topDeals': 'Meilleures offres',
    'sections.newArrivals': 'Nouveautés',
    'sections.flashSales': 'Ventes flash',
    'sections.popular': 'Produits populaires',
    'sections.categories': 'Acheter par catégorie',
    'sections.featuredProducts': 'Produits vedettes',
    'sections.recommended': 'Recommandé pour vous',
    'sections.bestSellers': 'Meilleures ventes',
    // Account
    'account.profile': 'Profil',
    'account.orders': 'Commandes',
    'account.addresses': 'Adresses',
    'account.payment': 'Paiement',
    'account.settings': 'Paramètres',
    'account.rewards': 'Récompenses',
    'account.myAccount': 'Mon compte',
    'account.orderHistory': 'Historique des commandes',
    'account.savedAddresses': 'Adresses enregistrées',
    'account.paymentMethods': 'Méthodes de paiement',
    // Checkout
    'checkout.title': 'Paiement',
    'checkout.shippingAddress': 'Adresse de livraison',
    'checkout.paymentMethod': 'Mode de paiement',
    'checkout.orderSummary': 'Résumé de la commande',
    'checkout.placeOrder': 'Passer la commande',
    'checkout.secureCheckout': 'Paiement sécurisé',
    // Forms
    'form.firstName': 'Prénom',
    'form.lastName': 'Nom',
    'form.email': 'E-mail',
    'form.phone': 'Téléphone',
    'form.address': 'Adresse',
    'form.city': 'Ville',
    'form.state': 'Région',
    'form.country': 'Pays',
    'form.zipCode': 'Code postal',
    'form.required': 'Obligatoire',
    'form.optional': 'Facultatif',
    // Messages
    'message.addedToCart': 'Ajouté au panier',
    'message.addedToWishlist': 'Ajouté aux favoris',
    'message.removedFromWishlist': 'Retiré des favoris',
    'message.orderPlaced': 'Commande passée avec succès',
    'message.loginRequired': 'Veuillez vous connecter',
    'message.accountCreated': 'Compte créé avec succès',
    // Settings
    'settings.title': 'Paramètres',
    'settings.notifications': 'Notifications',
    'settings.security': 'Sécurité',
    'settings.preferences': 'Préférences',
    'settings.language': 'Langue',
    'settings.currency': 'Devise',
    'settings.darkMode': 'Mode sombre',
    'settings.emailNotifications': 'Notifications par e-mail',
    'settings.pushNotifications': 'Notifications push',
    'settings.smsNotifications': 'Notifications SMS',
    'settings.twoFactor': 'Authentification à deux facteurs',
    'settings.changePassword': 'Changer le mot de passe',
    // Help
    'help.title': 'Comment pouvons-nous vous aider?',
    'help.searchHelp': 'Rechercher de l\'aide...',
    'help.stillNeedHelp': 'Besoin d\'aide?',
    'help.callUs': 'Appelez-nous',
    'help.emailUs': 'Envoyez-nous un e-mail',
    'help.liveChat': 'Chat en direct',
    'help.startChat': 'Démarrer le chat',
    // WhatsApp
    'whatsapp.support': 'Support WhatsApp',
    'whatsapp.greeting': 'Bonjour! 👋 Discutez avec notre équipe support sur WhatsApp.',
    'whatsapp.quickQuestions': 'Questions rapides:',
    'whatsapp.trackOrder': 'Suivre ma commande',
    'whatsapp.productHelp': 'Aide produit',
    'whatsapp.paymentSupport': 'Support paiement',
    'whatsapp.returnsRefunds': 'Retours et remboursements',
    'whatsapp.shippingInfo': 'Infos livraison',
    'whatsapp.startChat': 'Démarrer WhatsApp',
    // Pricing
    'pricing.title': 'Choisissez votre forfait',
    'pricing.subtitle': 'Commencez gratuitement et évoluez selon vos besoins',
    'pricing.freemium': 'Gratuit',
    'pricing.premium': 'Premium',
    'pricing.business': 'Business',
    'pricing.perMonth': '/mois',
    'pricing.currentPlan': 'Forfait actuel',
    'pricing.upgrade': 'Mettre à niveau',
    'pricing.mostPopular': 'Le plus populaire',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.products': 'Productos',
    'nav.categories': 'Categorías',
    'nav.deals': 'Ofertas',
    'nav.cart': 'Carrito',
    'nav.wishlist': 'Favoritos',
    'nav.account': 'Cuenta',
    'nav.search': 'Buscar productos, marcas y categorías...',
    'nav.allCategories': 'Todas las categorías',
    'nav.flashSales': 'Ofertas Relámpago',
    // Hero
    'hero.shopNow': 'Comprar',
    'hero.viewDeals': 'Ver ofertas',
    // Products
    'products.addToCart': 'Añadir al carrito',
    'products.buyNow': 'Comprar ahora',
    'products.outOfStock': 'Agotado',
    'products.inStock': 'En stock',
    'products.reviews': 'reseñas',
    'products.freeShipping': 'Envío gratis',
    'products.discount': 'DESCUENTO',
    'products.quickView': 'Vista rápida',
    'products.addToWishlist': 'Añadir a favoritos',
    'products.removeFromWishlist': 'Quitar de favoritos',
    // Product Detail
    'product.notFound': 'Producto no encontrado',
    'product.backToProducts': 'Volver a productos',
    'product.description': 'Descripción',
    'product.specifications': 'Especificaciones',
    'product.reviews': 'Reseñas',
    'product.relatedProducts': 'Productos relacionados',
    'product.quantity': 'Cantidad',
    'product.addToCart': 'Añadir al carrito',
    'product.buyNow': 'Comprar ahora',
    'product.share': 'Compartir',
    'product.addToWishlist': 'Añadir a favoritos',
    // Cart
    'cart.empty': 'Tu carrito está vacío',
    'cart.checkout': 'Pagar',
    'cart.total': 'Total',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Envío',
    'cart.continueShopping': 'Seguir comprando',
    'cart.removeItem': 'Eliminar',
    'cart.updateQuantity': 'Actualizar cantidad',
    // Auth
    'auth.login': 'Iniciar sesión',
    'auth.signup': 'Registrarse',
    'auth.logout': 'Cerrar sesión',
    'auth.email': 'Correo',
    'auth.password': 'Contraseña',
    'auth.forgotPassword': '¿Olvidó la contraseña?',
    'auth.createAccount': 'Crear cuenta',
    'auth.welcomeBack': 'Bienvenido',
    'auth.newCustomer': '¿Nuevo cliente?',
    // Common
    'common.viewAll': 'Ver todo',
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.success': 'Éxito',
    'common.cancel': 'Cancelar',
    'common.save': 'Guardar',
    'common.delete': 'Eliminar',
    'common.edit': 'Editar',
    'common.search': 'Buscar',
    'common.filter': 'Filtrar',
    'common.sort': 'Ordenar',
    'common.price': 'Precio',
    'common.quantity': 'Cantidad',
    'common.total': 'Total',
    'common.back': 'Volver',
    'common.next': 'Siguiente',
    'common.previous': 'Anterior',
    'common.submit': 'Enviar',
    'common.close': 'Cerrar',
    'common.yes': 'Sí',
    'common.no': 'No',
    'common.confirm': 'Confirmar',
    // Footer
    'footer.aboutUs': 'Sobre nosotros',
    'footer.contactUs': 'Contáctenos',
    'footer.help': 'Centro de ayuda',
    'footer.terms': 'Términos y condiciones',
    'footer.privacy': 'Política de privacidad',
    'footer.careers': 'Carreras',
    'footer.blog': 'Blog',
    'footer.press': 'Prensa',
    'footer.returns': 'Devoluciones',
    'footer.shipping': 'Envío',
    'footer.trackOrder': 'Rastrear pedido',
    'footer.cookies': 'Política de cookies',
    'footer.newsletter': 'Suscríbete a nuestro boletín',
    'footer.newsletterDesc': 'Recibe ofertas y promociones exclusivas',
    'footer.subscribe': 'Suscribirse',
    // Sections
    'sections.topDeals': 'Mejores ofertas',
    'sections.newArrivals': 'Novedades',
    'sections.flashSales': 'Ventas flash',
    'sections.popular': 'Productos populares',
    'sections.categories': 'Comprar por categoría',
    'sections.featuredProducts': 'Productos destacados',
    'sections.recommended': 'Recomendado para ti',
    'sections.bestSellers': 'Más vendidos',
    // Account
    'account.profile': 'Perfil',
    'account.orders': 'Pedidos',
    'account.addresses': 'Direcciones',
    'account.payment': 'Pago',
    'account.settings': 'Configuración',
    'account.rewards': 'Recompensas',
    'account.myAccount': 'Mi cuenta',
    'account.orderHistory': 'Historial de pedidos',
    'account.savedAddresses': 'Direcciones guardadas',
    'account.paymentMethods': 'Métodos de pago',
    // Checkout
    'checkout.title': 'Pago',
    'checkout.shippingAddress': 'Dirección de envío',
    'checkout.paymentMethod': 'Método de pago',
    'checkout.orderSummary': 'Resumen del pedido',
    'checkout.placeOrder': 'Realizar pedido',
    'checkout.secureCheckout': 'Pago seguro',
    // Forms
    'form.firstName': 'Nombre',
    'form.lastName': 'Apellido',
    'form.email': 'Correo',
    'form.phone': 'Teléfono',
    'form.address': 'Dirección',
    'form.city': 'Ciudad',
    'form.state': 'Estado',
    'form.country': 'País',
    'form.zipCode': 'Código postal',
    'form.required': 'Obligatorio',
    'form.optional': 'Opcional',
    // Messages
    'message.addedToCart': 'Añadido al carrito',
    'message.addedToWishlist': 'Añadido a favoritos',
    'message.removedFromWishlist': 'Eliminado de favoritos',
    'message.orderPlaced': 'Pedido realizado con éxito',
    'message.loginRequired': 'Por favor inicie sesión',
    'message.accountCreated': 'Cuenta creada con éxito',
    // Settings
    'settings.title': 'Configuración',
    'settings.notifications': 'Notificaciones',
    'settings.security': 'Seguridad',
    'settings.preferences': 'Preferencias',
    'settings.language': 'Idioma',
    'settings.currency': 'Moneda',
    'settings.darkMode': 'Modo oscuro',
    'settings.emailNotifications': 'Notificaciones por correo',
    'settings.pushNotifications': 'Notificaciones push',
    'settings.smsNotifications': 'Notificaciones SMS',
    'settings.twoFactor': 'Autenticación de dos factores',
    'settings.changePassword': 'Cambiar contraseña',
    // Help
    'help.title': '¿Cómo podemos ayudarte?',
    'help.searchHelp': 'Buscar ayuda...',
    'help.stillNeedHelp': '¿Necesitas más ayuda?',
    'help.callUs': 'Llámanos',
    'help.emailUs': 'Escríbenos',
    'help.liveChat': 'Chat en vivo',
    'help.startChat': 'Iniciar chat',
    // WhatsApp
    'whatsapp.support': 'Soporte WhatsApp',
    'whatsapp.greeting': '¡Hola! 👋 Chatea con nuestro equipo de soporte en WhatsApp.',
    'whatsapp.quickQuestions': 'Preguntas rápidas:',
    'whatsapp.trackOrder': 'Rastrear mi pedido',
    'whatsapp.productHelp': 'Ayuda con productos',
    'whatsapp.paymentSupport': 'Soporte de pago',
    'whatsapp.returnsRefunds': 'Devoluciones y reembolsos',
    'whatsapp.shippingInfo': 'Info de envío',
    'whatsapp.startChat': 'Iniciar WhatsApp',
    // Pricing
    'pricing.title': 'Elige tu plan',
    'pricing.subtitle': 'Comienza gratis y crece según tus necesidades',
    'pricing.freemium': 'Gratis',
    'pricing.premium': 'Premium',
    'pricing.business': 'Business',
    'pricing.perMonth': '/mes',
    'pricing.currentPlan': 'Plan actual',
    'pricing.upgrade': 'Mejorar',
    'pricing.mostPopular': 'Más popular',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.products': 'Produkte',
    'nav.categories': 'Kategorien',
    'nav.deals': 'Angebote',
    'nav.cart': 'Warenkorb',
    'nav.wishlist': 'Wunschliste',
    'nav.account': 'Konto',
    'nav.search': 'Produkte, Marken und Kategorien suchen...',
    'nav.allCategories': 'Alle Kategorien',
    'nav.flashSales': 'Blitzangebote',
    // Hero
    'hero.shopNow': 'Jetzt kaufen',
    'hero.viewDeals': 'Angebote ansehen',
    // Products
    'products.addToCart': 'In den Warenkorb',
    'products.buyNow': 'Jetzt kaufen',
    'products.outOfStock': 'Nicht auf Lager',
    'products.inStock': 'Auf Lager',
    'products.reviews': 'Bewertungen',
    'products.freeShipping': 'Kostenloser Versand',
    'products.discount': 'RABATT',
    'products.quickView': 'Schnellansicht',
    'products.addToWishlist': 'Zur Wunschliste',
    'products.removeFromWishlist': 'Von Wunschliste entfernen',
    // Product Detail
    'product.notFound': 'Produkt nicht gefunden',
    'product.backToProducts': 'Zurück zu Produkten',
    'product.description': 'Beschreibung',
    'product.specifications': 'Spezifikationen',
    'product.reviews': 'Bewertungen',
    'product.relatedProducts': 'Ähnliche Produkte',
    'product.quantity': 'Menge',
    'product.addToCart': 'In den Warenkorb',
    'product.buyNow': 'Jetzt kaufen',
    'product.share': 'Teilen',
    'product.addToWishlist': 'Zur Wunschliste',
    // Cart
    'cart.empty': 'Ihr Warenkorb ist leer',
    'cart.checkout': 'Zur Kasse',
    'cart.total': 'Gesamt',
    'cart.subtotal': 'Zwischensumme',
    'cart.shipping': 'Versand',
    'cart.continueShopping': 'Weiter einkaufen',
    'cart.removeItem': 'Entfernen',
    'cart.updateQuantity': 'Menge ändern',
    // Auth
    'auth.login': 'Anmelden',
    'auth.signup': 'Registrieren',
    'auth.logout': 'Abmelden',
    'auth.email': 'E-Mail',
    'auth.password': 'Passwort',
    'auth.forgotPassword': 'Passwort vergessen?',
    'auth.createAccount': 'Konto erstellen',
    'auth.welcomeBack': 'Willkommen zurück',
    'auth.newCustomer': 'Neuer Kunde?',
    // Common
    'common.viewAll': 'Alle anzeigen',
    'common.loading': 'Laden...',
    'common.error': 'Fehler',
    'common.success': 'Erfolg',
    'common.cancel': 'Abbrechen',
    'common.save': 'Speichern',
    'common.delete': 'Löschen',
    'common.edit': 'Bearbeiten',
    'common.search': 'Suchen',
    'common.filter': 'Filtern',
    'common.sort': 'Sortieren',
    'common.price': 'Preis',
    'common.quantity': 'Menge',
    'common.total': 'Gesamt',
    'common.back': 'Zurück',
    'common.next': 'Weiter',
    'common.previous': 'Zurück',
    'common.submit': 'Absenden',
    'common.close': 'Schließen',
    'common.yes': 'Ja',
    'common.no': 'Nein',
    'common.confirm': 'Bestätigen',
    // Footer
    'footer.aboutUs': 'Über uns',
    'footer.contactUs': 'Kontakt',
    'footer.help': 'Hilfe',
    'footer.terms': 'AGB',
    'footer.privacy': 'Datenschutz',
    'footer.careers': 'Karriere',
    'footer.blog': 'Blog',
    'footer.press': 'Presse',
    'footer.returns': 'Rückgabe',
    'footer.shipping': 'Versand',
    'footer.trackOrder': 'Bestellung verfolgen',
    'footer.cookies': 'Cookie-Richtlinie',
    'footer.newsletter': 'Newsletter abonnieren',
    'footer.newsletterDesc': 'Erhalten Sie Updates zu Angeboten',
    'footer.subscribe': 'Abonnieren',
    // Sections
    'sections.topDeals': 'Top-Angebote',
    'sections.newArrivals': 'Neuheiten',
    'sections.flashSales': 'Blitzangebote',
    'sections.popular': 'Beliebte Produkte',
    'sections.categories': 'Nach Kategorie kaufen',
    'sections.featuredProducts': 'Ausgewählte Produkte',
    'sections.recommended': 'Empfohlen für Sie',
    'sections.bestSellers': 'Bestseller',
    // Account
    'account.profile': 'Profil',
    'account.orders': 'Bestellungen',
    'account.addresses': 'Adressen',
    'account.payment': 'Zahlung',
    'account.settings': 'Einstellungen',
    'account.rewards': 'Prämien',
    'account.myAccount': 'Mein Konto',
    'account.orderHistory': 'Bestellverlauf',
    'account.savedAddresses': 'Gespeicherte Adressen',
    'account.paymentMethods': 'Zahlungsmethoden',
    // Checkout
    'checkout.title': 'Kasse',
    'checkout.shippingAddress': 'Lieferadresse',
    'checkout.paymentMethod': 'Zahlungsmethode',
    'checkout.orderSummary': 'Bestellübersicht',
    'checkout.placeOrder': 'Bestellung aufgeben',
    'checkout.secureCheckout': 'Sichere Zahlung',
    // Forms
    'form.firstName': 'Vorname',
    'form.lastName': 'Nachname',
    'form.email': 'E-Mail',
    'form.phone': 'Telefon',
    'form.address': 'Adresse',
    'form.city': 'Stadt',
    'form.state': 'Bundesland',
    'form.country': 'Land',
    'form.zipCode': 'PLZ',
    'form.required': 'Erforderlich',
    'form.optional': 'Optional',
    // Messages
    'message.addedToCart': 'Zum Warenkorb hinzugefügt',
    'message.addedToWishlist': 'Zur Wunschliste hinzugefügt',
    'message.removedFromWishlist': 'Von Wunschliste entfernt',
    'message.orderPlaced': 'Bestellung erfolgreich aufgegeben',
    'message.loginRequired': 'Bitte melden Sie sich an',
    'message.accountCreated': 'Konto erfolgreich erstellt',
    // Settings
    'settings.title': 'Einstellungen',
    'settings.notifications': 'Benachrichtigungen',
    'settings.security': 'Sicherheit',
    'settings.preferences': 'Einstellungen',
    'settings.language': 'Sprache',
    'settings.currency': 'Währung',
    'settings.darkMode': 'Dunkelmodus',
    'settings.emailNotifications': 'E-Mail-Benachrichtigungen',
    'settings.pushNotifications': 'Push-Benachrichtigungen',
    'settings.smsNotifications': 'SMS-Benachrichtigungen',
    'settings.twoFactor': 'Zwei-Faktor-Authentifizierung',
    'settings.changePassword': 'Passwort ändern',
    // Help
    'help.title': 'Wie können wir helfen?',
    'help.searchHelp': 'Hilfe suchen...',
    'help.stillNeedHelp': 'Noch Hilfe nötig?',
    'help.callUs': 'Rufen Sie uns an',
    'help.emailUs': 'Schreiben Sie uns',
    'help.liveChat': 'Live-Chat',
    'help.startChat': 'Chat starten',
    // WhatsApp
    'whatsapp.support': 'WhatsApp Support',
    'whatsapp.greeting': 'Hallo! 👋 Chatten Sie mit unserem Support-Team auf WhatsApp.',
    'whatsapp.quickQuestions': 'Schnelle Fragen:',
    'whatsapp.trackOrder': 'Bestellung verfolgen',
    'whatsapp.productHelp': 'Produkthilfe',
    'whatsapp.paymentSupport': 'Zahlungssupport',
    'whatsapp.returnsRefunds': 'Rückgaben & Erstattungen',
    'whatsapp.shippingInfo': 'Versandinfo',
    'whatsapp.startChat': 'WhatsApp starten',
    // Pricing
    'pricing.title': 'Wählen Sie Ihren Plan',
    'pricing.subtitle': 'Starten Sie kostenlos und wachsen Sie',
    'pricing.freemium': 'Kostenlos',
    'pricing.premium': 'Premium',
    'pricing.business': 'Business',
    'pricing.perMonth': '/Monat',
    'pricing.currentPlan': 'Aktueller Plan',
    'pricing.upgrade': 'Upgraden',
    'pricing.mostPopular': 'Am beliebtesten',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.products': 'Produtos',
    'nav.categories': 'Categorias',
    'nav.deals': 'Ofertas',
    'nav.cart': 'Carrinho',
    'nav.wishlist': 'Favoritos',
    'nav.account': 'Conta',
    'nav.search': 'Pesquisar produtos, marcas e categorias...',
    'nav.allCategories': 'Todas as categorias',
    'nav.flashSales': 'Ofertas Relâmpago',
    // Hero
    'hero.shopNow': 'Comprar',
    'hero.viewDeals': 'Ver ofertas',
    // Products
    'products.addToCart': 'Adicionar ao carrinho',
    'products.buyNow': 'Comprar agora',
    'products.outOfStock': 'Esgotado',
    'products.inStock': 'Em estoque',
    'products.reviews': 'avaliações',
    'products.freeShipping': 'Frete grátis',
    'products.discount': 'DESCONTO',
    'products.quickView': 'Visualização rápida',
    'products.addToWishlist': 'Adicionar aos favoritos',
    'products.removeFromWishlist': 'Remover dos favoritos',
    // Product Detail
    'product.notFound': 'Produto não encontrado',
    'product.backToProducts': 'Voltar aos produtos',
    'product.description': 'Descrição',
    'product.specifications': 'Especificações',
    'product.reviews': 'Avaliações',
    'product.relatedProducts': 'Produtos relacionados',
    'product.quantity': 'Quantidade',
    'product.addToCart': 'Adicionar ao carrinho',
    'product.buyNow': 'Comprar agora',
    'product.share': 'Compartilhar',
    'product.addToWishlist': 'Adicionar aos favoritos',
    // Cart
    'cart.empty': 'Seu carrinho está vazio',
    'cart.checkout': 'Finalizar',
    'cart.total': 'Total',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Frete',
    'cart.continueShopping': 'Continuar comprando',
    'cart.removeItem': 'Remover',
    'cart.updateQuantity': 'Atualizar quantidade',
    // Auth
    'auth.login': 'Entrar',
    'auth.signup': 'Cadastrar',
    'auth.logout': 'Sair',
    'auth.email': 'E-mail',
    'auth.password': 'Senha',
    'auth.forgotPassword': 'Esqueceu a senha?',
    'auth.createAccount': 'Criar conta',
    'auth.welcomeBack': 'Bem-vindo de volta',
    'auth.newCustomer': 'Novo cliente?',
    // Common
    'common.viewAll': 'Ver tudo',
    'common.loading': 'Carregando...',
    'common.error': 'Erro',
    'common.success': 'Sucesso',
    'common.cancel': 'Cancelar',
    'common.save': 'Salvar',
    'common.delete': 'Excluir',
    'common.edit': 'Editar',
    'common.search': 'Pesquisar',
    'common.filter': 'Filtrar',
    'common.sort': 'Ordenar',
    'common.price': 'Preço',
    'common.quantity': 'Quantidade',
    'common.total': 'Total',
    'common.back': 'Voltar',
    'common.next': 'Próximo',
    'common.previous': 'Anterior',
    'common.submit': 'Enviar',
    'common.close': 'Fechar',
    'common.yes': 'Sim',
    'common.no': 'Não',
    'common.confirm': 'Confirmar',
    // Footer
    'footer.aboutUs': 'Sobre nós',
    'footer.contactUs': 'Contato',
    'footer.help': 'Ajuda',
    'footer.terms': 'Termos e condições',
    'footer.privacy': 'Política de privacidade',
    'footer.careers': 'Carreiras',
    'footer.blog': 'Blog',
    'footer.press': 'Imprensa',
    'footer.returns': 'Devoluções',
    'footer.shipping': 'Frete',
    'footer.trackOrder': 'Rastrear pedido',
    'footer.cookies': 'Política de cookies',
    'footer.newsletter': 'Assine nossa newsletter',
    'footer.newsletterDesc': 'Receba ofertas e promoções exclusivas',
    'footer.subscribe': 'Assinar',
    // Sections
    'sections.topDeals': 'Melhores ofertas',
    'sections.newArrivals': 'Novidades',
    'sections.flashSales': 'Ofertas relâmpago',
    'sections.popular': 'Produtos populares',
    'sections.categories': 'Comprar por categoria',
    'sections.featuredProducts': 'Produtos em destaque',
    'sections.recommended': 'Recomendado para você',
    'sections.bestSellers': 'Mais vendidos',
    // Account
    'account.profile': 'Perfil',
    'account.orders': 'Pedidos',
    'account.addresses': 'Endereços',
    'account.payment': 'Pagamento',
    'account.settings': 'Configurações',
    'account.rewards': 'Recompensas',
    'account.myAccount': 'Minha conta',
    'account.orderHistory': 'Histórico de pedidos',
    'account.savedAddresses': 'Endereços salvos',
    'account.paymentMethods': 'Métodos de pagamento',
    // Checkout
    'checkout.title': 'Checkout',
    'checkout.shippingAddress': 'Endereço de entrega',
    'checkout.paymentMethod': 'Método de pagamento',
    'checkout.orderSummary': 'Resumo do pedido',
    'checkout.placeOrder': 'Finalizar pedido',
    'checkout.secureCheckout': 'Checkout seguro',
    // Forms
    'form.firstName': 'Nome',
    'form.lastName': 'Sobrenome',
    'form.email': 'E-mail',
    'form.phone': 'Telefone',
    'form.address': 'Endereço',
    'form.city': 'Cidade',
    'form.state': 'Estado',
    'form.country': 'País',
    'form.zipCode': 'CEP',
    'form.required': 'Obrigatório',
    'form.optional': 'Opcional',
    // Messages
    'message.addedToCart': 'Adicionado ao carrinho',
    'message.addedToWishlist': 'Adicionado aos favoritos',
    'message.removedFromWishlist': 'Removido dos favoritos',
    'message.orderPlaced': 'Pedido realizado com sucesso',
    'message.loginRequired': 'Por favor faça login',
    'message.accountCreated': 'Conta criada com sucesso',
    // Settings
    'settings.title': 'Configurações',
    'settings.notifications': 'Notificações',
    'settings.security': 'Segurança',
    'settings.preferences': 'Preferências',
    'settings.language': 'Idioma',
    'settings.currency': 'Moeda',
    'settings.darkMode': 'Modo escuro',
    'settings.emailNotifications': 'Notificações por e-mail',
    'settings.pushNotifications': 'Notificações push',
    'settings.smsNotifications': 'Notificações SMS',
    'settings.twoFactor': 'Autenticação de dois fatores',
    'settings.changePassword': 'Alterar senha',
    // Help
    'help.title': 'Como podemos ajudar?',
    'help.searchHelp': 'Buscar ajuda...',
    'help.stillNeedHelp': 'Ainda precisa de ajuda?',
    'help.callUs': 'Ligue para nós',
    'help.emailUs': 'Envie um e-mail',
    'help.liveChat': 'Chat ao vivo',
    'help.startChat': 'Iniciar chat',
    // WhatsApp
    'whatsapp.support': 'Suporte WhatsApp',
    'whatsapp.greeting': 'Olá! 👋 Converse com nossa equipe de suporte no WhatsApp.',
    'whatsapp.quickQuestions': 'Perguntas rápidas:',
    'whatsapp.trackOrder': 'Rastrear meu pedido',
    'whatsapp.productHelp': 'Ajuda com produtos',
    'whatsapp.paymentSupport': 'Suporte de pagamento',
    'whatsapp.returnsRefunds': 'Devoluções e reembolsos',
    'whatsapp.shippingInfo': 'Info de frete',
    'whatsapp.startChat': 'Iniciar WhatsApp',
    // Pricing
    'pricing.title': 'Escolha seu plano',
    'pricing.subtitle': 'Comece grátis e cresça conforme suas necessidades',
    'pricing.freemium': 'Grátis',
    'pricing.premium': 'Premium',
    'pricing.business': 'Business',
    'pricing.perMonth': '/mês',
    'pricing.currentPlan': 'Plano atual',
    'pricing.upgrade': 'Fazer upgrade',
    'pricing.mostPopular': 'Mais popular',
  },
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Producten',
    'nav.categories': 'Categorieën',
    'nav.deals': 'Aanbiedingen',
    'nav.cart': 'Winkelwagen',
    'nav.wishlist': 'Verlanglijst',
    'nav.account': 'Account',
    'nav.search': 'Zoek producten, merken en categorieën...',
    'nav.allCategories': 'Alle categorieën',
    'nav.flashSales': 'Flash Sales',
    // Hero
    'hero.shopNow': 'Nu winkelen',
    'hero.viewDeals': 'Bekijk aanbiedingen',
    // Products
    'products.addToCart': 'In winkelwagen',
    'products.buyNow': 'Nu kopen',
    'products.outOfStock': 'Uitverkocht',
    'products.inStock': 'Op voorraad',
    'products.reviews': 'beoordelingen',
    'products.freeShipping': 'Gratis verzending',
    'products.discount': 'KORTING',
    'products.quickView': 'Snelle weergave',
    'products.addToWishlist': 'Aan verlanglijst toevoegen',
    'products.removeFromWishlist': 'Van verlanglijst verwijderen',
    // Product Detail
    'product.notFound': 'Product niet gevonden',
    'product.backToProducts': 'Terug naar producten',
    'product.description': 'Beschrijving',
    'product.specifications': 'Specificaties',
    'product.reviews': 'Beoordelingen',
    'product.relatedProducts': 'Gerelateerde producten',
    'product.quantity': 'Hoeveelheid',
    'product.addToCart': 'In winkelwagen',
    'product.buyNow': 'Nu kopen',
    'product.share': 'Delen',
    'product.addToWishlist': 'Aan verlanglijst toevoegen',
    // Cart
    'cart.empty': 'Uw winkelwagen is leeg',
    'cart.checkout': 'Afrekenen',
    'cart.total': 'Totaal',
    'cart.subtotal': 'Subtotaal',
    'cart.shipping': 'Verzending',
    'cart.continueShopping': 'Verder winkelen',
    'cart.removeItem': 'Verwijderen',
    'cart.updateQuantity': 'Aantal wijzigen',
    // Auth
    'auth.login': 'Inloggen',
    'auth.signup': 'Registreren',
    'auth.logout': 'Uitloggen',
    'auth.email': 'E-mail',
    'auth.password': 'Wachtwoord',
    'auth.forgotPassword': 'Wachtwoord vergeten?',
    'auth.createAccount': 'Account aanmaken',
    'auth.welcomeBack': 'Welkom terug',
    'auth.newCustomer': 'Nieuwe klant?',
    // Common
    'common.viewAll': 'Alles bekijken',
    'common.loading': 'Laden...',
    'common.error': 'Fout',
    'common.success': 'Succes',
    'common.cancel': 'Annuleren',
    'common.save': 'Opslaan',
    'common.delete': 'Verwijderen',
    'common.edit': 'Bewerken',
    'common.search': 'Zoeken',
    'common.filter': 'Filteren',
    'common.sort': 'Sorteren',
    'common.price': 'Prijs',
    'common.quantity': 'Aantal',
    'common.total': 'Totaal',
    'common.back': 'Terug',
    'common.next': 'Volgende',
    'common.previous': 'Vorige',
    'common.submit': 'Verzenden',
    'common.close': 'Sluiten',
    'common.yes': 'Ja',
    'common.no': 'Nee',
    'common.confirm': 'Bevestigen',
    // Footer
    'footer.aboutUs': 'Over ons',
    'footer.contactUs': 'Contact',
    'footer.help': 'Hulp',
    'footer.terms': 'Algemene voorwaarden',
    'footer.privacy': 'Privacybeleid',
    'footer.careers': 'Carrière',
    'footer.blog': 'Blog',
    'footer.press': 'Pers',
    'footer.returns': 'Retourneren',
    'footer.shipping': 'Verzending',
    'footer.trackOrder': 'Bestelling volgen',
    'footer.cookies': 'Cookiebeleid',
    'footer.newsletter': 'Schrijf je in voor onze nieuwsbrief',
    'footer.newsletterDesc': 'Ontvang updates over aanbiedingen',
    'footer.subscribe': 'Inschrijven',
    // Sections
    'sections.topDeals': 'Beste aanbiedingen',
    'sections.newArrivals': 'Nieuw binnen',
    'sections.flashSales': 'Flash sales',
    'sections.popular': 'Populaire producten',
    'sections.categories': 'Shop per categorie',
    'sections.featuredProducts': 'Uitgelichte producten',
    'sections.recommended': 'Aanbevolen voor jou',
    'sections.bestSellers': 'Bestsellers',
    // Account
    'account.profile': 'Profiel',
    'account.orders': 'Bestellingen',
    'account.addresses': 'Adressen',
    'account.payment': 'Betaling',
    'account.settings': 'Instellingen',
    'account.rewards': 'Beloningen',
    'account.myAccount': 'Mijn account',
    'account.orderHistory': 'Bestelgeschiedenis',
    'account.savedAddresses': 'Opgeslagen adressen',
    'account.paymentMethods': 'Betaalmethoden',
    // Checkout
    'checkout.title': 'Afrekenen',
    'checkout.shippingAddress': 'Verzendadres',
    'checkout.paymentMethod': 'Betaalmethode',
    'checkout.orderSummary': 'Besteloverzicht',
    'checkout.placeOrder': 'Bestelling plaatsen',
    'checkout.secureCheckout': 'Veilig afrekenen',
    // Forms
    'form.firstName': 'Voornaam',
    'form.lastName': 'Achternaam',
    'form.email': 'E-mail',
    'form.phone': 'Telefoon',
    'form.address': 'Adres',
    'form.city': 'Stad',
    'form.state': 'Provincie',
    'form.country': 'Land',
    'form.zipCode': 'Postcode',
    'form.required': 'Vereist',
    'form.optional': 'Optioneel',
    // Messages
    'message.addedToCart': 'Toegevoegd aan winkelwagen',
    'message.addedToWishlist': 'Toegevoegd aan verlanglijst',
    'message.removedFromWishlist': 'Verwijderd van verlanglijst',
    'message.orderPlaced': 'Bestelling succesvol geplaatst',
    'message.loginRequired': 'Log in om door te gaan',
    'message.accountCreated': 'Account succesvol aangemaakt',
    // Settings
    'settings.title': 'Instellingen',
    'settings.notifications': 'Meldingen',
    'settings.security': 'Beveiliging',
    'settings.preferences': 'Voorkeuren',
    'settings.language': 'Taal',
    'settings.currency': 'Valuta',
    'settings.darkMode': 'Donkere modus',
    'settings.emailNotifications': 'E-mailmeldingen',
    'settings.pushNotifications': 'Pushmeldingen',
    'settings.smsNotifications': 'SMS-meldingen',
    'settings.twoFactor': 'Tweefactorauthenticatie',
    'settings.changePassword': 'Wachtwoord wijzigen',
    // Help
    'help.title': 'Hoe kunnen we helpen?',
    'help.searchHelp': 'Zoek hulp...',
    'help.stillNeedHelp': 'Nog hulp nodig?',
    'help.callUs': 'Bel ons',
    'help.emailUs': 'E-mail ons',
    'help.liveChat': 'Live chat',
    'help.startChat': 'Chat starten',
    // WhatsApp
    'whatsapp.support': 'WhatsApp Support',
    'whatsapp.greeting': 'Hallo! 👋 Chat met ons supportteam op WhatsApp.',
    'whatsapp.quickQuestions': 'Snelle vragen:',
    'whatsapp.trackOrder': 'Bestelling volgen',
    'whatsapp.productHelp': 'Producthulp',
    'whatsapp.paymentSupport': 'Betalingssupport',
    'whatsapp.returnsRefunds': 'Retour & terugbetaling',
    'whatsapp.shippingInfo': 'Verzendinfo',
    'whatsapp.startChat': 'WhatsApp starten',
    // Pricing
    'pricing.title': 'Kies uw plan',
    'pricing.subtitle': 'Begin gratis en groei mee',
    'pricing.freemium': 'Gratis',
    'pricing.premium': 'Premium',
    'pricing.business': 'Business',
    'pricing.perMonth': '/maand',
    'pricing.currentPlan': 'Huidig plan',
    'pricing.upgrade': 'Upgraden',
    'pricing.mostPopular': 'Meest populair',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.categories': 'الفئات',
    'nav.deals': 'العروض',
    'nav.cart': 'السلة',
    'nav.wishlist': 'المفضلة',
    'nav.account': 'الحساب',
    'nav.search': 'البحث عن المنتجات والعلامات التجارية والفئات...',
    'nav.allCategories': 'جميع الفئات',
    'nav.flashSales': 'عروض سريعة',
    // Hero
    'hero.shopNow': 'تسوق الآن',
    'hero.viewDeals': 'عرض العروض',
    // Products
    'products.addToCart': 'أضف إلى السلة',
    'products.buyNow': 'اشتري الآن',
    'products.outOfStock': 'نفذت الكمية',
    'products.inStock': 'متوفر',
    'products.reviews': 'تقييمات',
    'products.freeShipping': 'شحن مجاني',
    'products.discount': 'خصم',
    'products.quickView': 'عرض سريع',
    'products.addToWishlist': 'أضف إلى المفضلة',
    'products.removeFromWishlist': 'إزالة من المفضلة',
    // Product Detail
    'product.notFound': 'المنتج غير موجود',
    'product.backToProducts': 'العودة إلى المنتجات',
    'product.description': 'الوصف',
    'product.specifications': 'المواصفات',
    'product.reviews': 'التقييمات',
    'product.relatedProducts': 'منتجات ذات صلة',
    'product.quantity': 'الكمية',
    'product.addToCart': 'أضف إلى السلة',
    'product.buyNow': 'اشتري الآن',
    'product.share': 'مشاركة',
    'product.addToWishlist': 'أضف إلى المفضلة',
    // Cart
    'cart.empty': 'سلة التسوق فارغة',
    'cart.checkout': 'الدفع',
    'cart.total': 'الإجمالي',
    'cart.subtotal': 'المجموع الفرعي',
    'cart.shipping': 'الشحن',
    'cart.continueShopping': 'متابعة التسوق',
    'cart.removeItem': 'إزالة',
    'cart.updateQuantity': 'تحديث الكمية',
    // Auth
    'auth.login': 'تسجيل الدخول',
    'auth.signup': 'إنشاء حساب',
    'auth.logout': 'تسجيل الخروج',
    'auth.email': 'البريد الإلكتروني',
    'auth.password': 'كلمة المرور',
    'auth.forgotPassword': 'نسيت كلمة المرور؟',
    'auth.createAccount': 'إنشاء حساب',
    'auth.welcomeBack': 'مرحباً بعودتك',
    'auth.newCustomer': 'عميل جديد؟',
    // Common
    'common.viewAll': 'عرض الكل',
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجاح',
    'common.cancel': 'إلغاء',
    'common.save': 'حفظ',
    'common.delete': 'حذف',
    'common.edit': 'تعديل',
    'common.search': 'بحث',
    'common.filter': 'تصفية',
    'common.sort': 'ترتيب',
    'common.price': 'السعر',
    'common.quantity': 'الكمية',
    'common.total': 'الإجمالي',
    'common.back': 'رجوع',
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.submit': 'إرسال',
    'common.close': 'إغلاق',
    'common.yes': 'نعم',
    'common.no': 'لا',
    'common.confirm': 'تأكيد',
    // Footer
    'footer.aboutUs': 'من نحن',
    'footer.contactUs': 'اتصل بنا',
    'footer.help': 'مركز المساعدة',
    'footer.terms': 'الشروط والأحكام',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.careers': 'الوظائف',
    'footer.blog': 'المدونة',
    'footer.press': 'الصحافة',
    'footer.returns': 'الإرجاع',
    'footer.shipping': 'الشحن',
    'footer.trackOrder': 'تتبع الطلب',
    'footer.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.newsletter': 'اشترك في نشرتنا الإخبارية',
    'footer.newsletterDesc': 'احصل على آخر العروض والصفقات',
    'footer.subscribe': 'اشترك',
    // Sections
    'sections.topDeals': 'أفضل العروض',
    'sections.newArrivals': 'وصل حديثاً',
    'sections.flashSales': 'عروض سريعة',
    'sections.popular': 'منتجات شائعة',
    'sections.categories': 'تسوق حسب الفئة',
    'sections.featuredProducts': 'منتجات مميزة',
    'sections.recommended': 'موصى به لك',
    'sections.bestSellers': 'الأكثر مبيعاً',
    // Account
    'account.profile': 'الملف الشخصي',
    'account.orders': 'الطلبات',
    'account.addresses': 'العناوين',
    'account.payment': 'الدفع',
    'account.settings': 'الإعدادات',
    'account.rewards': 'المكافآت',
    'account.myAccount': 'حسابي',
    'account.orderHistory': 'سجل الطلبات',
    'account.savedAddresses': 'العناوين المحفوظة',
    'account.paymentMethods': 'طرق الدفع',
    // Checkout
    'checkout.title': 'الدفع',
    'checkout.shippingAddress': 'عنوان الشحن',
    'checkout.paymentMethod': 'طريقة الدفع',
    'checkout.orderSummary': 'ملخص الطلب',
    'checkout.placeOrder': 'إتمام الطلب',
    'checkout.secureCheckout': 'دفع آمن',
    // Forms
    'form.firstName': 'الاسم الأول',
    'form.lastName': 'اسم العائلة',
    'form.email': 'البريد الإلكتروني',
    'form.phone': 'الهاتف',
    'form.address': 'العنوان',
    'form.city': 'المدينة',
    'form.state': 'المنطقة',
    'form.country': 'الدولة',
    'form.zipCode': 'الرمز البريدي',
    'form.required': 'مطلوب',
    'form.optional': 'اختياري',
    // Messages
    'message.addedToCart': 'تمت الإضافة إلى السلة',
    'message.addedToWishlist': 'تمت الإضافة إلى المفضلة',
    'message.removedFromWishlist': 'تمت الإزالة من المفضلة',
    'message.orderPlaced': 'تم تقديم الطلب بنجاح',
    'message.loginRequired': 'يرجى تسجيل الدخول',
    'message.accountCreated': 'تم إنشاء الحساب بنجاح',
    // Settings
    'settings.title': 'الإعدادات',
    'settings.notifications': 'الإشعارات',
    'settings.security': 'الأمان',
    'settings.preferences': 'التفضيلات',
    'settings.language': 'اللغة',
    'settings.currency': 'العملة',
    'settings.darkMode': 'الوضع الداكن',
    'settings.emailNotifications': 'إشعارات البريد الإلكتروني',
    'settings.pushNotifications': 'الإشعارات الفورية',
    'settings.smsNotifications': 'إشعارات الرسائل',
    'settings.twoFactor': 'المصادقة الثنائية',
    'settings.changePassword': 'تغيير كلمة المرور',
    // Help
    'help.title': 'كيف يمكننا مساعدتك؟',
    'help.searchHelp': 'البحث عن مساعدة...',
    'help.stillNeedHelp': 'هل تحتاج المزيد من المساعدة؟',
    'help.callUs': 'اتصل بنا',
    'help.emailUs': 'راسلنا',
    'help.liveChat': 'الدردشة المباشرة',
    'help.startChat': 'بدء الدردشة',
    // WhatsApp
    'whatsapp.support': 'دعم واتساب',
    'whatsapp.greeting': 'مرحباً! 👋 تواصل مع فريق الدعم عبر واتساب.',
    'whatsapp.quickQuestions': 'أسئلة سريعة:',
    'whatsapp.trackOrder': 'تتبع طلبي',
    'whatsapp.productHelp': 'مساعدة المنتج',
    'whatsapp.paymentSupport': 'دعم الدفع',
    'whatsapp.returnsRefunds': 'الإرجاع والاسترداد',
    'whatsapp.shippingInfo': 'معلومات الشحن',
    'whatsapp.startChat': 'بدء واتساب',
    // Pricing
    'pricing.title': 'اختر خطتك',
    'pricing.subtitle': 'ابدأ مجاناً ونمو حسب احتياجاتك',
    'pricing.freemium': 'مجاني',
    'pricing.premium': 'بريميوم',
    'pricing.business': 'أعمال',
    'pricing.perMonth': '/شهر',
    'pricing.currentPlan': 'الخطة الحالية',
    'pricing.upgrade': 'ترقية',
    'pricing.mostPopular': 'الأكثر شعبية',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.products': '产品',
    'nav.categories': '分类',
    'nav.deals': '优惠',
    'nav.cart': '购物车',
    'nav.wishlist': '心愿单',
    'nav.account': '账户',
    'nav.search': '搜索产品、品牌和分类...',
    'nav.allCategories': '所有分类',
    'nav.flashSales': '限时特卖',
    // Hero
    'hero.shopNow': '立即购买',
    'hero.viewDeals': '查看优惠',
    // Products
    'products.addToCart': '加入购物车',
    'products.buyNow': '立即购买',
    'products.outOfStock': '缺货',
    'products.inStock': '有货',
    'products.reviews': '评价',
    'products.freeShipping': '免运费',
    'products.discount': '折扣',
    'products.quickView': '快速查看',
    'products.addToWishlist': '加入心愿单',
    'products.removeFromWishlist': '从心愿单移除',
    // Product Detail
    'product.notFound': '未找到产品',
    'product.backToProducts': '返回产品',
    'product.description': '描述',
    'product.specifications': '规格',
    'product.reviews': '评价',
    'product.relatedProducts': '相关产品',
    'product.quantity': '数量',
    'product.addToCart': '加入购物车',
    'product.buyNow': '立即购买',
    'product.share': '分享',
    'product.addToWishlist': '加入心愿单',
    // Cart
    'cart.empty': '购物车为空',
    'cart.checkout': '结账',
    'cart.total': '总计',
    'cart.subtotal': '小计',
    'cart.shipping': '运费',
    'cart.continueShopping': '继续购物',
    'cart.removeItem': '移除',
    'cart.updateQuantity': '更新数量',
    // Auth
    'auth.login': '登录',
    'auth.signup': '注册',
    'auth.logout': '退出',
    'auth.email': '邮箱',
    'auth.password': '密码',
    'auth.forgotPassword': '忘记密码？',
    'auth.createAccount': '创建账户',
    'auth.welcomeBack': '欢迎回来',
    'auth.newCustomer': '新客户？',
    // Common
    'common.viewAll': '查看全部',
    'common.loading': '加载中...',
    'common.error': '错误',
    'common.success': '成功',
    'common.cancel': '取消',
    'common.save': '保存',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.search': '搜索',
    'common.filter': '筛选',
    'common.sort': '排序',
    'common.price': '价格',
    'common.quantity': '数量',
    'common.total': '总计',
    'common.back': '返回',
    'common.next': '下一步',
    'common.previous': '上一步',
    'common.submit': '提交',
    'common.close': '关闭',
    'common.yes': '是',
    'common.no': '否',
    'common.confirm': '确认',
    // Footer
    'footer.aboutUs': '关于我们',
    'footer.contactUs': '联系我们',
    'footer.help': '帮助中心',
    'footer.terms': '条款和条件',
    'footer.privacy': '隐私政策',
    'footer.careers': '职业',
    'footer.blog': '博客',
    'footer.press': '新闻',
    'footer.returns': '退货',
    'footer.shipping': '配送',
    'footer.trackOrder': '追踪订单',
    'footer.cookies': 'Cookie政策',
    'footer.newsletter': '订阅我们的通讯',
    'footer.newsletterDesc': '获取最新优惠和促销信息',
    'footer.subscribe': '订阅',
    // Sections
    'sections.topDeals': '热门优惠',
    'sections.newArrivals': '新品上市',
    'sections.flashSales': '限时特卖',
    'sections.popular': '热门产品',
    'sections.categories': '按分类购物',
    'sections.featuredProducts': '精选产品',
    'sections.recommended': '为您推荐',
    'sections.bestSellers': '畅销产品',
    // Account
    'account.profile': '个人资料',
    'account.orders': '订单',
    'account.addresses': '地址',
    'account.payment': '支付',
    'account.settings': '设置',
    'account.rewards': '奖励',
    'account.myAccount': '我的账户',
    'account.orderHistory': '订单历史',
    'account.savedAddresses': '保存的地址',
    'account.paymentMethods': '支付方式',
    // Checkout
    'checkout.title': '结账',
    'checkout.shippingAddress': '收货地址',
    'checkout.paymentMethod': '支付方式',
    'checkout.orderSummary': '订单摘要',
    'checkout.placeOrder': '下单',
    'checkout.secureCheckout': '安全结账',
    // Forms
    'form.firstName': '名',
    'form.lastName': '姓',
    'form.email': '邮箱',
    'form.phone': '电话',
    'form.address': '地址',
    'form.city': '城市',
    'form.state': '省份',
    'form.country': '国家',
    'form.zipCode': '邮编',
    'form.required': '必填',
    'form.optional': '选填',
    // Messages
    'message.addedToCart': '已加入购物车',
    'message.addedToWishlist': '已加入心愿单',
    'message.removedFromWishlist': '已从心愿单移除',
    'message.orderPlaced': '订单提交成功',
    'message.loginRequired': '请登录继续',
    'message.accountCreated': '账户创建成功',
    // Settings
    'settings.title': '设置',
    'settings.notifications': '通知',
    'settings.security': '安全',
    'settings.preferences': '偏好设置',
    'settings.language': '语言',
    'settings.currency': '货币',
    'settings.darkMode': '深色模式',
    'settings.emailNotifications': '邮件通知',
    'settings.pushNotifications': '推送通知',
    'settings.smsNotifications': '短信通知',
    'settings.twoFactor': '双因素认证',
    'settings.changePassword': '修改密码',
    // Help
    'help.title': '需要帮助吗？',
    'help.searchHelp': '搜索帮助...',
    'help.stillNeedHelp': '还需要帮助？',
    'help.callUs': '致电我们',
    'help.emailUs': '发送邮件',
    'help.liveChat': '在线客服',
    'help.startChat': '开始聊天',
    // WhatsApp
    'whatsapp.support': 'WhatsApp支持',
    'whatsapp.greeting': '您好！👋 通过WhatsApp与我们的支持团队聊天。',
    'whatsapp.quickQuestions': '快速问题:',
    'whatsapp.trackOrder': '追踪订单',
    'whatsapp.productHelp': '产品帮助',
    'whatsapp.paymentSupport': '支付支持',
    'whatsapp.returnsRefunds': '退货退款',
    'whatsapp.shippingInfo': '配送信息',
    'whatsapp.startChat': '开始WhatsApp',
    // Pricing
    'pricing.title': '选择您的计划',
    'pricing.subtitle': '免费开始，随需扩展',
    'pricing.freemium': '免费版',
    'pricing.premium': '高级版',
    'pricing.business': '商业版',
    'pricing.perMonth': '/月',
    'pricing.currentPlan': '当前计划',
    'pricing.upgrade': '升级',
    'pricing.mostPopular': '最受欢迎',
  },
};

export const useTranslation = (language: Language) => {
  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };
  
  return { t };
};
