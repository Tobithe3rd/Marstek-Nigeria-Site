"use client";

import { products } from "@/lib/products";
import { useRef, useEffect } from "react";

export function ProductsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pause on hover (desktop) and touch (mobile)
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const pause = () => container.classList.add("marquee-paused");
    const resume = () => container.classList.remove("marquee-paused");

    const handleMouseEnter = pause;
    const handleMouseLeave = () => setTimeout(resume, 300);

    const handleTouchStart = () => {
      pause();
      setTimeout(resume, 1200);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  // Duplicate products for seamless loop
  const duplicated = [...products, ...products];

  return (
    <>
      <style>{`
        @keyframes marquee-drift {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-drift 50s linear infinite;
          will-change: transform;
        }
        .marquee-paused .marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
          .marquee-paused .marquee-track { animation: none !important; }
        }
      `}</style>
      <div
        ref={containerRef}
        className="marquee-container overflow-hidden relative w-full pb-6"
        aria-label="Products marquee"
      >
        <div
          ref={trackRef}
          className="marquee-track flex gap-5 md:gap-6 w-max"
        >
          {duplicated.map((p, i) => (
            <a
              key={`${p.id}-${i}`}
              href="#"
              className="snap-start shrink-0 w-[280px] md:w-[340px] glass-card rounded-xl overflow-hidden hover:-translate-y-[4px] hover:shadow-[0_28px_80px_rgba(3,180,255,0.15)] transition-[transform,shadow] duration-300 ease-premium block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label={`View ${p.name}`}
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-stone-warm">
                <img
                  src={p.placeholderImage}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-premium hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-brand/90 text-white text-[10px] font-mono font-medium uppercase tracking-wide px-2.5 py-0.5 rounded-md">
                  {p.category === "power-station" ? "Station" : "Solar"}
                </div>
              </div>
              <div className="p-[clamp(1.25rem,3.5vw,2rem)] md:p-[clamp(1.75rem,3vw,2.5rem)]">
                <h3 className="font-display text-lg md:text-xl font-normal text-black leading-snug tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-stone-text leading-relaxed line-clamp-2">{p.description}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-display font-normal text-brand leading-none">{p.wattage}W</span>
                  <span className="text-xs text-stone-muted font-mono uppercase tracking-wider">peak</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
