import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 pb-6 border-b" style={{ borderColor: 'var(--stone)' }}>
        <p className="text-xs uppercase tracking-widest mb-3 font-medium" style={{ color: 'var(--bark)' }}>
          {product.tags?.[0] || 'New Arrival'}
        </p>
        <h1 className="font-serif-display mb-4 leading-tight" style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          color: 'var(--espresso)',
          letterSpacing: '-0.01em',
        }}>
          {product.title}
        </h1>
        <div className="flex items-center gap-2">
          <Price
            className="text-xl font-medium"
            style={{ color: 'var(--bark)' }}
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>

      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-8 text-sm leading-relaxed"
          style={{ color: 'var(--bark)' }}
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart product={product} />

      {/* Trust signals */}
      <div className="mt-6 pt-6 border-t grid grid-cols-2 gap-4" style={{ borderColor: 'var(--stone)' }}>
        {[
          { icon: '✦', label: 'Free Returns', sub: '30 day policy' },
          { icon: '✦', label: 'Secure Checkout', sub: 'SSL encrypted' },
          { icon: '✦', label: 'Free Shipping', sub: 'Orders over $100' },
          { icon: '✦', label: 'Sustainably Made', sub: 'Ethical sourcing' },
        ].map(({ icon, label, sub }) => (
          <div key={label} className="flex items-start gap-2">
            <span className="text-xs mt-0.5" style={{ color: 'var(--bark)' }}>{icon}</span>
            <div>
              <p className="text-xs font-medium" style={{ color: 'var(--espresso)' }}>{label}</p>
              <p className="text-xs" style={{ color: 'var(--sand)' }}>{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
