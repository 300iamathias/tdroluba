"use client"

import { useState } from "react"
import Image from "next/image"
import {
  MessageCircle, MapPin, Package, FileText,
  Truck, Leaf, Award, Star, Users, Clock,
  Download, ChevronRight, Sparkles, ShieldCheck,
  Flame, BadgeCheck, ArrowDown, Globe, User
} from "lucide-react"
import { business } from "@/data/business"
import { products } from "@/data/products"

const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

/* ─── MAIN LINKS ─── */
const mainLinks = [
  {
    icon: MessageCircle,
    label: "Pedir por WhatsApp",
    sublabel: "Respuesta inmediata — cotización sin compromiso",
    url: whatsappUrl,
    color: "#25D366",
    primary: true,
  },
  {
    icon: Globe,
    label: "Visitar Sitio Web",
    sublabel: "rolubo.vercel.app — catálogo completo y más",
    url: business.websiteUrl,
    color: "#D4A017",
    primary: false,
  },
  {
    icon: FileText,
    label: "Solicitar Cotización",
    sublabel: "Formulario detallado para tu negocio",
    url: "#contacto",
    color: "#8B4513",
    primary: false,
  },
  {
    icon: MapPin,
    label: "Nuestra Ubicación",
    sublabel: "Ver en Google Maps",
    url: "https://maps.google.com/?q=Ecuador",
    color: "#2D5016",
    primary: false,
  },
  {
    icon: Package,
    label: "Ver Catálogo Completo",
    sublabel: "10+ variedades de queso y lácteos",
    url: "#productos",
    color: "#8B4513",
    primary: false,
  },
]

/* ─── FEATURED PRODUCTS ─── */
const featuredProducts = products.slice(0, 6)

/* ─── TRUST REASONS ─── */
const trustReasons = [
  { icon: ShieldCheck, title: "Frescura Garantizada", text: "Cadena de frío profesional — queso fresco siempre" },
  { icon: Award, title: "Precios por Volumen", text: "Los mejores precios al por mayor en Ecuador" },
  { icon: Truck, title: "Entrega Directa", text: "Distribución a tu negocio — no pagas transporte extra" },
  { icon: BadgeCheck, title: "Variedad Completa", text: "10+ tipos de queso, leche, crema — todo en un solo pedido" },
]

/* ─── SERVICES ─── */
const services = [
  "Venta al por mayor",
  "Venta en pilas (bulk/stacks)",
  "Distribución y entrega a domicilio",
  "Variedades: fresco, madurado, gourmet, lácteos",
  "Cotización sin compromiso",
  "Precios escalonados por volumen",
]

