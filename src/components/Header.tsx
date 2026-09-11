"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/20 backdrop-blur-[16px] saturate-[120%] border-b border-white/10" style={{ backdropFilter: "blur(16px) saturate(120%)", WebkitBackdropFilter: "blur(16px) saturate(120%)" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="block h-[42px] md:h-[48px] w-auto shrink-0 hover:opacity-90 transition-opacity duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white " aria-label="Marstek Nigeria home">
          <Image
            src="/images/Marstek Logo.png"
            alt="Marstek Nigeria"
            width={140}
            height={56}
            className="h-full w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-[0.8125rem] font-medium tracking-wide text-black/70 uppercase transition-colors duration-300 ease-premium hover:text-black focus-visible:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white group"
            >
              <span className="relative z-10">{link.label}</span>
              {/* Active / hover underline */}
              <span
                className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand origin-left scale-x-0 transition-transform duration-300 ease-premium group-hover:scale-x-100 group-focus-visible:scale-x-100"
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-[5px] p-3 -mr-3 text-black hover:text-brand transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white "
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <span
            className={`block w-5 h-[2px] bg-current transition-transform duration-300 ease-premium ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-[2px] bg-current transition-opacity duration-200 ${mobileOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block w-5 h-[2px] bg-current transition-transform duration-300 ease-premium ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-premium ${mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
        aria-label="Mobile navigation"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8 pb-6 pt-2 flex flex-col gap-1 border-t border-brand/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm font-medium text-black/90 hover:text-brand transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white px-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
