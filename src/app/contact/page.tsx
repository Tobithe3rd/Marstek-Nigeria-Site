import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl md:max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(6rem,14vw,12rem)] md:py-[clamp(8rem,10vw,12rem)]">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-[clamp(3rem,8vw,6rem)] md:gap-[clamp(4rem,6vw,6rem)] items-start">
        <div>
          <h1 className="font-display text-hero font-normal tracking-tight text-black leading-[1.05] text-[clamp(2.25rem,6vw,4.5rem)]">
            Get in <span className="italic text-brand">touch.</span>
          </h1>
          <div className="mt-6 w-16 h-[3px] bg-gradient-to-r from-brand to-brand-soft rounded-sm" aria-hidden="true" />
          <div className="mt-10 space-y-6 text-stone-text leading-[1.75] text-[1.05rem] md:text-lg">
            <p>
              We are based in Lagos, Nigeria. Whether you need advice on the right power station for your home, want to discuss solar arrays for a site, or just want to confirm current stock — reach out directly.
            </p>
            <address className="not-italic space-y-4 text-sm md:text-base">
              <div>
                <span className="block text-xs font-mono uppercase tracking-[0.15em] text-stone-muted mb-1">Email</span>
                <a href="mailto:hello@marsteknigeria.com" className="text-black hover:text-brand transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white font-medium">
                  hello@marsteknigeria.com
                </a>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-[0.15em] text-stone-muted mb-1">Phone</span>
                <span className="text-stone-muted">+234 800 000 0000 (placeholder)</span>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-[0.15em] text-stone-muted mb-1">Location</span>
                <span className="text-stone-muted">Lagos, Nigeria</span>
              </div>
            </address>
          </div>
        </div>

        {/* WhatsApp card — enhanced glass */}
        <div className="glass-card-dark p-[clamp(1.75rem,4vw,2.5rem)] md:p-[clamp(2.5rem,3vw,3.5rem)] shadow-[0_20px_60px_rgba(3,180,255,0.08)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-brand/10 -translate-y-1/2 translate-x-1/3 rounded-full blur-[60px]" aria-hidden="true" />
          <h2 className="font-display text-2xl md:text-[1.75rem] font-normal text-white tracking-tight relative z-10 leading-snug">
            Quick WhatsApp Chat
          </h2>
          <p className="mt-4 text-sm text-white/55 leading-relaxed relative z-10">
            Send a message directly. We respond within minutes during business hours.
          </p>
          <div className="mt-7 relative z-10">
            <WhatsAppButton />
          </div>
          <p className="mt-5 text-[11px] text-white/20 font-mono relative z-10">
            Placeholder number — replace with Marstek contact
          </p>
        </div>
      </div>
    </div>
  );
}