/* ─── PROFILE HEADER ─── */
function ProfileHeader() {
  return (
    <div className="relative">
      {/* Cover background */}
      <div className="absolute inset-0 h-56 md:h-64 overflow-hidden rounded-b-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017] via-[#B8860B] to-[#8B4513]" />
        <div className="absolute inset-0 bg-[url('/images/quesos-gourmet.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2D1B0E]/80" />
      </div>

      {/* Content */}
      <div className="relative pt-8 pb-6 px-4 text-center">
        {/* Avatar */}
        <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full bg-[#D4A017] animate-pulse opacity-30 scale-110" />
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-[#D4A017] shadow-xl bg-white">
            <Image
              src="/images/logo.png"
              alt="Distri Roluba"
              fill
              className="object-contain p-1"
              sizes="112px"
              priority
            />
          </div>
        </div>

        {/* Owner name */}
        <div className="flex items-center justify-center gap-2 mb-1">
          <User className="w-4 h-4 text-white/70" />
          <p className="text-white/80 text-sm font-medium">Johnny Rodríguez Roluba</p>
        </div>
        {/* Business name */}
        <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
          Distri Roluba
        </h1>
        <div className="inline-flex items-center gap-1 bg-[#D4A017]/40 border border-white/30 rounded-full px-3 py-1 mt-2">
          <Flame className="w-3.5 h-3.5 text-white" />
          <span className="text-white text-sm font-medium">Distribuidor de Queso | Al Por Mayor y En Pilas</span>
        </div>
        <p className="text-white/80 text-sm mt-2 max-w-sm mx-auto">
          Queso fresco, madurado, gourmet y lácteos — directo del productor a tu negocio
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
            <p className="text-white text-xs font-medium">Productos</p>
            <p className="text-[#D4A017] font-bold text-lg">10+</p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
            <p className="text-white text-xs font-medium">Clientes</p>
            <p className="text-[#D4A017] font-bold text-lg">100+</p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
            <p className="text-white text-xs font-medium">Cobertura</p>
            <p className="text-[#D4A017] font-bold text-lg">EC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── MAIN ACTION BUTTONS ─── */
function MainLinks() {
  return (
    <div className="px-4 py-6 space-y-3">
      {mainLinks.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target={link.url.startsWith("http") ? "_blank" : undefined}
          rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
            link.primary
              ? "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-md"
              : "bg-white text-[#333] hover:bg-[#FFF8E7] border border-[#D4A017]/20 shadow-sm"
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            link.primary ? "bg-white/20" : "bg-[#FFF8E7]"
          }`}>
            <link.icon className={`w-6 h-6 ${link.primary ? "text-white" : `text-[${link.color}]`}`}
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

/* ─── URGENCY BANNER ─── */
function UrgencyBanner() {
  return (
    <div className="px-4 pb-4">
      <div className="bg-gradient-to-r from-[#8B4513] to-[#D4A017] rounded-2xl p-5 text-white relative overflow-hidden">
        <div className="absolute top-2 right-2">
          <Flame className="w-8 h-8 text-white/20" />
        </div>
        <div className="flex items-center gap-3 mb-2">
          <Flame className="w-5 h-5 text-[#FFD700]" />
          <p className="font-bold text-lg">Oferta Especial</p>
        </div>
        <p className="text-white/90 text-sm leading-relaxed mb-3">
          Primer pedido al por mayor recibe descuento especial. Precio por volumen más competitivo del mercado — directo del productor, sin intermediarios.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[#8B4513] font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all hover:scale-105"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          ¡Quiero mi descuento!
        </a>
      </div>
    </div>
  )
}

/* ─── FEATURED PRODUCTS ─── */
function FeaturedProducts() {
  return (
    <div id="productos" className="px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-[#D4A017]" />
        <h2 className="font-bold text-xl text-[#2D1B0E]">Productos Destacados</h2>
      </div>
      <p className="text-[#666] text-sm mb-5">
        Los más pedidos por restaurantes y comercios — disponibles al por mayor
      </p>

      <div className="grid grid-cols-1 gap-3">
        {featuredProducts.map((product) => {
          const productWhatsApp = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(product.whatsappMessage)}`
          return (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-[#D4A017]/15 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 p-3">
                {/* Mini image */}
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {product.badge && (
                      <span className="text-xs font-medium bg-[#D4A017]/15 text-[#8B4513] px-2 py-0.5 rounded-full">
                        {product.badge}
                      </span>
                    )}
                    <span className="text-xs font-medium bg-[#2D5016]/15 text-[#2D5016] px-2 py-0.5 rounded-full">
                      Al por mayor
                    </span>
                  </div>
                  <p className="font-bold text-[#2D1B0E] text-sm truncate">{product.name}</p>
                  <p className="text-[#666] text-xs truncate">{product.description}</p>
                </div>
                {/* WhatsApp button */}
                <a
                  href={productWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white p-2.5 rounded-xl shrink-0 transition-all hover:shadow-md hover:scale-105"
                  aria-label={`Pedir ${product.name} por WhatsApp`}
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          )
        })}
      </div>

      {/* See all CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 bg-[#D4A017]/15 border border-[#D4A017]/30 rounded-xl p-3 text-[#8B4513] font-medium text-sm hover:bg-[#D4A017]/25 transition-all"
      >
        Ver catálogo completo (10+ productos)
        <ArrowDown className="w-4 h-4" />
      </a>
    </div>
  )
}

/* ─── WHY BUY HERE ─── */
function TrustSection() {
  return (
    <div className="px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <BadgeCheck className="w-5 h-5 text-[#2D5016]" />
        <h2 className="font-bold text-xl text-[#2D1B0E]">¿Por Qué Comprar Aquí?</h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {trustReasons.map((reason, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-[#D4A017]/15 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-full bg-[#FFF8E7] flex items-center justify-center mb-2">
              <reason.icon className="w-5 h-5 text-[#D4A017]" />
            </div>
            <p className="font-bold text-[#2D1B0E] text-sm mb-1">{reason.title}</p>
            <p className="text-[#666] text-xs leading-relaxed">{reason.text}</p>
          </div>
        ))}
      </div>

      {/* Big trust CTA */}
      <div className="mt-4 bg-[#2D5016] rounded-2xl p-5 text-white text-center">
        <p className="font-bold text-lg mb-1">Tu negocio necesita queso fresco</p>
        <p className="text-white/80 text-sm mb-3">Nosotros lo llevamos a tu puerta — precio por volumen, sin intermediarios</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          ¡Te compro!
        </a>
      </div>
    </div>
  )
}

/* ─── ABOUT SECTION ─── */
function AboutSection() {
  return (
    <div className="px-4 py-6">
      <div className="bg-white rounded-2xl p-5 border border-[#D4A017]/15 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-5 h-5 text-[#8B4513]" />
          <h2 className="font-bold text-lg text-[#2D1B0E]">Sobre Nosotros</h2>
        </div>
        <p className="text-[#555] text-sm leading-relaxed mb-4">
          <strong className="text-[#8B4513]">Distri Roluba</strong> — distribuidor especializado en quesos frescos, madurados, gourmet y lácteos al por mayor en Ecuador. Conectamos productores de calidad con restaurantes, supermercados, comedores y comercios que necesitan productos lácteos frescos y confiables.
        </p>
        <p className="text-[#555] text-sm leading-relaxed">
          Cada pila de queso, cada envase de leche, cada producto que distribuimos lleva nuestra garantía de frescura y calidad. Porque tu negocio merece un aliado que entregue más que productos — <strong className="text-[#8B4513]">entrega confianza</strong>.
        </p>

        {/* Values inline */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center gap-1 bg-[#2D5016]/10 rounded-full px-3 py-1.5">
            <Leaf className="w-3.5 h-3.5 text-[#2D5016]" />
            <span className="text-xs font-medium text-[#2D5016]">Frescura</span>
          </div>
          <div className="flex items-center gap-1 bg-[#D4A017]/10 rounded-full px-3 py-1.5">
            <Award className="w-3.5 h-3.5 text-[#D4A017]" />
            <span className="text-xs font-medium text-[#D4A017]">Calidad</span>
          </div>
          <div className="flex items-center gap-1 bg-[#8B4513]/10 rounded-full px-3 py-1.5">
            <Truck className="w-3.5 h-3.5 text-[#8B4513]" />
            <span className="text-xs font-medium text-[#8B4513]">Servicio</span>
          </div>
        </div>
      </div>
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
          <h2 className="font-bold text-lg text-[#2D1B0E]">Nuestros Servicios</h2>
        </div>
        <div className="space-y-2.5">
          {services.map((service, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
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
          <p className="text-[#666] text-xs">Añadir Distri Roluba a tu celular — siempre disponible</p>
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
          <p className="text-white/90 text-sm mb-4">Escríbenos ahora — respuesta en minutos, cotización sin compromiso, entrega directa a tu negocio.</p>
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

/* ─── MAIN PAGE ─── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FFF0C0]">
      <main className="flex-1 max-w-lg mx-auto w-full">
        <ProfileHeader />
        <MainLinks />
        <UrgencyBanner />
        <FeaturedProducts />
        <TrustSection />
        <AboutSection />
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
