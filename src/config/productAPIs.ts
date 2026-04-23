// Product API Configuration for Tranyer Marketplace
// This file shows how to configure real product APIs for live data

import { configureProductAPIs } from '@/lib/realProductAPI';

// Example configuration for enabling real APIs
// Uncomment and configure with your actual API keys

export const configureRealAPIs = () => {
  configureProductAPIs([
    // Jumia Nigeria API (when you get access)
    // {
    //   name: 'jumia',
    //   baseUrl: 'https://api.jumia.com/v1',
    //   apiKey: 'your-jumia-api-key-here',
    //   enabled: true,
    //   categories: ['phones-tablets', 'electronics', 'fashion', 'home-kitchen'],
    //   region: 'nigeria'
    // },

    // Konga Nigeria API (when you get access)
    // {
    //   name: 'konga',
    //   baseUrl: 'https://api.konga.com/v1',
    //   apiKey: 'your-konga-api-key-here',
    //   enabled: true,
    //   categories: ['phones-tablets', 'electronics', 'fashion', 'health-beauty'],
    //   region: 'nigeria'
    // },

    // AliExpress Global API (for international products)
    // {
    //   name: 'aliexpress',
    //   baseUrl: 'https://api-sg.aliexpress.com/sync',
    //   apiKey: 'your-aliexpress-api-key-here',
    //   enabled: true,
    //   categories: ['electronics', 'fashion', 'home-kitchen', 'sports-outdoors'],
    //   region: 'global'
    // }
  ]);
};

// Call this function in your main App.tsx or index.tsx to enable real APIs
// configureRealAPIs();

// API Integration Guide:
// 1. Jumia API: Visit https://developer.jumia.com/ to get API access
// 2. Konga API: Contact Konga business team for API partnership
// 3. AliExpress API: Visit https://developers.aliexpress.com/ for developer access
// 4. Other APIs: Consider Shopify, WooCommerce, or custom supplier APIs

// For now, the app uses realistic Nigerian market data as fallback
// This provides authentic product names, prices, and categories for the Nigerian market