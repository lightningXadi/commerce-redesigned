import Link from "next/link";
import FooterMenu from "components/layout/footer-menu";
import { getMenu } from "lib/shopify";
import { Suspense } from "react";

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const menu = await getMenu("next-js-frontend-footer-menu");
  const copyrightName = COMPANY_NAME || SITE_NAME || "";

  return (
    <footer style={{ backgroundColor: 'var(--espresso)', color: 'var(--sand)' }} className="mt-12">
      {/* Top footer */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand col */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: 32, height: 32, backgroundColor: 'var(--cream)', borderRadius: 2 }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 14L9 4L15 14H3Z" fill="var(--espresso)" />
              </svg>
            </div>
            <span className="font-serif-display text-lg tracking-wide" style={{ color: 'var(--cream)' }}>
              {SITE_NAME || "My Store"}
            </span>
          </Link>
          <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--sand)' }}>
            Thoughtfully crafted essentials for modern living. Quality over quantity, always.
          </p>
        </div>

        {/* Nav links */}
        <div className="md:col-span-2">
          <Suspense fallback={null}>
            <FooterMenu menu={menu} />
          </Suspense>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-1">
          <p className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: 'var(--cream)' }}>
            Stay in the loop
          </p>
          <p className="text-xs mb-4 leading-relaxed" style={{ color: 'var(--sand)' }}>
            New arrivals, exclusive offers, and stories from our makers.
          </p>
          <div className="flex border-b" style={{ borderColor: 'var(--bark)' }}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent text-sm py-2 outline-none placeholder:opacity-40"
              style={{ color: 'var(--cream)' }}
            />
            <button className="text-xs uppercase tracking-widest py-2 pl-4 font-medium transition-opacity hover:opacity-70" style={{ color: 'var(--cream)' }}>
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 md:px-10 py-6 flex flex-col md:flex-row items-center gap-3 md:gap-0 max-w-7xl mx-auto"
        style={{ borderColor: 'var(--bark)' }}
      >
        <p className="text-xs" style={{ color: 'var(--sand)' }}>
          &copy; {copyrightDate} {copyrightName}. All rights reserved.
        </p>
        <div className="md:ml-auto flex gap-6 text-xs" style={{ color: 'var(--bark)' }}>
          <a href="#" className="hover:opacity-70 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
