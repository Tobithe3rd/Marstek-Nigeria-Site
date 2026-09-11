import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-navy-deep text-white"
        aria-label="Hero"
      >
        {/* Subtle geometric solar pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(3,180,255,0.6) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient glow */}
        <div
          className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] bg-brand/20 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-brand/10 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 md:px-8 pt-28 pb-28 md:pt-40 md:pb-36">
          <div className="max-w-3xl">
            <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-brand-soft mb-6">
              Solar Energy / Portable Power / Nigeria
            </p>
            <h1 className="font-display text-hero font-normal leading-[1.05] tracking-tight text-white">
              Reliable energy, <span className="italic text-brand-soft">anywhere</span> in Nigeria.
            </h1>
            <p className="mt-7 text-base md:text-[1.125rem] text-white/70 leading-relaxed max-w-xl">
              Portable power stations and solar panels designed for Nigerian homes and businesses. No grid, no problem.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center bg-brand text-navy-deep px-7 py-3.5 text-sm font-bold tracking-tight hover:bg-brand-soft hover:-translate-y-[2px] shadow-[0_8px_24px_rgba(3,180,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep active:translate-y-0 active:shadow-[0_4px_12px_rgba(3,180,255,0.3)] transition-[transform,shadow,background-color] duration-300 ease-premium"
              >
                View Products
              </Link>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      {/* Feature intro - editorial 2-col, not identical cards */}
      <section className="mx-auto max-w-6xl px-6 md:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <h2 className="font-display text-display font-normal tracking-tight text-black leading-[1.15]">
              Built for Nigerian <span className="italic text-brand">conditions.</span>
            </h2>
            <p className="mt-6 text-stone-text leading-relaxed text-[1.05rem]">
              From dense urban neighborhoods to remote rural sites, our portable power stations and solar panels are selected for heat, humidity, and the unpredictable rhythms of Nigerian infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-mono text-stone-muted">
              <div>
                <span className="block text-2xl font-display text-black font-normal">500W</span>
                <span>Small backup</span>
              </div>
              <div>
                <span className="block text-2xl font-display text-black font-normal">1000W</span>
                <span>Home office</span>
              </div>
              <div>
                <span className="block text-2xl font-display text-black font-normal">2000W</span>
                <span>Full home</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden shadow-[0_20px_60px_rgba(10,22,40,0.15)] aspect-[4/5]">
              <Image
                src="/images/hero-placeholder.jpg"
                alt="Solar panel installation in Nigeria"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute bottom-5 left-5 bg-navy-deep/80 backdrop-blur-md px-4 py-2.5 ">
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/50">Phase 1</p>
                <p className="text-xs font-semibold text-white">Placeholder imagery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer - clean, varied layout, no identical cards */}
      <section className="bg-stone-warm" aria-label="What we offer">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-20 md:py-28">
          <h2 className="font-display text-display font-normal tracking-tight text-black mb-16 md:mb-20">
            Three ways to stay <span className="italic text-brand">powered.</span>
          </h2>

          <div className="grid md:grid-cols-[1fr_1.2fr_1fr] gap-10 md:gap-8">
            {/* Card 1 - wider content */}
            <article className="bg-white p-8 md:p-10 shadow-[0_4px_20px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.1)] transition-shadow duration-300 ease-premium">
              <div className="w-10 h-10 bg-brand/10 flex items-center justify-center mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M12 9v6" />
                  <path d="M9 12h6" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-normal text-black tracking-tight leading-snug">Portable Power Stations</h3>
              <p className="mt-3 text-sm text-stone-text leading-relaxed">
                500W, 1000W, and 2000W units for backup, travel, and work. Built for heat, humidity, and long discharge cycles.
              </p>
            </article>

            {/* Card 2 - full-width middle on desktop with image */}
            <article className="md:col-span-1 bg-navy-deep overflow-hidden shadow-[0_8px_30px_rgba(10,22,40,0.15)] hover:shadow-[0_16px_50px_rgba(10,22,40,0.2)] transition-shadow duration-300 ease-premium relative">
              <Image
                src="/images/placeholder-600w-solar.png"
                alt="Solar panel array"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl font-normal text-white tracking-tight leading-snug">Solar Panels</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  Foldable monocrystalline arrays for charging and direct solar applications. Fast recharge, minimal footprint.
                </p>
              </div>
            </article>

            {/* Card 3 - compact */}
            <article className="bg-white p-8 md:p-10 shadow-[0_4px_20px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.1)] transition-shadow duration-300 ease-premium">
              <div className="w-10 h-10 bg-brand/10 flex items-center justify-center mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-normal text-black tracking-tight leading-snug">Local Support</h3>
              <p className="mt-3 text-sm text-stone-text leading-relaxed">
                Based in Lagos. Service, advice, and delivery tailored to Nigerian conditions - heat, humidity, and the unexpected.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
