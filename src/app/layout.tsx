import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Distri Roluba — Distribuidor de Queso Al Por Mayor | Tarjeta Digital",
  description: "Distribuidor de queso fresco y madurado al por mayor y en pilas. Cotización sin compromiso. WhatsApp directo.",
  keywords: ["distribuidor de queso al por mayor", "queso en pilas Ecuador", "distri roluba", "comprar queso al por mayor", "queso fresco distribuidor"],
  icons: {
    icon: "/images/logo.jpeg",
  },
  openGraph: {
    title: "Distri Roluba — Distribuidor de Queso Al Por Mayor",
    description: "Queso fresco, madurado, gourmet y lácteos al por mayor. Cotización sin compromiso.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4A017" />
      </head>
      <body className="antialiased bg-[#FFF8E7] text-[#333333]">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
