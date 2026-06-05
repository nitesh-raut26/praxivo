import { site } from "@/lib/site";
import { WhatsappIcon } from "@/components/ui/brand-icons";

/** Floating WhatsApp chat button, shown on every page. */
export function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Praxivo! I'd like to talk about a project.",
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Praxivo on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center justify-end"
    >
      <span className="pointer-events-none mr-3 hidden translate-x-2 whitespace-nowrap rounded-full bg-ink/90 px-3.5 py-2 text-sm font-medium text-white opacity-0 shadow-soft backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
      <span className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift ring-4 ring-[#25D366]/15 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
        <WhatsappIcon className="size-7" />
      </span>
    </a>
  );
}
