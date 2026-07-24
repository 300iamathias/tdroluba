"use client"

import Image from "next/image"
import {
  MessageCircle, Truck, Star, Clock,
  Download, ChevronRight, Flame, Globe, Phone, Mail
} from "lucide-react"
import { business } from "@/data/business"

const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

/* ─── CONTACT LINKS ─── */
const contactLinks = [
  {
    icon: Phone,
    label: "Llamar",
    sublabel: business.phone,
    url: `tel:+${business.whatsapp}`,
    color: "#D4A017",
    primary: true,
  },
  {
    icon: Mail,
    label: "Email",
    sublabel: business.email,
    url: `mailto:${business.email}`,
    color: "#8B4513",
    primary: false,
  },
  {
    icon: Globe,
    label: "Sitio Web",
    sublabel: "rolubo.vercel.app",
    url: business.websiteUrl,
    color: "#2D5016",
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

/* ─── PROFILE HERO ─── */
function ProfileHero() {
  return (
    <div className="relative overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B0E] via-[#3D2817] to-[#1A0F08]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/images/quesos-gourmet.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4A017]/10 via-transparent to-[#2D1B0E]" />
      </div>

      {/* Decorative gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4A017] to-transparent" />
      <div className="absolute top-8 left-8 w-20 h-20 border border-[#D4A017]/20 rounded-full" />
      <div className="absolute bottom-12 right-8 w-16 h-16 border border-[#D4A017]/15 rounded-full" />

      {/* Content */}
      <div className="relative px-4 pt-10 pb-8 text-center">
        {/* Person photo */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-5">
          {/* Gold glow ring */}
          <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-[#D4A017] via-[#FFD700] to-[#B8860B] shadow-[0_0_20px_rgba(212,160,23,0.4)]" />
          {/* Inner border */}
          <div className="absolute inset-[-2px] rounded-full bg-[#2D1B0E]" />
          {/* Photo */}
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

        {/* Owner name — HERO */}
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide drop-shadow-lg">
          Johnny Rodríguez Roluba
        </h1>

        {/* Title / Role */}
        <div className="inline-flex items-center gap-1.5 bg-[#D4A017]/25 border border-[#D4A017]/40 rounded-full px-4 py-1.5 mt-3">
          <Flame className="w-3.5 h-3.5 text-[#FFD700]" />
          <span className="text-[#FFD700] text-sm font-semibold">Distribuidor de Queso Al Por Mayor</span>
        </div>

        {/* Company name */}
        <p className="text-white/75 text-sm mt-3 uppercase tracking-[0.2em] font-bold">
          Distri Roluba
        </p>

        {/* Tagline */}
        <p className="text-white/50 text-sm mt-2 max-w-sm mx-auto leading-relaxed">
          Queso fresco, madurado, gourmet y lácteos — directo del productor a tu negocio
        </p>
      </div>
    </div>
  )
}

/* ─── CONTACT ACTION BUTTONS ─── */
function ContactButtons() {
  return (
    <div className="px-4 py-8 space-y-3">
      {contactLinks.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target={link.url.startsWith("http") ? "_blank" : undefined}
          rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
            link.primary
              ? "bg-[#D4A017] text-white hover:bg-[#B8860B] shadow-md"
              : "bg-white text-[#333] hover:bg-[#FFF8E7] border border-[#D4A017]/20 shadow-sm"
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            link.primary ? "bg-white/20" : "bg-[#FFF8E7]"
          }`}>
            <link.icon className="w-6 h-6"
              style={{ color: link.primary ? "white" : link.color }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className={`font-bold text-base ${link.primary ? "text-white" : "text-[#2D1B0E]"}`}>
              {link.label}
            </p>
            <p className={`text-xs truncate ${link.primary ? "text-white/80" : "text-[#666]"}`}>
              {link.sublabel}
            </p>
          </div>
          <ChevronRight className={`w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform ${
            link.primary ? "text-white/70" : "text-[#999]"
          }`} />
        </a>
      ))}
    </div>
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
    color: "#000000",
    bgColor: "bg-black/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="#000000" className="w-6 h-6"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.8a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.18V12a4.83 4.83 0 01-3.77-1.74z"/></svg>
    ),
  },
]

/* ─── SOCIAL SECTION ─── */
function SocialSection() {
  return (
    <div className="px-4 py-4 space-y-3">
      {socialLinks.map((social, i) => (
        <a
          key={i}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#D4A017]/20 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
        >
          <div className={`w-12 h-12 rounded-xl ${social.bgColor} flex items-center justify-center shrink-0`}>
            {social.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-[#2D1B0E] text-base">{social.name}</p>
            <p className="text-[#666] text-xs">@distriroluba</p>
          </div>
          <ChevronRight className="w-5 h-5 shrink-0 text-[#999] group-hover:translate-x-1 transition-transform" />
        </a>
      ))}
    </div>
  )
}

/* ─── SERVICES SECTION ─── */
function ServicesSection() {
  return (
    <div className="px-4 py-6">
      <div className="bg-[#FFF8E7] rounded-2xl p-5 border border-[#D4A017]/20">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5 text-[#D4A017]" />
          <h2 className="font-bold text-lg text-[#2D1B0E]">Servicios</h2>
        </div>
        <div className="space-y-2.5">
          {services.map((service, i) => (
            <div key={i} className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#D4A017]" />
              <span className="text-[#333] text-sm">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── SAVE CONTACT + HOURS ─── */
function ContactSaveSection() {
  return (
    <div id="contacto" className="px-4 py-6 space-y-3">
      {/* Save Contact */}
      <a
        href="/api/vcard"
        download="distri-roluba.vcf"
        className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#D4A017]/20 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
      >
        <div className="w-12 h-12 rounded-xl bg-[#D4A017]/15 flex items-center justify-center shrink-0">
          <Download className="w-6 h-6 text-[#D4A017]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[#2D1B0E] text-base">Guardar Contacto</p>
          <p className="text-[#666] text-xs">Añadir a tu celular — siempre disponible</p>
        </div>
        <ChevronRight className="w-5 h-5 text-[#999] shrink-0" />
      </a>

      {/* Hours */}
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#D4A017]/20 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-[#8B4513]/15 flex items-center justify-center shrink-0">
          <Clock className="w-6 h-6 text-[#8B4513]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[#2D1B0E] text-base">Horarios</p>
          <p className="text-[#666] text-xs">{business.hours}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  return (
    <div className="px-4 py-6">
      <div className="bg-gradient-to-r from-[#25D366] to-[#20BD5A] rounded-2xl p-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white/30 -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/20 translate-x-12 translate-y-12" />
        </div>
        <div className="relative">
          <MessageCircle className="w-10 h-10 mx-auto mb-3" />
          <p className="font-bold text-xl mb-2">¿Listo para comprar?</p>
          <p className="text-white/90 text-sm mb-4">Escríbenos ahora — respuesta en minutos, cotización sin compromiso.</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#25D366] font-bold px-8 py-3 rounded-full transition-all hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Abrir WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

/* ─── SOCIAL + FOOTER ─── */
function SocialFooter() {
  return (
    <div className="px-4 py-8 text-center">
      {/* Social icons */}
      <div className="flex items-center justify-center gap-3 mb-4">
        {business.social.facebook && (
          <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-[#1877F2]/15 flex items-center justify-center hover:bg-[#1877F2]/30 transition-colors">
            <svg viewBox="0 0 24 24" fill="#1877F2" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        )}
        {business.social.instagram && (
          <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-[#E4405F]/15 flex items-center justify-center hover:bg-[#E4405F]/30 transition-colors">
            <svg viewBox="0 0 24 24" fill="#E4405F" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.227-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.618-6.782-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-[#25D366]/15 flex items-center justify-center hover:bg-[#25D366]/30 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
        </a>
      </div>

      <p className="text-[#999] text-xs">
        &copy; {new Date().getFullYear()} Distri Roluba — Distribuidor de Queso Al Por Mayor
      </p>
      <p className="text-[#999] text-xs mt-1">
        Precios según volumen — cotización sin compromiso
      </p>
      {/* Jimbra credit */}
      <div className="mt-4 pt-3 border-t border-[#D4A017]/10">
        <a
          href={business.jimbra.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#D4A017] hover:text-[#8B4513] text-xs font-medium transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          Desarrollado por Jimbra
        </a>
      </div>
    </div>
  )
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FFF0C0]">
      <main className="flex-1 max-w-lg mx-auto w-full">
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

/* ─── FLOATING WHATSAPP ─── */
function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-[#333] text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        ¡Cotiza ahora!
      </span>
    </a>
  )
}
