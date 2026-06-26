"use client";

import { Phone } from "lucide-react";
import { company } from "@/data/company";

export function FloatingActions() {
  const waNumber = company.contact.whatsapp.replace(/[^0-9]/g, "");
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`tel:${company.contact.phone.replace(/[^0-9+]/g, "")}`}
        aria-label="Call ARGO"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-white shadow-lg shadow-charcoal/30 transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
          "Hi ARGO, I'd like to know more about your reaper machines."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ARGO on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.744-.872-2.888-1.556-4.038-3.527-.305-.524.305-.487.872-1.624.099-.198.05-.371-.05-.52-.099-.149-.668-1.611-.916-2.21-.247-.595-.498-.515-.668-.524-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.463 1.066 2.876 1.214 3.075.149.198 2.057 3.146 4.984 4.286 2.927 1.139 2.927.76 3.471.71.544-.05 1.758-.718 2.005-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.866.504 3.612 1.382 5.106L2 22l5.034-1.32A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.075-1.117l-.292-.174-3.04.797.81-2.96-.19-.305A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"
          />
        </svg>
      </a>
    </div>
  );
}
