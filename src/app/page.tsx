/* DESIGN READ: premium tech landing for Nigerian solar energy, Apple Liquid Glass + sharp-corner exception (radius-glass: 4px), brand blue #03B4FF, editorial serif + geometric sans pairing, dark/light rhythm. */
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <div>
      {/* Hero — dark navy-deep with enhanced brand glow */}
      <section
        className="relative overflow-hidden bg-navy-deep text-white"
        aria-label="Hero"
      >
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
              Portable solar power for homes, businesses, and communities — built for Nigerian heat and humidity.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center bg-brand text-navy-deep px-10 py-5 text-base font-bold tracking-tight shadow-[0_8px_28px_rgba(3,180,255,0.35)] hover:shadow-[0_12px_40px_rgba(3,180,255,0.45)] hover:-translate-y-[2px] active:translate-y-0 active:shadow-[0_4px_14px_rgba(3,180,255,0.3)] transition-[transform,shadow,background-color] duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for breathing room between sections */}
      <div className="h-[clamp(2rem,6vw,4rem)]" aria-hidden="true" />

      {/* Feature intro — editorial card, light glass background */}
      <section className="mx-auto max-w-5xl md:max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(6rem,14vw,12rem)] md:py-[clamp(8rem,10vw,12rem)]">
        <div className="glass-card p-10 md:p-16 md:rounded-2xl">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-center">
            <div>
              <h2 className="font-display text-display font-normal tracking-tight text-black leading-[1.1] text-[clamp(2rem,5vw,3.5rem)] tracking-[-0.02em] animate-fade-up">
                Built for Nigerian <span className="italic text-brand">conditions.</span>
              </h2>
              <p className="mt-6 text-stone-text leading-[1.7] text-[1.05rem] md:text-lg">
                From dense urban neighborhoods to remote rural sites, our portable power stations and solar panels are selected for the realities Nigerian users face every day — intense heat, high humidity, and an infrastructure that demands self-reliance.
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
                  <p className="text-[10px] font-mono uppercase tracking-wider text-white/50">Phase 1 — Placeholders</p>
                  <p className="text-xs font-semibold text-white">Placeholder imagery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for breathing room between sections */}
      <div className="h-[clamp(2rem,6vw,4rem)]" aria-hidden="true" />

      {/* What we offer — dark glass cards with subtle radius */}
      <section className="bg-dark-section" aria-label="What we offer">
        <div className="mx-auto max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(6rem,14vw,12rem)] md:py-[clamp(8rem,10vw,12rem)]">
          <h2 className="font-display text-display font-normal tracking-tight text-white mb-16 md:mb-24 leading-[1.05] text-[clamp(2rem,5vw,3.5rem)]">
            Three ways to stay <span className="italic text-brand-soft">powered.</span>
          </h2>

          <div className="grid md:grid-cols-[1fr_1.2fr_1fr] gap-[clamp(1rem,2.5vw,1.5rem)] md:gap-[clamp(1.25rem,2vw,1.5rem)] stagger">
            {/* Card 1 — glass surface with subtle radius */}
            <article className="glass-card p-6 md:p-8 hover:-translate-y-[6px] hover:shadow-[0_28px_80px_rgba(3,180,255,0.12)] transition-[transform,shadow] duration-300 ease-premium animate-fade-up">
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
              <div className="relative z-10 p-6 md:p-8">
                <h3 className="font-display text-xl md:text-[1.4rem] font-normal text-white tracking-tight leading-snug">Solar Panels</h3>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  Foldable monocrystalline arrays for charging and direct solar applications. Fast recharge, minimal footprint.
                </p>
              </div>
            </article>

            {/* Card 3 — glass surface */}
            <article className="glass-card p-6 md:p-8 hover:-translate-y-[6px] hover:shadow-[0_28px_80px_rgba(3,180,255,0.12)] transition-[transform,shadow] duration-300 ease-premium animate-fade-up">
              <div className="w-10 h-10 bg-brand/15 flex items-center justify-center mb-6 rounded-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="font-display text-xl md:text-[1.4rem] font-normal text-white tracking-tight leading-snug">Local Support</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Based in Lagos. Service, advice, and delivery tailored to Nigerian conditions — heat, humidity, and the unexpected.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp badge — bottom right */}
      <a
        href="https://wa.me/2348000000000?text=Hello%2C%20I'm%20interested%20in%20Marstek%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-8 right-8 z-50 inline-flex items-center gap-3 bg-brand text-navy-deep px-6 py-5 rounded-full text-lg font-bold shadow-[0_12px_36px_rgba(3,180,255,0.4)] hover:shadow-[0_16px_48px_rgba(3,180,255,0.6)] hover:-translate-y-[4px] active:translate-y-0 transition-[transform,shadow] duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4"
        aria-label="Chat on WhatsApp with Marstek Nigeria"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/25 rounded-full shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-navy-deep">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.89.52 3.66 1.43 5.16L2 22l4.93-1.28A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="currentColor" />
          </svg>
        </span>
        <span className="hidden max-w-0 overflow-hidden whitespace-nowrap group-hover:inline-block group-hover:max-w-[120px] group-hover:ml-2 transition-all duration-300 ease-premium text-base">WhatsApp</span>
      </a>
    </div>
  );
}
