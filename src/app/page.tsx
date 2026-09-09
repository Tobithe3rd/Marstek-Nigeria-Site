import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <div>
      <section className="relative bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/hero-placeholder.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-44">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Power for Nigeria.<br />
            <span className="text-stone-300">Anywhere you go.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-stone-200 max-w-xl leading-relaxed">
            Portable power stations and solar panels built for homes, businesses, and off-grid life across Nigeria.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center rounded-full bg-white text-stone-900 px-6 py-3 text-sm font-bold hover:bg-stone-100 transition-colors"
            >
              View Products
            </Link>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight">What we offer</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg">Portable Power Stations</h3>
            <p className="mt-2 text-stone-600 text-sm leading-relaxed">
              500W, 1000W, and 2000W units for backup, travel, and work.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg">Solar Panels</h3>
            <p className="mt-2 text-stone-600 text-sm leading-relaxed">
              Foldable monocrystalline panels for charging and direct solar use.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg">Local Support</h3>
            <p className="mt-2 text-stone-600 text-sm leading-relaxed">
              Based in Lagos with service and advice tailored to Nigerian conditions.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
