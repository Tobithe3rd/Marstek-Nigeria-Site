"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollReveal({
  children,
  delay = 0,
  stagger = false,
  duration = 600,
}: {
  children: React.ReactNode;
  delay?: number;
  stagger?: boolean;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion: if set, reveal instantly
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "-40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all ease-premium ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
