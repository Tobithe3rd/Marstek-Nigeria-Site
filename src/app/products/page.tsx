import { products } from "@/lib/products";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight">Products</h1>
      <p className="mt-3 text-stone-600 max-w-2xl">
        Portable power stations and solar panels for reliable energy in Nigeria.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.id}
            className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-stone-100">
              <img
                src={p.placeholderImage}
                alt={p.name}
                className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold leading-snug">
                <Link href="#" className="hover:text-stone-600">
                  {p.name}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {p.description}
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-stone-500">
                {Object.entries(p.specs).map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-semibold text-stone-700">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-medium text-stone-400">
                  {p.priceNote}
                </span>
                <span className="inline-block rounded-full bg-stone-900 text-white text-xs font-bold px-3 py-1">
                  {p.category === "power-station" ? "Power Station" : "Solar Panel"}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
