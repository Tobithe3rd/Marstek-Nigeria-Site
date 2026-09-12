"use client";

export function FAQAccordion() {
  return (
    <div className="space-y-3 md:space-y-4" id="faq-container" data-placeholder="confirm-answers-with-marstek">
      {[
        { q: "How do I choose the right wattage for my needs?", a: "Start with your highest-wattage appliance. A 500W station handles phones, laptops, and small fans. A 1000W or 2000W unit covers refrigerators, power tools, and full home backup. If unsure, reach out via WhatsApp and we will help match a station to your actual load." },
        { q: "Do you deliver across Nigeria?", a: "Yes. We deliver to Lagos and major cities with standard timelines, and to other regions through trusted logistics partners. Delivery timelines vary by location and are confirmed at the time of inquiry." },
        { q: "What warranty do products include?", a: "All Marstek products come with a manufacturer warranty. The specific duration and coverage terms depend on the model. Full warranty details are provided with each quote and can be discussed before ordering." },
        { q: "How do I pay?", a: "We accept bank transfer and mobile payment for confirmed orders. Payment details are shared after your WhatsApp inquiry, once we confirm stock, pricing, and delivery to your location." },
        { q: "Can solar panels charge during the rainy season?", a: "Yes. Monocrystalline panels generate power from available daylight, not direct sun alone. During overcast or rainy days, output drops but charging continues. A larger array or battery reserve helps maintain reliability through extended cloudy periods." },
      ].map((faq, idx) => (
        <div key={idx} className="glass-card rounded-xl overflow-hidden">
          <button
            onClick={() => {
              const btn = document.getElementById(`faq-btn-${idx}`);
              const ans = document.getElementById(`faq-ans-${idx}`);
              if (btn && ans) {
                const isOpen = ans.classList.contains('max-h-[500px]');
                if (isOpen) {
                  ans.classList.remove('max-h-[500px]', 'opacity-100', 'py-3');
                  ans.classList.add('max-h-0', 'opacity-0');
                  (btn.querySelector('span') as HTMLElement)?.classList.remove('rotate-45');
                } else {
                  ans.classList.remove('max-h-0', 'opacity-0');
                  ans.classList.add('max-h-[500px]', 'opacity-100', 'py-3');
                  (btn.querySelector('span') as HTMLElement)?.classList.add('rotate-45');
                }
              }
            }}
            id={`faq-btn-${idx}`}
            className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-expanded="false"
            aria-controls={`faq-ans-${idx}`}
          >
            <span className="font-display text-base md:text-lg text-black leading-snug tracking-tight">{faq.q}</span>
            <span className="shrink-0 text-brand transition-transform duration-300 ease-premium mt-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            </span>
          </button>
          <div id={`faq-ans-${idx}`} className="max-h-0 overflow-hidden transition-all duration-300 ease-premium opacity-0 px-6 md:px-8">
            <p className="text-sm md:text-base text-stone-text leading-relaxed pb-5">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
