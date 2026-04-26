import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";

export const metadata = {
  description: "Thoughtfully crafted essentials for modern living.",
  openGraph: { type: "website" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-36 overflow-hidden"
        style={{ backgroundColor: 'var(--stone)' }}
      >
        {/* Decorative background text */}
        <span
          className="font-serif-display absolute select-none pointer-events-none"
          style={{
            fontSize: 'clamp(80px, 18vw, 220px)',
            color: 'rgba(44, 31, 20, 0.05)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
          }}
          aria-hidden
        >
          Essentials
        </span>

        <p className="text-xs uppercase tracking-widest mb-5 font-medium" style={{ color: 'var(--bark)' }}>
          New Collection — Spring 2025
        </p>
        <h1
          className="font-serif-display mb-6"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            lineHeight: 1.1,
            color: 'var(--espresso)',
            letterSpacing: '-0.02em',
          }}
        >
          Refined for<br />
          <em>everyday life</em>
        </h1>
        <p className="max-w-md text-base mb-10" style={{ color: 'var(--bark)', lineHeight: 1.7 }}>
          Thoughtfully crafted pieces that move with you — from quiet mornings to long evenings.
        </p>
        <a
          href="/search"
          className="inline-flex items-center gap-3 px-8 py-3.5 text-sm uppercase tracking-widest font-medium transition-all duration-300"
          style={{
            backgroundColor: 'var(--espresso)',
            color: 'var(--cream)',
          }}
          onMouseEnter={undefined}
        >
          Shop All
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      {/* Category strip */}
      <section className="flex overflow-x-auto gap-0 border-b" style={{ borderColor: 'var(--stone)' }}>
        {['All', 'Tops', 'Bottoms', 'Accessories', 'Footwear', 'Bags'].map((cat, i) => (
          <a
            key={cat}
            href={i === 0 ? '/search' : `/search?q=${cat.toLowerCase()}`}
            className="flex-none px-8 py-4 text-xs uppercase tracking-widest font-medium border-r transition-colors duration-200 hover:bg-stone-100 whitespace-nowrap"
            style={{
              borderColor: 'var(--stone)',
              color: 'var(--bark)',
            }}
          >
            {cat}
          </a>
        ))}
      </section>

      {/* Section label */}
      <div className="px-6 pt-12 pb-4 flex items-center gap-4">
        <span className="text-xs uppercase tracking-widest font-medium" style={{ color: 'var(--bark)' }}>Featured</span>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stone)' }} />
      </div>

      <ThreeItemGrid />

      {/* Brand strip */}
      <section
        className="my-8 mx-4 lg:mx-10 px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ backgroundColor: 'var(--espresso)' }}
      >
        <div>
          <p className="font-serif-display text-3xl italic mb-2" style={{ color: 'var(--cream)' }}>
            Quality over quantity.
          </p>
          <p className="text-sm" style={{ color: 'var(--sand)' }}>
            Each piece is made to last — sustainable, timeless, yours.
          </p>
        </div>
        <a
          href="/search"
          className="flex-none text-xs uppercase tracking-widest px-8 py-3.5 font-medium border transition-colors duration-200 hover:bg-white/10"
          style={{ borderColor: 'var(--sand)', color: 'var(--cream)' }}
        >
          Explore
        </a>
      </section>

      <div className="px-6 pt-8 pb-4 flex items-center gap-4">
        <span className="text-xs uppercase tracking-widest font-medium" style={{ color: 'var(--bark)' }}>More to explore</span>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--stone)' }} />
      </div>

      <Carousel />
      <Footer />
    </>
  );
}
