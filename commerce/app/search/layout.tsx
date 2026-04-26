import Footer from "components/layout/footer";
import Collections from "components/layout/search/collections";
import FilterList from "components/layout/search/filter";
import { sorting } from "lib/constants";
import ChildrenWrapper from "./children-wrapper";
import { Suspense } from "react";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Page header */}
      <div className="px-6 lg:px-10 py-10 border-b" style={{ borderColor: 'var(--stone)' }}>
        <p className="text-xs uppercase tracking-widest mb-2 font-medium" style={{ color: 'var(--bark)' }}>Browse</p>
        <h1 className="font-serif-display text-4xl" style={{ color: 'var(--espresso)', letterSpacing: '-0.01em' }}>
          All Products
        </h1>
      </div>

      <div className="mx-auto flex max-w-screen-xl gap-0 px-0 pb-4" style={{ color: 'var(--espresso)' }}>
        {/* Left sidebar: Collections */}
        <div
          className="hidden md:block flex-none w-48 border-r py-8 px-6"
          style={{ borderColor: 'var(--stone)' }}
        >
          <Collections />
        </div>

        {/* Main content */}
        <div className="flex-1 min-h-screen px-4 lg:px-8 py-8">
          <Suspense fallback={null}>
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </Suspense>
        </div>

        {/* Right sidebar: Sort */}
        <div
          className="hidden md:block flex-none w-36 border-l py-8 px-4"
          style={{ borderColor: 'var(--stone)' }}
        >
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
      <Footer />
    </>
  );
}
