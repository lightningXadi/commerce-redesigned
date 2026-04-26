import { Suspense } from "react";
import { getCollections } from "lib/shopify";
import FilterList from "./filter";

async function CollectionList() {
  const collections = await getCollections();
  return <FilterList list={collections} title="Collections" />;
}

export default function Collections() {
  return (
    <Suspense
      fallback={
        <div className="space-y-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 rounded animate-pulse" style={{ backgroundColor: 'var(--stone)', width: `${60 + i * 5}%` }} />
          ))}
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
