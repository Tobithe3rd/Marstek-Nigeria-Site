export default function WhatsAppButton() {
  const phone = "2348000000000"; // placeholder - replace with real Marstek number
  const message = "Hello, I'm interested in Marstek products.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-navy-deep px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_28px_rgba(6,15,28,0.35)] hover:shadow-[0_12px_32px_rgba(6,15,28,0.5)] hover:-translate-y-[2px] active:translate-y-0 active:shadow-[0_4px_12px_rgba(6,15,28,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-[transform,shadow] duration-300 ease-premium"
      aria-label="Chat on WhatsApp with Marstek Nigeria"
    >
      <span className="inline-flex items-center justify-center w-7 h-7 bg-white/20 backdrop-blur-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-white">
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 1.89.52 3.66 1.43 5.16L2 22l4.93-1.28A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span>Chat on WhatsApp</span>
    </a>
  );
}
