import { getCollectionProducts } from "lib/shopify";
import Link from "next/link";
import { GridTileImage } from "./grid/tile";

export async function Carousel() {
  const products = await getCollectionProducts({ collection: "hidden-homepage-carousel" });
  if (!products?.length) return null;

  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="w-full overflow-x-auto pb-8 pt-2">
      <ul className="flex animate-carousel gap-3 px-4 lg:px-10">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-[3/4] h-[40vh] max-h-[320px] w-[200px] flex-none"
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full block">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                }}
                src={product.featuredImage?.url}
                fill
                sizes="200px"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
