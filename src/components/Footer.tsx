import WhatsAppButton from "@/components/WhatsAppButton";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-bold text-stone-900 mb-2">Marstek Nigeria</h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            Reliable solar energy and portable power solutions for homes, businesses, and communities across Nigeria.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-stone-900 mb-2">Contact</h3>
          <address className="not-italic text-sm text-stone-600 leading-relaxed">
            <p>Lagos, Nigeria</p>
            <p className="mt-1">hello@marsteknigeria.com</p>
            <p className="mt-1">+234 800 000 0000 (placeholder)</p>
          </address>
        </div>
        <div className="md:justify-self-end">
          <WhatsAppButton />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-6">
        <p className="text-xs text-stone-400">
          &copy; {new Date().getFullYear()} Marstek Nigeria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
