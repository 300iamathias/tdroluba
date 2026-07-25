"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import { usePwaInstall } from "@/hooks/use-pwa-install";

/**
 * Banner de instalación de la PWA.
 * Se muestra cuando el navegador dispara beforeinstallprompt
 * y la app aún no está instalada.
 */
export function PwaInstaller() {
  const { canInstall, installed, promptInstall } = usePwaInstall();
  const [dismissed, setDismissed] = useState(false);

  // Registrar el Service Worker (PWA instalable + offline)
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .catch((err) => console.warn("SW registration failed", err));
    }
  }, []);

  // Atajos del manifest → acciones rápidas
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const action = params.get("action");
    if (action === "whatsapp") {
      window.location.href = `https://wa.me/593993603118?text=${encodeURIComponent(
        "Hola, me interesa queso al por mayor. ¿Me puede dar cotización?"
      )}`;
    } else if (action === "call") {
      window.location.href = "tel:+593993603118";
    }
  }, []);

  const handleInstall = async () => {
    const outcome = await promptInstall();
    if (outcome === "accepted") setDismissed(true);
  };

  if (installed || dismissed || !canInstall) return null;

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#0D2137] text-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-[#0077B6]/30">
        <div className="w-11 h-11 rounded-xl bg-[#0077B6] flex items-center justify-center shrink-0">
          <Download className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm">Instalar Distri Roluba</p>
          <p className="text-white/70 text-xs">Acceso rápido desde tu pantalla</p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleInstall}
            className="bg-[#0077B6] hover:bg-[#005F8A] text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors"
          >
            Instalar
          </button>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Cerrar"
            className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
