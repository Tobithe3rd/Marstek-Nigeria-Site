export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl md:max-w-6xl px-[clamp(1.5rem,5vw,3rem)] md:px-[clamp(2rem,4vw,4rem)] py-[clamp(6rem,14vw,12rem)] md:py-[clamp(8rem,10vw,12rem)]">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-[clamp(3rem,8vw,6rem)] md:gap-[clamp(4rem,6vw,6rem)] items-start">
        <div>
          <h1 className="font-display text-hero font-normal tracking-tight text-black leading-[1.05] text-[clamp(2rem,6vw,5rem)]">
            About <span className="italic text-brand">Marstek</span>
          </h1>
          <div className="mt-6 w-16 h-[3px] bg-gradient-to-r from-brand to-brand-soft " aria-hidden="true" />
        </div>
        <div className="space-y-6 text-stone-text leading-[1.75] text-[1.05rem] md:text-lg">
          <p>
            Marstek Nigeria is committed to delivering reliable, high-quality energy solutions for homes and businesses across the country. We focus on portable power stations and solar panels that are practical for Nigerian conditions - from dense urban neighborhoods to remote rural sites.
          </p>
          <p>
            This site is Phase 1 of our informational presence. We are not processing online orders or collecting payments at this stage. Product data is structured so real specifications, pricing, and imagery can be swapped in seamlessly as we move forward.
          </p>
          <p className="text-stone-muted text-sm md:text-base">
            Our team is based in Lagos with local support and advice tailored to Nigerian environments - the heat, the humidity, and the unpredictable rhythms of infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
