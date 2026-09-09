import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight">Contact</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-stone-600 leading-relaxed">
          <p>
            We are based in Lagos, Nigeria. For inquiries about products, partnerships, or support, please reach out via WhatsApp or email.
          </p>
          <address className="not-italic text-sm text-stone-500">
            <p><strong>Email:</strong> hello@marsteknigeria.com</p>
            <p><strong>Phone:</strong> +234 800 000 0000 (placeholder)</p>
            <p><strong>Location:</strong> Lagos, Nigeria</p>
          </address>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <h3 className="font-bold text-stone-900 mb-3">Quick WhatsApp Chat</h3>
          <p className="text-sm text-stone-600 mb-4">Send a message directly for a faster response.</p>
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}
