import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Footer() {
  return (
    <footer className="relative bg-navy-deep text-white overflow-hidden">
      {/* Subtle brand glow at top edge */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="py-16 md:py-24 grid md:grid-cols-[1fr_1fr_1fr] gap-12 md:gap-8 items-start">
          {/* Brand */}
          <div>
            <a href="/" className="block h-[36px] md:h-[42px] w-auto shrink-0 hover:opacity-90 transition-opacity duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep ">
              <Image
                src="/images/Marstek Logo.png"
                alt="Marstek Nigeria"
                width={120}
                height={48}
                className="h-full w-auto object-contain"
              />
            </a>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              Reliable solar energy and portable power solutions for homes, businesses, and communities across Nigeria.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-5 tracking-tight">Contact</h3>
            <address className="not-italic text-sm text-white/55 leading-relaxed space-y-2">
              <p>Lagos, Nigeria</p>
              <p>
                <a href="mailto:hello@marsteknigeria.com" className="hover:text-brand transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep ">
                  hello@marsteknigeria.com
                </a>
              </p>
              <p className="text-white/30 select-none">+234 800 000 0000 (placeholder)</p>
            </address>
          </div>

          {/* WhatsApp */}
          <div className="md:text-right md:self-end">
            <h3 className="font-display text-lg font-bold text-white mb-5 tracking-tight">Quick Chat</h3>
            <p className="text-sm text-white/55 mb-5 leading-relaxed md:text-right">
              Get answers in minutes through WhatsApp.
            </p>
            <WhatsAppButton />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/30 tracking-wide">
            &copy; {new Date().getFullYear()} Marstek Nigeria. All rights reserved.
          </p>
          <p className="text-[10px] text-white/20 tracking-wider uppercase">
            Phase 1 - Informational
          </p>
        </div>
      </div>
    </footer>
  );
}
