'use server';

import { Cart } from 'lib/shopify/types';
import { redirect } from 'next/navigation';

// With mock data, cart is managed entirely client-side via cart-context.
// These server actions are kept as stubs so the existing components compile.

export async function addItem(
  prevState: any,
  selectedVariantId: string | undefined
) {
  if (!selectedVariantId) {
    return 'Error adding item to cart';
  }
  // Cart is managed optimistically on client via useCart / cart-context
  return null;
}

export async function removeItem(prevState: any, merchandiseId: string) {
  // Cart is managed optimistically on client via useCart / cart-context
  return null;
}

export async function updateItemQuantity(
  prevState: any,
  payload: { merchandiseId: string; quantity: number }
) {
  // Cart is managed optimistically on client via useCart / cart-context
  return null;
}

export async function redirectToCheckout() {
  // In demo mode, redirect to a simple checkout page
  redirect('/checkout');
}

export async function createCartAndSetCookie() {
  // No-op in mock mode — cart is client-side only
}
