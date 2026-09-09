export default function WhatsAppButton() {
  const phone = "2348000000000"; // placeholder — replace with Marstek Nigeria number
  const message = "Hello, I'm interested in Marstek products.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C6.48 2 2 6.48 2 12c0 1.89.52 3.66 1.43 5.16L2 22l4.93-1.28A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
          fill="currentColor"
        />
      </svg>
      Chat on WhatsApp
    </a>
  );
}
