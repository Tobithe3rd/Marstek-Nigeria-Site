/* DESIGN READ: premium tech landing for Nigerian solar energy, Apple Liquid Glass + sharp-corner exception (radius-glass: 4px), brand blue #03B4FF, editorial serif + geometric sans pairing, dark/light rhythm. */
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProductsMarquee } from "@/components/ProductsMarquee";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <div>
      {/* Hero — dark navy-deep with enhanced brand glow */}
      <section
        className="relative overflow-hidden bg-navy-deep text-white"
        aria-label="Hero"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Gradient overlay: solid navy fading to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" aria-hidden="true" />
        {/* Subtle geometric solar pattern — lowered opacity for premium depth */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(3,180,255,0.8) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Large brand glow blobs for depth */}
        <div
          className="absolute -top-[30%] -right-[15%] w-[80vw] h-[80vw] bg-brand/15 blur-[160px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-20%] left-[-20%] w-[70vw] h-[70vw] bg-brand-soft/10 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] bg-brand/8 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] pt-[clamp(6rem,16vw,14rem)] pb-[clamp(8rem,18vw,14rem)] md:pt-[clamp(9rem,14vw,14rem)] md:pb-[clamp(10rem,16vw,14rem)]">
          <div className="max-w-md sm:max-w-2xl lg:max-w-3xl animate-fade-up stagger">
            <h1 className="font-display text-hero font-normal leading-[1.02] tracking-tight text-white text-[clamp(2.5rem,7vw,5rem)] tracking-[-0.02em]">
              Reliable energy, <span className="italic text-brand-soft">anywhere</span> in Nigeria.
            </h1>
            <p className="mt-6 text-sm md:text-base text-white/50 leading-relaxed max-w-md">
              Portable solar power for homes, businesses, and communities, built for Nigerian heat and humidity.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center bg-white text-navy-deep px-7 py-3.5 text-sm font-bold tracking-tight shadow-[0_8px_28px_rgba(255,255,255,0.25)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.35)] hover:-translate-y-[2px] active:translate-y-0 active:shadow-[0_4px_14px_rgba(255,255,255,0.2)] transition-[transform,shadow,background-color] duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
              >
                View Products
              </Link>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for breathing room between sections */}
      <div className="h-[clamp(2rem,6vw,4rem)]" aria-hidden="true" />

      {/* Feature intro — editorial card, light glass background */}
      <ScrollReveal delay={150}>
      <section className="mx-auto max-w-5xl md:max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(6rem,14vw,12rem)] md:py-[clamp(8rem,10vw,12rem)]">
        <div className="glass-card p-[clamp(1.5rem,4vw,2.5rem)] md:p-[clamp(2.5rem,4vw,4rem)] md:rounded-2xl">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-center">
            <div>
              <h2 className="font-display text-display font-normal tracking-tight text-black leading-[1.1] text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em] animate-fade-up">
                Built for Nigerian <span className="italic text-brand">conditions.</span>
              </h2>
              <p className="mt-6 text-stone-text leading-[1.7] text-[1.05rem] md:text-lg">
                From dense urban neighborhoods to remote rural sites, our portable power stations and solar panels are selected for the realities Nigerian users face every day: intense heat, high humidity, and an infrastructure that demands self-reliance.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm font-mono text-stone-muted">
                <div>
                  <span className="block text-3xl font-display text-black font-normal">500W</span>
                  <span>Small backup</span>
                </div>
                <div>
                  <span className="block text-3xl font-display text-black font-normal">1000W</span>
                  <span>Home office</span>
                </div>
                <div>
                  <span className="block text-3xl font-display text-black font-normal">2000W</span>
                  <span>Full home</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden shadow-[0_30px_80px_rgba(10,22,40,0.22)] aspect-[4/5] rounded-lg">
                <Image
                  src="/images/hero-placeholder.jpg"
                  alt="Solar panel installation in Nigeria"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-6 left-6 bg-navy-deep/70 backdrop-blur-md px-5 py-3 rounded-md">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-white/50">Phase 1: Placeholders</p>
                  <p className="text-xs font-semibold text-white">Placeholder imagery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Spacer for breathing room between sections */}
      <div className="h-[clamp(2rem,6vw,4rem)]" aria-hidden="true" />

      {/* Subtle decorative divider between feature intro and what we offer */}
      <div className="mx-auto max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(2rem,6vw,4rem)]" aria-hidden="true">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      </div>

      {/* What we offer — dark glass cards with subtle radius */}
      <ScrollReveal delay={100}>
      <section className="bg-dark-section" aria-label="What we offer">
        <div className="mx-auto max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(6rem,14vw,12rem)] md:py-[clamp(8rem,10vw,12rem)]">
          <h2 className="font-display text-display font-normal tracking-tight text-white mb-16 md:mb-24 leading-[1.05] text-[clamp(2rem,5vw,3.5rem)]">
            Three ways to stay <span className="italic text-brand-soft">powered.</span>
          </h2>

          <div className="grid md:grid-cols-[1fr_1.2fr_1fr] gap-[clamp(1rem,2.5vw,1.5rem)] md:gap-[clamp(1.25rem,2vw,1.5rem)] stagger">
            {/* Card 1 — glass surface with subtle radius */}
            <article className="glass-card p-[clamp(1.25rem,3.5vw,2rem)] md:p-[clamp(1.75rem,3vw,2.5rem)] hover:-translate-y-[6px] hover:shadow-[0_28px_80px_rgba(3,180,255,0.12)] transition-[transform,shadow] duration-300 ease-premium animate-fade-up">
              <div className="w-10 h-10 bg-brand/15 flex items-center justify-center mb-6 rounded-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M12 9v6" />
                  <path d="M9 12h6" />
                </svg>
              </div>
              <h3 className="font-display text-xl md:text-[1.4rem] font-normal text-white tracking-tight leading-snug">Portable Power Stations</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                500W, 1000W, and 2000W units for backup, travel, and work. Built for heat, humidity, and long discharge cycles.
              </p>
            </article>

            {/* Card 2 — full-width middle, dark glass with image */}
            <article className="md:col-span-1 glass-card-dark overflow-hidden hover:-translate-y-[6px] hover:shadow-[0_28px_80px_rgba(3,180,255,0.2)] transition-[transform,shadow] duration-300 ease-premium animate-fade-up relative">
              <Image
                src="/images/placeholder-600w-solar.png"
                alt="Solar panel array"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" aria-hidden="true" />
              <div className="relative z-10 p-[clamp(1.25rem,3.5vw,2rem)] md:p-[clamp(1.75rem,3vw,2.5rem)]">
                <h3 className="font-display text-xl md:text-[1.4rem] font-normal text-white tracking-tight leading-snug">Solar Panels</h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  Foldable monocrystalline arrays for charging and direct solar applications. Fast recharge, minimal footprint.
                </p>
              </div>
            </article>

            {/* Card 3 — glass surface */}
            <article className="glass-card p-[clamp(1.25rem,3.5vw,2rem)] md:p-[clamp(1.75rem,3vw,2.5rem)] hover:-translate-y-[6px] hover:shadow-[0_28px_80px_rgba(3,180,255,0.12)] transition-[transform,shadow] duration-300 ease-premium animate-fade-up">
              <div className="w-10 h-10 bg-brand/15 flex items-center justify-center mb-6 rounded-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="font-display text-xl md:text-[1.4rem] font-normal text-white tracking-tight leading-snug">Local Support</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Based in Lagos. Service, advice, and delivery tailored to Nigerian conditions: heat, humidity, and the unexpected.
              </p>
            </article>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Products Marquee — continuous drift, duplicate for loop */}
      <ScrollReveal delay={120}>
      <section className="mx-auto max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(6rem,14vw,12rem)] md:py-[clamp(8rem,10vw,12rem)]" aria-label="Products">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="font-display text-display font-normal tracking-tight text-black leading-[1.05] text-[clamp(2rem,5vw,3.5rem)]">Our Products</h2>
            <p className="mt-3 text-stone-text text-base md:text-lg">Portable stations and solar panels selected for Nigerian conditions.</p>
          </div>
        </div>
        <ProductsMarquee />
      </section>
      </ScrollReveal>

      {/* How It Works — redesigned with glass-panel container, horizontal flow, progressive connection line */}
      <ScrollReveal delay={80}>
      <section className="mx-auto max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(6rem,14vw,12rem)] md:py-[clamp(8rem,10vw,12rem)]" aria-label="How It Works">
        <div className="glass-card p-[clamp(1.75rem,4vw,3rem)] md:p-[clamp(2.5rem,5vw,3.5rem)] rounded-2xl relative overflow-hidden">
          {/* Subtle decorative dot-pattern background */}
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(3,180,255,0.8) 1px, transparent 0)', backgroundSize: '28px 28px' }} />
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
              <h2 className="font-display text-display font-normal tracking-tight text-black leading-[1.05] text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em]">How It Works</h2>
              <p className="mt-4 text-stone-text text-base md:text-lg">Four simple steps from assessing your power need to reliable energy at home or work.</p>
            </div>

            {/* Step flow container */}
            <div className="relative">
              <div className="grid md:grid-cols-4 gap-8 md:gap-6">
                {[
                  { num: "01", title: "Assess Your Need", desc: "Identify the appliances and duration you need to power. Small backup, full home, or off-grid site." },
                  { num: "02", title: "Connect via WhatsApp", desc: "Message us directly. We help confirm the right product, pricing, and delivery timeline for your location." },
                  { num: "03", title: "Confirm & Deliver", desc: "We arrange delivery and, where needed, provide guidance on safe setup and usage for Nigerian conditions." },
                  { num: "04", title: "Reliable Power", desc: "Your station or solar array runs quietly and efficiently — ready for heat, humidity, and unpredictable infrastructure." },
                ].map((step, i) => (
                  <div key={i} className="relative group">
                    {/* Number circle */}
                    <div className="flex justify-center mb-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center shadow-[0_0_0_0_rgba(3,180,255,0)] group-hover:shadow-[0_0_20px_rgba(3,180,255,0.15)] transition-shadow duration-300">
                        <span className="font-display text-xl md:text-2xl font-normal text-brand leading-none">{step.num}</span>
                      </div>
                    </div>
                    {/* Arrow connector (mobile vertical) */}
                    <div className="md:hidden flex justify-center mb-4" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#03B4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-normal text-black tracking-tight leading-snug mb-3 text-center">{step.title}</h3>
                    <p className="text-sm text-stone-text leading-relaxed text-center">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Spacer */}
      <div className="h-[clamp(2rem,6vw,4rem)]" aria-hidden="true" />

      {/* Decorative divider between How It Works and Testimonials */}
      <div className="mx-auto max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(2rem,6vw,4rem)]" aria-hidden="true">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/15 to-transparent" />
      </div>

      {/* Testimonials — placeholder only */}
      <ScrollReveal delay={90}>
      <section className="mx-auto max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(6rem,14vw,12rem)] md:py-[clamp(8rem,10vw,12rem)] bg-dark-section" aria-label="Testimonials">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="font-display text-display font-normal tracking-tight text-white leading-[1.05] text-[clamp(2rem,5vw,3.5rem)]">What Customers Say</h2>
          <p className="mt-3 text-white/50 text-base md:text-lg">Real reviews coming soon.</p>
        </div>
        {/* PLACEHOLDER: Real customer testimonials needed before launch */}
        <div className="grid md:grid-cols-3 gap-[clamp(1rem,2.5vw,1.5rem)] md:gap-[clamp(1.25rem,2vw,1.5rem)]">
          {[
            { quote: "The 2000W station ran our home office for three days during the last outage. Quiet, reliable, and built for Nigerian heat.", stars: 5 },
            { quote: "Delivery to Lagos was quick and the team explained everything clearly. The solar array recharges faster than we expected.", stars: 5 },
            { quote: "We needed something for our clinic that could handle long cycles. This has been running smoothly for months.", stars: 4 },
          ].map((t, i) => (
            <div key={i} className="glass-card p-[clamp(1.5rem,4vw,2.5rem)] md:p-[clamp(2rem,3vw,4rem)] relative">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill={s < t.stars ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className={s < t.stars ? "text-brand" : "text-stone-warm"} aria-hidden="true"><polygon points="12 2 15 8.5 22 9.5 17.5 14.5 18.5 22 12 18.5 5.5 22 6.5 14.5 2 9.5 9 8.5" /></svg>
                ))}
              </div>
              <blockquote className="text-sm md:text-base text-white/80 leading-relaxed italic">“{t.quote}”</blockquote>
              <p className="mt-4 text-[10px] font-mono uppercase tracking-wider text-white/30">Review placeholder — replace with real customer feedback</p>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* Spacer */}
      <div className="h-[clamp(2rem,6vw,4rem)]" aria-hidden="true" />

      {/* Decorative divider between Testimonials and FAQ */}
      <div className="mx-auto max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(2rem,6vw,4rem)]" aria-hidden="true">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/15 to-transparent" />
      </div>

      {/* FAQ — two-column layout */}
      <ScrollReveal delay={70}>
      <section className="mx-auto max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(6rem,14vw,12rem)] md:py-[clamp(8rem,10vw,12rem)]" aria-label="Frequently Asked Questions">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left column: heading, subtext, WhatsApp CTA */}
          <div className="md:sticky md:top-24 md:self-start">
            <h2 className="font-display text-display font-normal tracking-tight text-black leading-[1.05] text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em]">
              Frequently Asked
            </h2>
            <p className="mt-5 text-stone-text text-base md:text-lg leading-relaxed max-w-md">
              Quick answers about portable solar and power stations in Nigeria. Still wondering about something?
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_28px_rgba(3,180,255,0.35)] hover:shadow-[0_12px_32px_rgba(3,180,255,0.5)] hover:-translate-y-[2px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-[transform,shadow] duration-300 ease-premium"
                aria-label="Chat on WhatsApp with Marstek Nigeria"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 bg-white/20 backdrop-blur-sm shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-white">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.89.52 3.66 1.43 5.16L2 22l4.93-1.28A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="currentColor" />
                  </svg>
                </span>
                <span>Still have questions? WhatsApp us</span>
              </a>
              <p className="mt-4 text-xs text-stone-muted font-mono">Placeholder WhatsApp number — replace with real Marstek contact</p>
            </div>
          </div>

          {/* Right column: grouped accordion */}
          <div className="w-full">
            {/* PLACEHOLDER FAQ — confirm answers with Marstek --> */}
            <FAQAccordion />
          </div>
        </div>
      </section>
      </ScrollReveal>

    </div>
  );
}
