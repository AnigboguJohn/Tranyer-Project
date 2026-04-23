# Tranyer - Nigerian Marketplace App

A modern e-commerce marketplace built with React, TypeScript, and Tailwind CSS, featuring comprehensive multi-language and multi-currency support with consistent localization across the entire platform.

## 🚀 Features

- **Multi-Language Support**: 8 languages (English, French, Spanish, German, Portuguese, Dutch, Arabic, Chinese)
- **Multi-Currency Support**: 7 currencies (NGN, USD, EUR, GBP, KES, ZAR, GHS) with automatic conversion
- **Consistent Localization**: Language and currency settings applied across Header, Footer, all pages, product listings, product details, and transactions
- **Mock Data System**: Comprehensive placeholder data with 100,000+ generated products across 20 categories
- **Location-Based Pricing**: Dynamic pricing adjustments based on user location
- **Advanced Filtering**: Price range, brand, rating, and category filters
- **Pagination**: Efficient loading with 24 products per page
- **Responsive Design**: Mobile-first design with grid/list view toggle
- **Real-time Search**: Fast product search across all products

## 🌐 Multi-Language & Multi-Currency

### Supported Languages
- English (en)
- Français (fr)
- Español (es)
- Deutsch (de)
- Português (pt)
- Nederlands (nl)
- العربية (ar)
- 中文 (zh)

### Supported Currencies
- Nigerian Naira (₦)
- US Dollar ($)
- Euro (€)
- British Pound (£)
- Kenyan Shilling (KSh)
- South African Rand (R)
- Ghanaian Cedi (₵)

### Consistent Application
Language and currency settings are applied consistently across:
- ✅ Header navigation and branding
- ✅ Footer links and content
- ✅ All page content and labels
- ✅ Product listings and cards
- ✅ Product detail pages
- ✅ Pricing displays and transactions
- ✅ Cart and checkout flows
- ✅ User account and settings

## 🛍️ Mock Data System

### Current Implementation
The app uses a comprehensive mock data system with:
- **100,000+ generated products** across 20 categories
- **Realistic product names** and descriptions
- **Varied pricing** from ₦5,000 to ₦2,000,000
- **Diverse categories**: Phones & Tablets, Electronics, Fashion, Home & Kitchen, etc.
- **Brand variety** with authentic brand names
- **Stock status** and availability simulation
- **Rating system** with review counts

### Categories Included
1. Phones & Tablets
2. Electronics
3. Fashion - Women
4. Fashion - Men
5. Home & Kitchen
6. Health & Beauty
7. Sports & Outdoors
8. Books & Media
9. Toys & Games
10. Automotive
11. And 10 more categories...

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Shadcn/ui
- **State Management**: React Context
- **Routing**: React Router
- **Data Management**: Mock data generation
- **Icons**: Lucide React
- **Localization**: Custom i18n system

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd marketplace-hub-main

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the app
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Header, Footer, Layout
│   ├── products/       # ProductCard, ProductQuickView
│   ├── LanguageCurrencySelector.tsx
│   └── ...
├── pages/              # Page components
├── contexts/           # React contexts for state management
│   ├── LocalizationContext.tsx    # Multi-language & currency
│   ├── CartContext.tsx
│   └── ...
├── lib/                # Utility functions and services
│   ├── translations.ts # Translation keys and values
│   ├── productGenerator.ts # Mock data generation
│   └── ...
├── data/               # Data management
│   └── mockData.ts     # Mock product data
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── config/             # Configuration files
```

## 🌍 Localization Configuration

### Adding New Languages
1. Add language code to `Language` type in `LocalizationContext.tsx`
2. Add translations to `translations.ts`
3. Add language name to `languageNames` object
4. Add locale mapping in `localeMap`

### Adding New Currencies
1. Add currency code to `Currency` type in `LocalizationContext.tsx`
2. Add market configuration in `markets` object
3. Add currency name to `currencyNames` object

### Automatic Location Detection
The app automatically detects user location and sets appropriate language/currency preferences on first visit.

## 📊 Mock Data Scale

- **Products**: 100,000+ generated items
- **Categories**: 20 comprehensive categories
- **Price Range**: ₦5,000 - ₦2,000,000
- **Brands**: 50+ authentic brand names
- **Images**: Dynamic Unsplash integration
- **Ratings**: Realistic 1-5 star ratings
- **Stock**: Variable availability simulation

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Optional: Override default settings
VITE_DEFAULT_LANGUAGE=en
VITE_DEFAULT_CURRENCY=NGN
```

