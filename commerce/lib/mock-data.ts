import { Cart, Collection, Menu, Page, Product } from './shopify/types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'gid://shopify/Product/1',
    handle: 'classic-white-tee',
    availableForSale: true,
    title: 'Classic White Tee',
    description: 'A timeless classic white t-shirt made from 100% organic cotton. Soft, breathable, and perfect for everyday wear.',
    descriptionHtml: '<p>A timeless classic white t-shirt made from <strong>100% organic cotton</strong>. Soft, breathable, and perfect for everyday wear.</p><ul><li>Premium organic cotton</li><li>Pre-shrunk fabric</li><li>Unisex fit</li></ul>',
    options: [
      { id: 'opt-1', name: 'Size', values: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'opt-2', name: 'Color', values: ['White', 'Off White'] },
    ],
    priceRange: {
      maxVariantPrice: { amount: '29.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '29.99', currencyCode: 'USD' },
    },
    variants: [
      { id: 'var-1-1', title: 'XS / White', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'XS' }, { name: 'Color', value: 'White' }], price: { amount: '29.99', currencyCode: 'USD' } },
      { id: 'var-1-2', title: 'S / White', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'S' }, { name: 'Color', value: 'White' }], price: { amount: '29.99', currencyCode: 'USD' } },
      { id: 'var-1-3', title: 'M / White', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'White' }], price: { amount: '29.99', currencyCode: 'USD' } },
      { id: 'var-1-4', title: 'L / White', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'L' }, { name: 'Color', value: 'White' }], price: { amount: '29.99', currencyCode: 'USD' } },
      { id: 'var-1-5', title: 'XL / White', availableForSale: false, selectedOptions: [{ name: 'Size', value: 'XL' }, { name: 'Color', value: 'White' }], price: { amount: '29.99', currencyCode: 'USD' } },
      { id: 'var-1-6', title: 'M / Off White', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'Off White' }], price: { amount: '29.99', currencyCode: 'USD' } },
    ],
    featuredImage: { url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80', altText: 'Classic White Tee', width: 800, height: 800 },
    images: [
      { url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80', altText: 'Classic White Tee front', width: 800, height: 800 },
      { url: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80', altText: 'Classic White Tee worn', width: 800, height: 800 },
    ],
    seo: { title: 'Classic White Tee', description: 'Premium organic cotton white tee' },
    tags: ['apparel', 'tops'],
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'gid://shopify/Product/2',
    handle: 'slim-fit-chinos',
    availableForSale: true,
    title: 'Slim Fit Chinos',
    description: 'Modern slim fit chinos crafted from stretch cotton blend. Professional enough for the office, casual enough for weekends.',
    descriptionHtml: '<p>Modern slim fit chinos crafted from <strong>stretch cotton blend</strong>. Professional enough for the office, casual enough for weekends.</p><ul><li>98% Cotton, 2% Elastane</li><li>Slim tapered leg</li><li>5-pocket styling</li></ul>',
    options: [
      { id: 'opt-3', name: 'Size', values: ['28', '30', '32', '34', '36'] },
      { id: 'opt-4', name: 'Color', values: ['Khaki', 'Navy', 'Olive'] },
    ],
    priceRange: {
      maxVariantPrice: { amount: '79.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '79.99', currencyCode: 'USD' },
    },
    variants: [
      { id: 'var-2-1', title: '30 / Khaki', availableForSale: true, selectedOptions: [{ name: 'Size', value: '30' }, { name: 'Color', value: 'Khaki' }], price: { amount: '79.99', currencyCode: 'USD' } },
      { id: 'var-2-2', title: '32 / Khaki', availableForSale: true, selectedOptions: [{ name: 'Size', value: '32' }, { name: 'Color', value: 'Khaki' }], price: { amount: '79.99', currencyCode: 'USD' } },
      { id: 'var-2-3', title: '30 / Navy', availableForSale: true, selectedOptions: [{ name: 'Size', value: '30' }, { name: 'Color', value: 'Navy' }], price: { amount: '79.99', currencyCode: 'USD' } },
      { id: 'var-2-4', title: '32 / Navy', availableForSale: true, selectedOptions: [{ name: 'Size', value: '32' }, { name: 'Color', value: 'Navy' }], price: { amount: '79.99', currencyCode: 'USD' } },
      { id: 'var-2-5', title: '34 / Olive', availableForSale: true, selectedOptions: [{ name: 'Size', value: '34' }, { name: 'Color', value: 'Olive' }], price: { amount: '79.99', currencyCode: 'USD' } },
    ],
    featuredImage: { url: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80', altText: 'Slim Fit Chinos', width: 800, height: 800 },
    images: [
      { url: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80', altText: 'Slim Fit Chinos', width: 800, height: 800 },
      { url: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80', altText: 'Slim Fit Chinos detail', width: 800, height: 800 },
    ],
    seo: { title: 'Slim Fit Chinos', description: 'Modern stretch chinos for any occasion' },
    tags: ['apparel', 'bottoms'],
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'gid://shopify/Product/3',
    handle: 'leather-crossbody-bag',
    availableForSale: true,
    title: 'Leather Crossbody Bag',
    description: 'Handcrafted full-grain leather crossbody bag. Spacious enough for daily essentials with an adjustable strap for all-day comfort.',
    descriptionHtml: '<p>Handcrafted <strong>full-grain leather</strong> crossbody bag. Spacious enough for daily essentials with an adjustable strap for all-day comfort.</p><ul><li>Full-grain leather</li><li>Adjustable shoulder strap</li><li>Interior zip pocket</li><li>Magnetic snap closure</li></ul>',
    options: [
      { id: 'opt-5', name: 'Color', values: ['Tan', 'Black', 'Cognac'] },
    ],
    priceRange: {
      maxVariantPrice: { amount: '149.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '149.99', currencyCode: 'USD' },
    },
    variants: [
      { id: 'var-3-1', title: 'Tan', availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Tan' }], price: { amount: '149.99', currencyCode: 'USD' } },
      { id: 'var-3-2', title: 'Black', availableForSale: true, selectedOptions: [{ name: 'Color', value: 'Black' }], price: { amount: '149.99', currencyCode: 'USD' } },
      { id: 'var-3-3', title: 'Cognac', availableForSale: false, selectedOptions: [{ name: 'Color', value: 'Cognac' }], price: { amount: '149.99', currencyCode: 'USD' } },
    ],
    featuredImage: { url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80', altText: 'Leather Crossbody Bag', width: 800, height: 800 },
    images: [
      { url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80', altText: 'Leather Crossbody Bag', width: 800, height: 800 },
      { url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80', altText: 'Leather Crossbody Bag open', width: 800, height: 800 },
    ],
    seo: { title: 'Leather Crossbody Bag', description: 'Handcrafted full-grain leather bag' },
    tags: ['accessories', 'bags'],
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'gid://shopify/Product/4',
    handle: 'wool-blend-coat',
    availableForSale: true,
    title: 'Wool Blend Coat',
    description: 'An elegant wool blend coat that transitions seamlessly from work to weekend. Tailored fit with a classic silhouette.',
    descriptionHtml: '<p>An elegant <strong>wool blend coat</strong> that transitions seamlessly from work to weekend. Tailored fit with a classic silhouette.</p><ul><li>70% Wool, 30% Polyester</li><li>Fully lined</li><li>Double-breasted buttons</li><li>Dry clean only</li></ul>',
    options: [
      { id: 'opt-6', name: 'Size', values: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'opt-7', name: 'Color', values: ['Camel', 'Charcoal'] },
    ],
    priceRange: {
      maxVariantPrice: { amount: '299.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '299.99', currencyCode: 'USD' },
    },
    variants: [
      { id: 'var-4-1', title: 'S / Camel', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'S' }, { name: 'Color', value: 'Camel' }], price: { amount: '299.99', currencyCode: 'USD' } },
      { id: 'var-4-2', title: 'M / Camel', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'Camel' }], price: { amount: '299.99', currencyCode: 'USD' } },
      { id: 'var-4-3', title: 'L / Camel', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'L' }, { name: 'Color', value: 'Camel' }], price: { amount: '299.99', currencyCode: 'USD' } },
      { id: 'var-4-4', title: 'S / Charcoal', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'S' }, { name: 'Color', value: 'Charcoal' }], price: { amount: '299.99', currencyCode: 'USD' } },
      { id: 'var-4-5', title: 'M / Charcoal', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'Charcoal' }], price: { amount: '299.99', currencyCode: 'USD' } },
    ],
    featuredImage: { url: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80', altText: 'Wool Blend Coat', width: 800, height: 800 },
    images: [
      { url: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80', altText: 'Wool Blend Coat', width: 800, height: 800 },
      { url: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=800&q=80', altText: 'Wool Blend Coat worn', width: 800, height: 800 },
    ],
    seo: { title: 'Wool Blend Coat', description: 'Elegant tailored wool blend coat' },
    tags: ['apparel', 'outerwear'],
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'gid://shopify/Product/5',
    handle: 'canvas-sneakers',
    availableForSale: true,
    title: 'Canvas Sneakers',
    description: 'Clean, minimal canvas sneakers with a vulcanized rubber sole. The perfect everyday shoe for any outfit.',
    descriptionHtml: '<p>Clean, minimal canvas sneakers with a <strong>vulcanized rubber sole</strong>. The perfect everyday shoe for any outfit.</p><ul><li>100% cotton canvas upper</li><li>Rubber sole</li><li>OrthoLite insole</li><li>Available in multiple colors</li></ul>',
    options: [
      { id: 'opt-8', name: 'Size', values: ['7', '8', '9', '10', '11', '12'] },
      { id: 'opt-9', name: 'Color', values: ['White', 'Black', 'Navy'] },
    ],
    priceRange: {
      maxVariantPrice: { amount: '59.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '59.99', currencyCode: 'USD' },
    },
    variants: [
      { id: 'var-5-1', title: '9 / White', availableForSale: true, selectedOptions: [{ name: 'Size', value: '9' }, { name: 'Color', value: 'White' }], price: { amount: '59.99', currencyCode: 'USD' } },
      { id: 'var-5-2', title: '10 / White', availableForSale: true, selectedOptions: [{ name: 'Size', value: '10' }, { name: 'Color', value: 'White' }], price: { amount: '59.99', currencyCode: 'USD' } },
      { id: 'var-5-3', title: '9 / Black', availableForSale: true, selectedOptions: [{ name: 'Size', value: '9' }, { name: 'Color', value: 'Black' }], price: { amount: '59.99', currencyCode: 'USD' } },
      { id: 'var-5-4', title: '10 / Black', availableForSale: true, selectedOptions: [{ name: 'Size', value: '10' }, { name: 'Color', value: 'Black' }], price: { amount: '59.99', currencyCode: 'USD' } },
      { id: 'var-5-5', title: '9 / Navy', availableForSale: true, selectedOptions: [{ name: 'Size', value: '9' }, { name: 'Color', value: 'Navy' }], price: { amount: '59.99', currencyCode: 'USD' } },
    ],
    featuredImage: { url: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80', altText: 'Canvas Sneakers', width: 800, height: 800 },
    images: [
      { url: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80', altText: 'Canvas Sneakers', width: 800, height: 800 },
      { url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80', altText: 'Canvas Sneakers side', width: 800, height: 800 },
    ],
    seo: { title: 'Canvas Sneakers', description: 'Minimal everyday canvas sneakers' },
    tags: ['footwear', 'shoes'],
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'gid://shopify/Product/6',
    handle: 'merino-wool-sweater',
    availableForSale: true,
    title: 'Merino Wool Sweater',
    description: 'Luxuriously soft merino wool crewneck sweater. Warm without bulk, perfect for layering through the seasons.',
    descriptionHtml: '<p>Luxuriously soft <strong>merino wool</strong> crewneck sweater. Warm without bulk, perfect for layering through the seasons.</p><ul><li>100% Merino Wool</li><li>Ribbed collar, cuffs and hem</li><li>Regular fit</li><li>Hand wash cold</li></ul>',
    options: [
      { id: 'opt-10', name: 'Size', values: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'opt-11', name: 'Color', values: ['Oatmeal', 'Forest Green', 'Burgundy'] },
    ],
    priceRange: {
      maxVariantPrice: { amount: '119.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '119.99', currencyCode: 'USD' },
    },
    variants: [
      { id: 'var-6-1', title: 'S / Oatmeal', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'S' }, { name: 'Color', value: 'Oatmeal' }], price: { amount: '119.99', currencyCode: 'USD' } },
      { id: 'var-6-2', title: 'M / Oatmeal', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'Oatmeal' }], price: { amount: '119.99', currencyCode: 'USD' } },
      { id: 'var-6-3', title: 'M / Forest Green', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'Forest Green' }], price: { amount: '119.99', currencyCode: 'USD' } },
      { id: 'var-6-4', title: 'L / Forest Green', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'L' }, { name: 'Color', value: 'Forest Green' }], price: { amount: '119.99', currencyCode: 'USD' } },
      { id: 'var-6-5', title: 'M / Burgundy', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'Burgundy' }], price: { amount: '119.99', currencyCode: 'USD' } },
    ],
    featuredImage: { url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80', altText: 'Merino Wool Sweater', width: 800, height: 800 },
    images: [
      { url: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80', altText: 'Merino Wool Sweater', width: 800, height: 800 },
      { url: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80', altText: 'Merino Wool Sweater layered', width: 800, height: 800 },
    ],
    seo: { title: 'Merino Wool Sweater', description: 'Soft merino wool crewneck sweater' },
    tags: ['apparel', 'tops', 'knitwear'],
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'gid://shopify/Product/7',
    handle: 'linen-shirt',
    availableForSale: true,
    title: 'Linen Shirt',
    description: 'Breathable 100% linen shirt, perfect for warm weather. Features a relaxed fit and a classic button-down collar.',
    descriptionHtml: '<p>Breathable <strong>100% linen shirt</strong>, perfect for warm weather. Features a relaxed fit and a classic button-down collar.</p><ul><li>100% European linen</li><li>Relaxed fit</li><li>Button-down collar</li><li>Machine washable</li></ul>',
    options: [
      { id: 'opt-12', name: 'Size', values: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'opt-13', name: 'Color', values: ['White', 'Sky Blue', 'Sand'] },
    ],
    priceRange: {
      maxVariantPrice: { amount: '89.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '89.99', currencyCode: 'USD' },
    },
    variants: [
      { id: 'var-7-1', title: 'S / White', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'S' }, { name: 'Color', value: 'White' }], price: { amount: '89.99', currencyCode: 'USD' } },
      { id: 'var-7-2', title: 'M / White', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'White' }], price: { amount: '89.99', currencyCode: 'USD' } },
      { id: 'var-7-3', title: 'M / Sky Blue', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'Sky Blue' }], price: { amount: '89.99', currencyCode: 'USD' } },
      { id: 'var-7-4', title: 'L / Sky Blue', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'L' }, { name: 'Color', value: 'Sky Blue' }], price: { amount: '89.99', currencyCode: 'USD' } },
      { id: 'var-7-5', title: 'M / Sand', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'M' }, { name: 'Color', value: 'Sand' }], price: { amount: '89.99', currencyCode: 'USD' } },
    ],
    featuredImage: { url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80', altText: 'Linen Shirt', width: 800, height: 800 },
    images: [
      { url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80', altText: 'Linen Shirt', width: 800, height: 800 },
    ],
    seo: { title: 'Linen Shirt', description: 'Breathable European linen shirt' },
    tags: ['apparel', 'tops', 'summer'],
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'gid://shopify/Product/8',
    handle: 'silver-hoop-earrings',
    availableForSale: true,
    title: 'Silver Hoop Earrings',
    description: 'Minimalist sterling silver hoop earrings. Lightweight and versatile, these hoops go from day to night effortlessly.',
    descriptionHtml: '<p>Minimalist <strong>sterling silver hoop earrings</strong>. Lightweight and versatile, these hoops go from day to night effortlessly.</p><ul><li>925 Sterling Silver</li><li>Hypoallergenic</li><li>Available in 3 sizes</li><li>Tarnish resistant</li></ul>',
    options: [
      { id: 'opt-14', name: 'Size', values: ['Small (20mm)', 'Medium (30mm)', 'Large (40mm)'] },
    ],
    priceRange: {
      maxVariantPrice: { amount: '45.99', currencyCode: 'USD' },
      minVariantPrice: { amount: '39.99', currencyCode: 'USD' },
    },
    variants: [
      { id: 'var-8-1', title: 'Small (20mm)', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'Small (20mm)' }], price: { amount: '39.99', currencyCode: 'USD' } },
      { id: 'var-8-2', title: 'Medium (30mm)', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'Medium (30mm)' }], price: { amount: '42.99', currencyCode: 'USD' } },
      { id: 'var-8-3', title: 'Large (40mm)', availableForSale: true, selectedOptions: [{ name: 'Size', value: 'Large (40mm)' }], price: { amount: '45.99', currencyCode: 'USD' } },
    ],
    featuredImage: { url: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80', altText: 'Silver Hoop Earrings', width: 800, height: 800 },
    images: [
      { url: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80', altText: 'Silver Hoop Earrings', width: 800, height: 800 },
    ],
    seo: { title: 'Silver Hoop Earrings', description: 'Minimalist sterling silver hoops' },
    tags: ['accessories', 'jewelry'],
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

// Featured products for homepage (first 3)
export const HOMEPAGE_FEATURED_PRODUCTS = [MOCK_PRODUCTS[0]!, MOCK_PRODUCTS[3]!, MOCK_PRODUCTS[2]!];

// Carousel products
export const HOMEPAGE_CAROUSEL_PRODUCTS = MOCK_PRODUCTS.slice(1);

export const MOCK_COLLECTIONS: Collection[] = [
  {
    handle: '',
    title: 'All',
    description: 'All products',
    seo: { title: 'All', description: 'All products' },
    path: '/search',
    updatedAt: new Date().toISOString(),
  },
  {
    handle: 'apparel',
    title: 'Apparel',
    description: 'Clothing for every occasion',
    seo: { title: 'Apparel', description: 'Clothing for every occasion' },
    path: '/search/apparel',
    updatedAt: new Date().toISOString(),
  },
  {
    handle: 'accessories',
    title: 'Accessories',
    description: 'Bags, jewelry and more',
    seo: { title: 'Accessories', description: 'Bags, jewelry and more' },
    path: '/search/accessories',
    updatedAt: new Date().toISOString(),
  },
  {
    handle: 'footwear',
    title: 'Footwear',
    description: 'Shoes for every step',
    seo: { title: 'Footwear', description: 'Shoes for every step' },
    path: '/search/footwear',
    updatedAt: new Date().toISOString(),
  },
];

export const HEADER_MENU: Menu[] = [
  { title: 'All', path: '/search' },
  { title: 'Apparel', path: '/search/apparel' },
  { title: 'Accessories', path: '/search/accessories' },
  { title: 'Footwear', path: '/search/footwear' },
];

export const FOOTER_MENU: Menu[] = [
  { title: 'Home', path: '/' },
  { title: 'Search', path: '/search' },
  { title: 'Apparel', path: '/search/apparel' },
  { title: 'Accessories', path: '/search/accessories' },
];

export const MOCK_PAGES: Page[] = [
  {
    id: 'page-1',
    title: 'About Us',
    handle: 'about',
    body: '<h2>Our Story</h2><p>We are a modern fashion brand dedicated to creating timeless, sustainable pieces that fit seamlessly into your everyday life. Founded in 2020, we believe that great style should never come at the cost of quality or the planet.</p><h2>Our Values</h2><p>Every piece in our collection is thoughtfully designed and ethically made. We work with certified factories and use sustainable materials wherever possible.</p>',
    bodySummary: 'Learn about our story and values.',
    seo: { title: 'About Us', description: 'Learn about our brand story and values.' },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'page-2',
    title: 'Shipping & Returns',
    handle: 'shipping',
    body: '<h2>Shipping</h2><p>We offer free standard shipping on all orders over $75. Orders typically ship within 1-2 business days and arrive within 5-7 business days.</p><h2>Returns</h2><p>We accept returns within 30 days of purchase. Items must be unworn, unwashed, and in original packaging with tags attached.</p>',
    bodySummary: 'Information about shipping and returns.',
    seo: { title: 'Shipping & Returns', description: 'Shipping and returns policy.' },
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];
