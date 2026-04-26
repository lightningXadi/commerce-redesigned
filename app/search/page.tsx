import Grid from "components/grid";
import ProductGridItems from "components/layout/product-grid-items";
import { defaultSort, sorting } from "lib/constants";
import { getProducts } from "lib/shopify";

export const metadata = {
  title: "Shop",
  description: "Browse our full collection.",
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? "results" : "result";

  return (
    <>
      {searchValue ? (
        <p className="mb-6 text-sm" style={{ color: 'var(--bark)' }}>
          {products.length === 0
            ? "No products found for "
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-semibold" style={{ color: 'var(--espresso)' }}>
            &quot;{searchValue}&quot;
          </span>
        </p>
      ) : (
        <p className="mb-6 text-xs uppercase tracking-widest" style={{ color: 'var(--sand)' }}>
          {products.length} items
        </p>
      )}
      {products.length > 0 ? (
        <Grid className="grid-cols-2 md:grid-cols-3 gap-2">
          <ProductGridItems products={products} />
        </Grid>
      ) : (
        <div className="py-20 text-center">
          <p className="font-serif-display text-2xl italic mb-3" style={{ color: 'var(--sand)' }}>Nothing here yet</p>
          <a href="/search" className="text-xs uppercase tracking-widest" style={{ color: 'var(--bark)' }}>
            View all products
          </a>
        </div>
      )}
    </>
  );
}
