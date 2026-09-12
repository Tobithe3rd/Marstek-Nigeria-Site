"use client";

import { useEffect, useRef } from "react";

export function MarqueeCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleTouch = () => {
      el.classList.add("marquee-paused");
      const resume = () => {
        el.classList.remove("marquee-paused");
        el.removeEventListener("touchend", resume);
      };
      setTimeout(() => el.addEventListener("touchend", resume, { once: true }), 300);
    };
    el.addEventListener("touchstart", handleTouch, { passive: true });
    return () => el.removeEventListener("touchstart", handleTouch);
  }, []);

  return (
    <>
      <style>{`
        @keyframes marquee-drift {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marquee-drift 45s linear infinite;
          will-change: transform;
        }

        .marquee-paused .marquee-track,
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
          .marquee-paused .marquee-track { animation: none !important; }
        }
      `}</style>
      <div
        ref={containerRef}
        className="marquee-container overflow-hidden relative w-full"
        aria-label="Products marquee"
      >
        <div className="marquee-track flex gap-5 md:gap-6 w-max">
          {/* Duplicate list for seamless loop — content injected by parent */}
        </div>
      </div>
    </>
  );
}
