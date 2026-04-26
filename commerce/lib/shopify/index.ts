import { NextRequest, NextResponse } from 'next/server';
import {
  HOMEPAGE_CAROUSEL_PRODUCTS,
  HOMEPAGE_FEATURED_PRODUCTS,
  FOOTER_MENU,
  HEADER_MENU,
  MOCK_COLLECTIONS,
  MOCK_PAGES,
  MOCK_PRODUCTS,
} from 'lib/mock-data';
import { Cart, Collection, Menu, Page, Product } from './types';

// ─── Cart (in-memory, managed by cart-context on client) ─────────────────────

export async function createCart(): Promise<Cart> {
  return {
    id: `mock-cart-${Date.now()}`,
    checkoutUrl: '/checkout',
    totalQuantity: 0,
    lines: [],
    cost: {
      subtotalAmount: { amount: '0', currencyCode: 'USD' },
      totalAmount: { amount: '0', currencyCode: 'USD' },
      totalTaxAmount: { amount: '0', currencyCode: 'USD' },
    },
  };
}

export async function addToCart(_lines: { merchandiseId: string; quantity: number }[]): Promise<Cart> {
  return createCart();
}

export async function removeFromCart(_lineIds: string[]): Promise<Cart> {
  return createCart();
}

export async function updateCart(
  _lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  return createCart();
}

export async function getCart(): Promise<Cart | undefined> {
  return undefined;
}

// ─── Collections ──────────────────────────────────────────────────────────────

export async function getCollection(handle: string): Promise<Collection | undefined> {
  return MOCK_COLLECTIONS.find((c) => c.handle === handle);
}

export async function getCollections(): Promise<Collection[]> {
  return MOCK_COLLECTIONS;
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  if (collection === 'hidden-homepage-featured-items') {
    return HOMEPAGE_FEATURED_PRODUCTS;
  }
  if (collection === 'hidden-homepage-carousel') {
    return HOMEPAGE_CAROUSEL_PRODUCTS;
  }

  let products =
    collection === ''
      ? MOCK_PRODUCTS
      : MOCK_PRODUCTS.filter((p) => p.tags.includes(collection));

  if (sortKey === 'PRICE') {
    products = [...products].sort((a, b) => {
      const diff =
        parseFloat(a.priceRange.minVariantPrice.amount) -
        parseFloat(b.priceRange.minVariantPrice.amount);
      return reverse ? -diff : diff;
    });
  } else if (sortKey === 'CREATED') {
    products = [...products].sort((a, b) => {
      const diff = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
      return reverse ? -diff : diff;
    });
  }

  return products;
}

// ─── Menus ────────────────────────────────────────────────────────────────────

export async function getMenu(handle: string): Promise<Menu[]> {
  if (handle === 'next-js-frontend-header-menu') return HEADER_MENU;
  if (handle === 'next-js-frontend-footer-menu') return FOOTER_MENU;
  return [];
}

// ─── Pages ────────────────────────────────────────────────────────────────────

export async function getPage(handle: string): Promise<Page> {
  const page = MOCK_PAGES.find((p) => p.handle === handle);
  if (!page) {
    return {
      id: 'not-found',
      title: 'Page Not Found',
      handle,
      body: '<p>This page could not be found.</p>',
      bodySummary: 'Page not found.',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
  return page;
}

export async function getPages(): Promise<Page[]> {
  return MOCK_PAGES;
}

// ─── Products ─────────────────────────────────────────────────────────────────

export async function getProduct(handle: string): Promise<Product | undefined> {
  return MOCK_PRODUCTS.find((p) => p.handle === handle);
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  return MOCK_PRODUCTS.filter((p) => p.id !== productId).slice(0, 4);
}

export async function getProducts({
  query,
  reverse,
  sortKey,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  let products = [...MOCK_PRODUCTS];

  if (query) {
    const q = query.toLowerCase();
    products = products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  if (sortKey === 'PRICE') {
    products.sort((a, b) => {
      const diff =
        parseFloat(a.priceRange.minVariantPrice.amount) -
        parseFloat(b.priceRange.minVariantPrice.amount);
      return reverse ? -diff : diff;
    });
  } else if (sortKey === 'CREATED_AT') {
    products.sort((a, b) => {
      const diff = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
      return reverse ? -diff : diff;
    });
  }

  return products;
}

// ─── Revalidate (no-op for mock) ──────────────────────────────────────────────

export async function revalidate(_req: NextRequest): Promise<NextResponse> {
  return NextResponse.json({ status: 200 });
}
