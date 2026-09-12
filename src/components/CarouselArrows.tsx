"use client";

export function CarouselArrows() {
  return (
    <>
      <button
        onClick={() => {
          const el = document.getElementById('product-scroll');
          if (el) el.scrollBy({ left: -340, behavior: 'smooth' });
        }}
        aria-label="Scroll products left"
        className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-md items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button
        onClick={() => {
          const el = document.getElementById('product-scroll');
          if (el) el.scrollBy({ left: 340, behavior: 'smooth' });
        }}
        aria-label="Scroll products right"
        className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-md items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </>
  );
}
