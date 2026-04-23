import { Product, Category } from '../types';

export const generateProductSchema = (product: Product) => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image_url,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'IDR',
      availability: product.stock > 0 ? 'InStock' : 'OutOfStock'
    }
  };
};

export const generateCategorySchema = (category: Category) => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'ItemList',
    name: category.name,
    description: category.description
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};