### Localization Settings
Users can change language and currency via:
- Language/Currency selector in header
- Settings persisted in localStorage
- Automatic location-based detection

## 🌟 Key Features Explained

### Consistent Localization
- **Global State**: Language and currency managed through React Context
- **Persistent Settings**: User preferences saved in localStorage
- **Real-time Updates**: All components update immediately on language/currency change
- **Fallback System**: Graceful fallback to English/defaults

### Mock Data Generation
- **Scalable**: Generate any number of products per category
- **Realistic**: Authentic product names, brands, and pricing
- **Varied**: Different specifications and features per product
- **Performance**: Efficient pagination and filtering

### Advanced Filtering & Search
- **Multi-criteria**: Price, brand, rating, category filters
- **Real-time Search**: Instant results across all products
- **Sorting Options**: Price, rating, newest, featured
- **Pagination**: 24 products per page with navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in this repository
- Contact the development team

---

**Ready for global expansion with consistent localization!** 🌍

## 🚀 Features

- **Real Product Data**: Integrated with Nigerian market data including authentic product names, prices, and categories
- **Location-Based Pricing**: Dynamic pricing adjustments based on user location
- **Advanced Filtering**: Price range, brand, rating, and category filters
- **Pagination**: Efficient loading with 24 products per page
- **Responsive Design**: Mobile-first design with grid/list view toggle
- **Multi-language Support**: Localization ready
- **Real-time Search**: Fast product search across all categories

## 🛍️ Product Data Integration

### Current Implementation
The app now uses realistic Nigerian market data with:
- Authentic product names (iPhone, Samsung, Nike, etc.)
- Accurate Nigerian market prices (₦50,000 - ₦2,000,000+)
- Proper categorization (Phones, Electronics, Fashion, etc.)
- Real brand names and specifications
- Location-based pricing adjustments

### Real API Integration (Future)

To integrate with live APIs, configure the following services:

#### 1. Jumia Nigeria API
```typescript
// In src/config/productAPIs.ts
{
  name: 'jumia',
  baseUrl: 'https://api.jumia.com/v1',
  apiKey: 'your-jumia-api-key',
  enabled: true,
  categories: ['phones-tablets', 'electronics', 'fashion'],
  region: 'nigeria'
}
```

#### 2. Konga Nigeria API
```typescript
{
  name: 'konga',
  baseUrl: 'https://api.konga.com/v1',
  apiKey: 'your-konga-api-key',
  enabled: true,
  categories: ['phones-tablets', 'electronics', 'health-beauty'],
  region: 'nigeria'
}
```

#### 3. AliExpress Global API
```typescript
{
  name: 'aliexpress',
  baseUrl: 'https://api-sg.aliexpress.com/sync',
  apiKey: 'your-aliexpress-api-key',
  enabled: true,
  categories: ['electronics', 'fashion', 'home-kitchen'],
  region: 'global'
}
```

### API Setup Instructions

1. **Jumia API**: Visit [Jumia Developer Portal](https://developer.jumia.com/) for API access
2. **Konga API**: Contact Konga business development team for partnership
3. **AliExpress API**: Register at [AliExpress Developers](https://developers.aliexpress.com/)

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Shadcn/ui
- **State Management**: React Context
- **Routing**: React Router
- **Data Fetching**: Custom API integration
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd marketplace-hub-main

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the app
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── contexts/           # React contexts for state management
├── lib/                # Utility functions and API services
│   ├── realProductAPI.ts    # Real product data integration
│   └── locationProductApi.ts # Location-based pricing
├── data/               # Data management
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── config/             # Configuration files
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# API Keys (when available)
VITE_JUMIA_API_KEY=your_jumia_key
VITE_KONGA_API_KEY=your_konga_key
VITE_ALIEXPRESS_API_KEY=your_aliexpress_key
```

### Product API Configuration
Edit `src/config/productAPIs.ts` to enable real APIs when you obtain API keys.

## 🌟 Key Features Explained

### Real Product Data
- No more placeholder data
- Authentic Nigerian market prices
- Real product names and brands
- Accurate category classification

### Pagination & Performance
- 24 products per page for optimal loading
- API-based pagination for millions of products
- Efficient filtering and sorting

### Location-Based Pricing
- Automatic price adjustments based on user location
- Regional pricing variations
- Currency formatting for Nigerian Naira

### Advanced Search & Filtering
- Real-time search across all products
- Price range sliders
- Brand and rating filters
- Category-specific browsing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in this repository
- Contact the development team

---

**Ready to launch with real products!** 🎉
