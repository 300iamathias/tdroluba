"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

/* --- Detección de modo standalone (PWA ya instalada) vía useSyncExternalStore ---
 * Evita setState-in-effect y hydration mismatch (SSR-safe). */
function subscribeStandalone(callback: () => void) {
  const mq = window.matchMedia("(display-mode: standalone)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
function getStandalone(): boolean {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}
function getStandaloneServer(): boolean {
  return false;
}

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

/**
 * Hook para manejar la instalación de la PWA.
 * Expone: canInstall (bool), installed (bool), promptInstall (fn).
 */
export function usePwaInstall() {
  const isStandalone = useSyncExternalStore(
    subscribeStandalone,
    getStandalone,
    getStandaloneServer
  );
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const onBIP = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onBIP);
    return () => window.removeEventListener("beforeinstallprompt", onBIP);
  }, []);

  const promptInstall = useCallback(async () => {
    if (!deferred) return null;
    await deferred.prompt();
    const { outcome } = await deferred.userChoice;
    setDeferred(null);
    return outcome;
  }, [deferred]);

  return {
    canInstall: !!deferred,
    installed: isStandalone,
    promptInstall,
  };
}
