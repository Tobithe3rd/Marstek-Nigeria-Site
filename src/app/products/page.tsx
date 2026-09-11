import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-28">
      <header className="max-w-2xl">
        <h1 className="font-display text-hero font-normal tracking-tight text-black leading-[1.05] text-[clamp(2.25rem,6vw,4.5rem)]">
          Products
        </h1>
        <p className="mt-6 text-stone-text leading-relaxed text-base md:text-lg max-w-xl">
          Portable power stations and solar panels selected for Nigerian conditions — heat, humidity, and the unpredictable rhythms of unpredictable infrastructure.
        </p>
      </header>

      <div className="mt-16 md:mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.id}
            className="group relative glass-card overflow-hidden hover:-translate-y-[4px] hover:shadow-[0_28px_80px_rgba(3,180,255,0.15)] transition-[transform,shadow,opacity] duration-300 ease-premium"
          >
            {/* Image */}
            <a href="#" className="block relative overflow-hidden" aria-label={p.name}>
              <div className="aspect-[4/3] bg-stone-warm relative overflow-hidden">
                <img
                  src={p.placeholderImage}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
                  loading="lazy"
                />
                {/* Brand-tinted glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-premium" aria-hidden="true" />
              </div>
            </a>

            {/* Content — glass card surface */}
            <div className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display text-xl md:text-[1.35rem] font-normal text-black leading-snug tracking-tight group-hover:text-brand transition-colors duration-200">
                  <a href="#" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                    {p.name}
                  </a>
                </h3>
                <span className="inline-flex shrink-0 bg-brand/10 px-2.5 py-0.5 text-[0.65rem] font-mono font-medium uppercase tracking-wide text-brand rounded-sm">
                  {p.category === "power-station" ? "Station" : "Solar"}
                </span>
              </div>

              <p className="text-sm text-stone-text leading-relaxed mb-5">
                {p.description}
              </p>

              {/* Specs grid */}
              <dl className="grid grid-cols-2 gap-x-6 gap-y-3 mb-5">
                {Object.entries(p.specs).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-[0.65rem] font-mono uppercase tracking-[0.08em] text-stone-muted leading-none">
                      {key}
                    </dt>
                    <dd className="text-sm font-medium text-black mt-1 leading-snug font-body">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Wattage highlight — larger, more confident */}
              <div className="flex items-baseline gap-3 pt-5 border-t border-stone-warm/50">
                <span className="text-4xl md:text-[2.5rem] font-display font-normal text-brand leading-none tracking-tight">
                  {p.wattage}W
                </span>
                <span className="text-xs text-stone-muted font-mono uppercase tracking-wider">peak output</span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-stone-muted italic">{p.priceNote}</span>
                <a
                  href="#"
                  className="text-xs font-semibold text-navy-deep hover:text-brand transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label={`Inquire about ${p.name}`}
                >
                  Inquire &rarr;
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
