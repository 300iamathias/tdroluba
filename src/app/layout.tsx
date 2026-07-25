import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { PwaInstaller } from "@/components/pwa-installer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Distri Roluba — Distribuidor de Queso Al Por Mayor | Tarjeta Digital",
  description: "Distribuidor de queso fresco y madurado al por mayor y en pilas. Cotización sin compromiso. WhatsApp directo.",
  keywords: ["distribuidor de queso al por mayor", "queso en pilas Ecuador", "distri roluba", "comprar queso al por mayor", "queso fresco distribuidor"],
  authors: [{ name: "Distri Roluba" }],
  applicationName: "Distri Roluba",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Distri Roluba",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icons/favicon-32.png"],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  openGraph: {
    title: "Distri Roluba — Distribuidor de Queso Al Por Mayor",
    description: "Queso fresco, madurado, gourmet y lácteos al por mayor. Cotización sin compromiso.",
    type: "website",
    locale: "es_EC",
    siteName: "Distri Roluba",
  },
};

export const viewport: Viewport = {
  themeColor: "#0077B6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Distri Roluba" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFFDF7] text-[#0D2137]`}
      >
        {children}
        <PwaInstaller />
        <Toaster />
      </body>
    </html>
  );
}
