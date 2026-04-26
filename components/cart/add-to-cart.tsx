"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { addItem } from "components/cart/actions";
import { Product, ProductVariant } from "lib/shopify/types";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useCart } from "./cart-context";

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const baseStyle: React.CSSProperties = {
    backgroundColor: 'var(--espresso)',
    color: 'var(--cream)',
  };
  const disabledStyle: React.CSSProperties = {
    backgroundColor: 'var(--stone)',
    color: 'var(--sand)',
    cursor: 'not-allowed',
  };

  if (!availableForSale) {
    return (
      <button
        disabled
        className="relative flex w-full items-center justify-center py-4 text-sm uppercase tracking-widest font-medium"
        style={disabledStyle}
      >
        Out of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        disabled
        className="relative flex w-full items-center justify-center py-4 text-sm uppercase tracking-widest font-medium"
        style={disabledStyle}
      >
        <div className="absolute left-4">
          <PlusIcon className="h-4 w-4" />
        </div>
        Select Options
      </button>
    );
  }

  return (
    <button
      aria-label="Add to cart"
      className="relative flex w-full items-center justify-center py-4 text-sm uppercase tracking-widest font-medium transition-all duration-200 hover:opacity-85"
      style={baseStyle}
    >
      <div className="absolute left-4">
        <PlusIcon className="h-4 w-4" />
      </div>
      Add to Cart
    </button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const searchParams = useSearchParams();
  const [message, formAction] = useActionState(addItem, null);

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase()),
    ),
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const addItemAction = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find(
    (variant) => variant.id === selectedVariantId,
  )!;

  return (
    <form
      action={async () => {
        addCartItem(finalVariant, product);
        addItemAction();
      }}
    >
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
