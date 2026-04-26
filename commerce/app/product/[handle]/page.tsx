import { GridTileImage } from "components/grid/tile";
import Footer from "components/layout/footer";
import { Gallery } from "components/product/gallery";
import { ProductDescription } from "components/product/product-description";
import { HIDDEN_PRODUCT_TAG } from "lib/constants";
import { getProduct, getProductRecommendations } from "lib/shopify";
import type { Image } from "lib/shopify/types";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);
  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: { index: indexable, follow: indexable, googleBot: { index: indexable, follow: indexable } },
    openGraph: url ? { images: [{ url, width, height, alt }] } : null,
  };
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const product = await getProduct(params.handle);
  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      {/* Breadcrumb */}
      <div className="px-6 lg:px-10 py-4 border-b text-xs uppercase tracking-widest" style={{ borderColor: 'var(--stone)', color: 'var(--sand)' }}>
        <Link href="/" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--bark)' }}>Home</Link>
        <span className="mx-2">/</span>
        <Link href="/search" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--bark)' }}>Shop</Link>
        <span className="mx-2">/</span>
        <span style={{ color: 'var(--espresso)' }}>{product.title}</span>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 lg:px-10 py-10">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Gallery */}
          <div className="w-full lg:w-3/5">
            <Suspense fallback={<div className="aspect-square w-full" style={{ backgroundColor: 'var(--stone)' }} />}>
              <Gallery
                images={product.images.slice(0, 5).map((image: Image) => ({
                  src: image.url,
                  altText: image.altText,
                }))}
              />
            </Suspense>
          </div>

          {/* Product info */}
          <div className="w-full lg:w-2/5 pt-8 lg:pt-0">
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>

        <RelatedProducts id={product.id} />
      </div>
      <Footer />
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);
  if (!relatedProducts.length) return null;

  return (
    <div className="mt-20 pt-12 border-t" style={{ borderColor: 'var(--stone)' }}>
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs uppercase tracking-widest font-medium" style={{ color: 'var(--bark)' }}>You may also like</span>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stone)' }} />
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {relatedProducts.slice(0, 4).map((product) => (
          <li key={product.handle} className="aspect-square">
            <Link className="relative block h-full w-full" href={`/product/${product.handle}`} prefetch={true}>
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
