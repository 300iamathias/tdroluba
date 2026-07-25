"use client"

import Image from "next/image"
import {
  MessageCircle, Truck, Star, Clock,
  Download, ChevronRight, Droplet, Globe, Phone, Mail, Smartphone, Check
} from "lucide-react"
import { business } from "@/data/business"
import { usePwaInstall } from "@/hooks/use-pwa-install"

const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

/* ─── CONTACT LINKS (v7 — paleta fresca) ─── */
const contactLinks = [
  {
    icon: Phone,
    label: "Llamar",
    sublabel: business.phone,
    url: `tel:+${business.whatsapp}`,
    primary: true,
  },
  {
    icon: Mail,
    label: "Email",
    sublabel: business.email,
    url: `mailto:${business.email}`,
    primary: false,
  },
  {
    icon: Globe,
    label: "Sitio Web",
    sublabel: "rolubo.vercel.app",
    url: business.websiteUrl,
    primary: false,
  },
]

/* ─── SERVICES ─── */
const services = [
  "Venta al por mayor y en pilas",
  "Distribución y entrega a domicilio",
  "Queso fresco, madurado, gourmet y lácteos",
  "Cotización sin compromiso",
  "Precios escalonados por volumen",
]

/* ─── PROFILE HERO (v7 — azul cielo vibrante + nubes + gotas de leche) ─── */
function ProfileHero() {
  return (
    <header className="relative overflow-hidden">
      {/* Fondo azul cielo vibrante gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#89CFF0] via-[#6BC5E8] to-[#4AADD4]" />
        {/* Textura linen / cloud muy tenue */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.28) 0%, transparent 38%), radial-gradient(circle at 82% 68%, rgba(255,255,255,0.22) 0%, transparent 42%), radial-gradient(circle at 50% 90%, rgba(255,255,255,0.18) 0%, transparent 45%)",
          }}
        />
      </div>

      {/* Línea accent azul cerúleo top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#0077B6] to-transparent" />

      {/* Círculos de nube / bubble decorativos */}
      <div className="absolute top-10 left-6 w-24 h-24 border border-white/20 rounded-full" />
      <div className="absolute top-20 left-16 w-10 h-10 border border-white/15 rounded-full" />
      <div className="absolute bottom-16 right-6 w-20 h-20 border border-white/20 rounded-full" />
      <div className="absolute bottom-24 right-20 w-7 h-7 border border-white/15 rounded-full" />

      {/* Gotas de leche decorativas */}
      <div className="absolute top-16 right-10 w-3 h-5 rounded-b-full bg-white/35" />
      <div className="absolute top-28 left-8 w-2.5 h-4 rounded-b-full bg-white/30" />
      <div className="absolute bottom-10 left-24 w-3 h-5 rounded-b-full bg-white/25" />
      <div className="absolute bottom-20 right-14 w-2 h-3.5 rounded-b-full bg-white/30" />

      {/* Contenido */}
      <div className="relative px-4 pt-11 pb-9 text-center">
        {/* Foto de perfil */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-5">
          {/* Glow ring azul */}
          <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-[#0077B6] via-[#4FC3F7] to-[#89CFF0] shadow-[0_0_24px_rgba(0,119,182,0.45)]" />
          {/* Borde interno */}
          <div className="absolute inset-[-2px] rounded-full bg-[#89CFF0]" />
          {/* Foto */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden">
            <Image
              src="/images/client-headshot.jpg"
              alt="Johnny Rodríguez Roluba"
              fill
              className="object-cover object-center"
              sizes="128px"
              priority
            />
          </div>
        </div>

        {/* Nombre del dueño — HERO */}
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide drop-shadow-lg">
          Johnny Rodríguez Roluba
        </h1>

        {/* Rol / Title (badge fresco con backdrop) */}
        <div className="inline-flex items-center gap-1.5 bg-white/30 border border-white/50 backdrop-blur-sm rounded-full px-4 py-1.5 mt-3">
          <Droplet className="w-3.5 h-3.5 text-white" />
          <span className="text-white text-sm font-semibold drop-shadow">
            {business.tagline}
          </span>
        </div>

        {/* Nombre de la empresa */}
        <p className="text-white/80 text-sm mt-3 uppercase tracking-[0.2em] font-bold drop-shadow">
          {business.name}
        </p>

        {/* Tagline */}
        <p className="text-white/70 text-sm mt-2 max-w-sm mx-auto leading-relaxed">
          Queso fresco, madurado, gourmet y lácteos — directo del productor a tu negocio
        </p>
      </div>
    </header>
  )
}

/* ─── CONTACT ACTION BUTTONS (v7 — azul cerúleo) ─── */
function ContactButtons() {
  return (
    <section className="px-4 py-8 space-y-3" aria-label="Contacto principal">
      {contactLinks.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target={link.url.startsWith("http") ? "_blank" : undefined}
          rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
            link.primary
              ? "bg-[#0077B6] text-white hover:bg-[#005F8A] shadow-md"
              : "bg-white text-[#0D2137] hover:bg-[#E3F2FD] border border-[#0077B6]/20 shadow-sm"
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            link.primary ? "bg-white/20" : "bg-[#E3F2FD]"
          }`}>
            <link.icon className="w-6 h-6" style={{ color: link.primary ? "white" : "#0077B6" }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className={`font-bold text-base ${link.primary ? "text-white" : "text-[#0D2137]"}`}>
              {link.label}
            </p>
            <p className={`text-xs truncate ${link.primary ? "text-white/80" : "text-[#4A6FA5]"}`}>
              {link.sublabel}
            </p>
          </div>
          <ChevronRight className={`w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform ${
            link.primary ? "text-white/70" : "text-[#4A6FA5]/60"
          }`} />
        </a>
      ))}
    </section>
  )
}

/* ─── SOCIAL LINKS ─── */
const socialLinks = [
  {
    name: "Instagram",
    url: business.social.instagram,
    color: "#E4405F",
    bgColor: "bg-[#E4405F]/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="#E4405F" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.227-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.618-6.782-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    ),
  },
  {
    name: "Facebook",
    url: business.social.facebook,
    color: "#1877F2",
    bgColor: "bg-[#1877F2]/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="#1877F2" className="w-6 h-6"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    ),
  },
  {
    name: "TikTok",
    url: business.social.tiktok,
    color: "#0D2137",
    bgColor: "bg-[#0D2137]/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="#0D2137" className="w-6 h-6"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.8a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.18V12a4.83 4.83 0 01-3.77-1.74z"/></svg>
    ),
  },
]

/* ─── SOCIAL SECTION ─── */
function SocialSection() {
  return (
    <section className="px-4 py-4 space-y-3" aria-label="Redes sociales">
      {socialLinks.map((social, i) => (
        <a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#0077B6]/15 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
        >
          <div className={`w-12 h-12 rounded-xl ${social.bgColor} flex items-center justify-center shrink-0`}>
            {social.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-[#0D2137] text-base">{social.name}</p>
            <p className="text-[#4A6FA5] text-xs">@distriroluba</p>
          </div>
          <ChevronRight className="w-5 h-5 shrink-0 text-[#4A6FA5]/60 group-hover:translate-x-1 transition-transform" />
        </a>
      ))}
    </section>
  )
}

/* ─── SERVICES SECTION (v7 — azul muy suave) ─── */
function ServicesSection() {
  return (
    <section className="px-4 py-6" aria-label="Servicios">
      <div className="bg-[#E8F4FD] rounded-2xl p-5 border border-[#0077B6]/15 relative overflow-hidden">
        {/* Gota de leche sutil de frescura */}
        <div className="absolute top-3 right-4 w-2.5 h-4 rounded-b-full bg-white/60" />
        <div className="absolute bottom-4 right-10 w-2 h-3 rounded-b-full bg-white/50" />
        <div className="flex items-center gap-2 mb-3 relative">
          <Star className="w-5 h-5 text-[#0077B6]" />
          <h2 className="font-bold text-lg text-[#0D2137]">Servicios</h2>
        </div>
        <div className="space-y-2.5 relative">
          {services.map((service, i) => (
            <div key={i} className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#0077B6] shrink-0" />
              <span className="text-[#0D2137] text-sm">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SAVE CONTACT + HOURS ─── */
function ContactSaveSection() {
  return (
    <section id="contacto" className="px-4 py-6 space-y-3" aria-label="Guardar contacto y horarios">
      {/* Guardar Contacto */}
      <a
        href="/api/vcard"
        download="distri-roluba.vcf"
        className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#0077B6]/15 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
      >
        <div className="w-12 h-12 rounded-xl bg-[#0077B6]/10 flex items-center justify-center shrink-0">
          <Download className="w-6 h-6 text-[#0077B6]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[#0D2137] text-base">Guardar Contacto</p>
          <p className="text-[#4A6FA5] text-xs">Añadir a tu celular — siempre disponible</p>
        </div>
        <ChevronRight className="w-5 h-5 text-[#4A6FA5]/60 shrink-0 group-hover:translate-x-1 transition-transform" />
      </a>

      {/* Horarios */}
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#0077B6]/15 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/15 flex items-center justify-center shrink-0">
          <Clock className="w-6 h-6 text-[#4CAF50]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[#0D2137] text-base">Horarios</p>
          <p className="text-[#4A6FA5] text-xs">{business.hours}</p>
        </div>
      </div>

      {/* Instalar App (PWA) */}
      <InstallAppRow />
    </section>
  )
}

/* ─── INSTALL APP ROW (PWA) ─── */
function InstallAppRow() {
  const { canInstall, installed, promptInstall } = usePwaInstall();

  // Ya instalada → mensaje confirmatorio
  if (installed) {
    return (
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#E8F4FD] border border-[#0077B6]/20">
        <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/15 flex items-center justify-center shrink-0">
          <Check className="w-6 h-6 text-[#4CAF50]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[#0D2137] text-base">App instalada</p>
          <p className="text-[#4A6FA5] text-xs">Ya la tienes en tu pantalla de inicio</p>
        </div>
      </div>
    );
  }

  // Instalable → botón de acción
  if (canInstall) {
    return (
      <button
        type="button"
        onClick={promptInstall}
        className="group w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#0077B6] to-[#4FC3F7] text-white shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
      >
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
          <Smartphone className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0 text-left">
          <p className="font-bold text-white text-base">Instalar App</p>
          <p className="text-white/80 text-xs">Acceso rápido desde tu pantalla de inicio</p>
        </div>
        <Download className="w-5 h-5 shrink-0 text-white/90 group-hover:translate-y-0.5 transition-transform" />
      </button>
    );
  }

  // No instalable todavía (usar menú del navegador → Instalar app)
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#0077B6]/15 shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-[#0077B6]/10 flex items-center justify-center shrink-0">
        <Smartphone className="w-6 h-6 text-[#0077B6]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-[#0D2137] text-base">Instalar App</p>
        <p className="text-[#4A6FA5] text-xs">
          Menú del navegador <span className="font-semibold">⋮</span> → “Instalar app”
        </p>
      </div>
    </div>
  );
}

/* ─── FINAL CTA (v7 — verde lima vibrante + gotas de leche) ─── */
function FinalCTA() {
  return (
    <section className="px-4 py-6" aria-label="Cotización por WhatsApp">
      <div className="bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] rounded-2xl p-6 text-white text-center relative overflow-hidden">
        {/* Bubbles decorativos + gotas de leche */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white/40 -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/30 translate-x-12 translate-y-12" />
        </div>
        <div className="absolute top-4 right-8 w-3 h-5 rounded-b-full bg-white/50" />
        <div className="absolute bottom-6 left-10 w-2.5 h-4 rounded-b-full bg-white/40" />
        <div className="relative">
          <MessageCircle className="w-10 h-10 mx-auto mb-3 drop-shadow" />
          <p className="font-bold text-xl mb-2 drop-shadow">¿Listo para comprar?</p>
          <p className="text-white/95 text-sm mb-4 drop-shadow">
            Escríbenos ahora — respuesta en minutos, cotización sin compromiso.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#4CAF50] font-bold px-8 py-3 rounded-full transition-all hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Abrir WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── SOCIAL + FOOTER ─── */
function SocialFooter() {
  return (
    <footer className="px-4 py-8 text-center mt-auto">
      {/* Iconos sociales */}
      <div className="flex items-center justify-center gap-3 mb-4">
        {business.social.facebook && (
          <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full bg-[#1877F2]/12 flex items-center justify-center hover:bg-[#1877F2]/25 transition-colors">
            <svg viewBox="0 0 24 24" fill="#1877F2" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        )}
        {business.social.instagram && (
          <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-[#E4405F]/12 flex items-center justify-center hover:bg-[#E4405F]/25 transition-colors">
            <svg viewBox="0 0 24 24" fill="#E4405F" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.227-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.618-6.782-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        )}
        {business.social.tiktok && (
          <a href={business.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-11 h-11 rounded-full bg-[#0D2137]/10 flex items-center justify-center hover:bg-[#0D2137]/20 transition-colors">
            <svg viewBox="0 0 24 24" fill="#0D2137" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.8a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.18V12a4.83 4.83 0 01-3.77-1.74z"/></svg>
          </a>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-11 h-11 rounded-full bg-[#4CAF50]/15 flex items-center justify-center hover:bg-[#4CAF50]/30 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-[#4CAF50]" />
        </a>
      </div>

      <p className="text-[#4A6FA5] text-xs">
        &copy; {new Date().getFullYear()} Distri Roluba — {business.tagline}
      </p>
      <p className="text-[#4A6FA5] text-xs mt-1">
        Precios según volumen — cotización sin compromiso
      </p>
      {/* Crédito Jimbra */}
      <div className="mt-4 pt-3 border-t border-[#0077B6]/10">
        <a
          href={business.jimbra.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#0077B6] hover:text-[#005F8A] text-xs font-medium transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          Desarrollado por Jimbra
        </a>
      </div>
    </footer>
  )
}

/* ─── FLOATING WHATSAPP (v7 — verde lima vibrante) ─── */
function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#4CAF50] hover:bg-[#388E3C] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-[#0D2137] text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        ¡Cotiza ahora!
      </span>
    </a>
  )
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFFDF7] to-[#F0F7FF]">
      <main className="flex-1 max-w-lg mx-auto w-full flex flex-col">
        <ProfileHero />
        <ContactButtons />
        <SocialSection />
        <ServicesSection />
        <ContactSaveSection />
        <FinalCTA />
        <SocialFooter />
      </main>

      {/* Floating WhatsApp */}
      <WhatsAppFloat />
    </div>
  )
}
