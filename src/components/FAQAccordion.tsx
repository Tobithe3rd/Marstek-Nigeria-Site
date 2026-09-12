"use client";

import { useState, useCallback } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const categories = [
  {
    label: "Ordering & Delivery",
    items: [
      { q: "Do you deliver across Nigeria?", a: "Yes. We deliver to Lagos and major cities with standard timelines, and to other regions through trusted logistics partners. Delivery timelines vary by location and are confirmed at the time of inquiry." },
      { q: "How do I pay?", a: "We accept bank transfer and mobile payment for confirmed orders. Payment details are shared after your WhatsApp inquiry, once we confirm stock, pricing, and delivery to your location." },
    ],
  },
  {
    label: "Product & Warranty",
    items: [
      { q: "How do I choose the right wattage for my needs?", a: "Start with your highest-wattage appliance. A 500W station handles phones, laptops, and small fans. A 1000W or 2000W unit covers refrigerators, power tools, and full home backup. If unsure, reach out via WhatsApp and we will help match a station to your actual load." },
      { q: "What warranty do products include?", a: "All Marstek products come with a manufacturer warranty. The specific duration and coverage terms depend on the model. Full warranty details are provided with each quote and can be discussed before ordering." },
      { q: "Can solar panels charge during the rainy season?", a: "Yes. Monocrystalline panels generate power from available daylight, not direct sun alone. During overcast or rainy days, output drops but charging continues. A larger array or battery reserve helps maintain reliability through extended cloudy periods." },
    ],
  },
];

export function FAQAccordion() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = useCallback((catIndex: number, itemIndex: number) => {
    const key = `${catIndex}-${itemIndex}`;
    setOpenKey((prev) => (prev === key ? null : key));
  }, []);

  const isOpen = (catIndex: number, itemIndex: number) => {
    return openKey === `${catIndex}-${itemIndex}`;
  };

  return (
    <>
      <style>{`@media (prefers-reduced-motion: reduce) {
        .faq-answer { transition: none !important; max-height: 600px !important; opacity: 1 !important; }
        .faq-btn span.rotate-45 { transform: none !important; }
      }`}</style>
      <div className="space-y-10 md:space-y-14">
      {categories.map((cat, ci) => (
        <div key={cat.label}>
          {/* Category label — small, restrained, no eyebrow style */}
          <div className="mb-4 md:mb-5">
            <h3 className="font-display text-sm md:text-base font-normal text-brand tracking-tight leading-snug">
              {cat.label}
            </h3>
            <div className="mt-2 h-[1px] w-12 bg-brand/20 rounded-full" aria-hidden="true" />
          </div>
          <div className="space-y-3 md:space-y-4">
            {cat.items.map((faq, qi) => {
              const open = isOpen(ci, qi);
              return (
                <div
                  key={`${ci}-${qi}`}
                  className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ease-premium ${open ? "shadow-[0_12px_40px_rgba(3,180,255,0.08)]" : "hover:shadow-[0_8px_32px_rgba(3,180,255,0.06)]"}`}
                >
                  <button
                    onClick={() => toggle(ci, qi)}
                    className="faq-btn w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white hover:bg-white/30 transition-colors duration-200"
                    aria-expanded={open}
                    aria-controls={`faq-ans-${ci}-${qi}`}
                  >
                    <span className="font-display text-base md:text-lg text-black leading-snug tracking-tight">{faq.q}</span>
                    <span
                      className={`shrink-0 text-brand transition-transform duration-300 ease-premium mt-1 ${open ? "rotate-45" : "rotate-0"}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-ans-${ci}-${qi}`}
                    className={`faq-answer overflow-hidden transition-all duration-300 ease-premium ${open ? "max-h-[600px] opacity-100 py-3" : "max-h-0 opacity-0"}`}
                    style={{ transitionProperty: "max-height, opacity, padding-top, padding-bottom" }}
                  >
                    <div className="px-6 md:px-8 pb-5 md:pb-6">
                      <p className="text-sm md:text-base text-stone-text leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Placeholder flag kept */}
      <div className="mt-10 text-[10px] font-mono uppercase tracking-wider text-stone-muted/40">
        {/* PLACEHOLDER FAQ — confirm answers with Marstek --> */}
      </div>
    </div>
    </>
  );
}
