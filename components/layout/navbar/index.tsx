import CartModal from "components/cart/modal";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav style={{ borderBottom: '1px solid var(--stone)', backgroundColor: 'var(--cream)' }} className="sticky top-0 z-40">
      {/* Announcement bar */}
      <div style={{ backgroundColor: 'var(--espresso)', color: 'var(--cream)' }} className="text-center py-2 text-xs tracking-widest uppercase">
        Free shipping on orders over $100
      </div>

      {/* Main nav */}
      <div className="relative flex items-center justify-between px-6 py-4 lg:px-10">
        {/* Mobile hamburger */}
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>

        {/* Logo + desktop links */}
        <div className="flex items-center gap-10">
          <Link href="/" prefetch={true} className="flex items-center gap-3">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: 32, height: 32, backgroundColor: 'var(--espresso)', borderRadius: 2 }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 14L9 4L15 14H3Z" fill="var(--cream)" />
              </svg>
            </div>
            <span
              className="font-serif-display text-xl hidden lg:block"
              style={{ color: 'var(--espresso)', letterSpacing: '0.04em' }}
            >
              {SITE_NAME || "My Store"}
            </span>
          </Link>

          {/* Desktop nav links — no event handlers, use CSS hover */}
          {menu.length ? (
            <ul className="hidden gap-8 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="nav-link uppercase tracking-widest text-xs font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Search + Cart */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
