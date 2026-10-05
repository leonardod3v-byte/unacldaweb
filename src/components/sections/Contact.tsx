import { MapPin, Mail, Phone, Clock, Navigation, MessageCircle, ArrowUpRight } from 'lucide-react'

// ============================================================
// Datos
// ============================================================
const contacto = {
    direccion:
        'Calle Bolívar cruce con calle Los Apamates, Tucupita, Estado Delta Amacuro, Venezuela',
    email: 'atencion.deltaamacuro@una.edu.ve',
    telefono: '+58 (287) 721-0000',
    telefonoHref: 'tel:+582877210000',
    horario: 'Martes - Jueves - Sábado · 8:00 AM - 12:00 PM',
    mapaEmbed:
        'https://www.google.com/maps?q=Universidad+Nacional+Abierta+Tucupita+Delta+Amacuro&output=embed',
    mapaLink:
        'https://www.google.com/maps/search/?api=1&query=Universidad+Nacional+Abierta+Tucupita+Delta+Amacuro',
}

// ============================================================
// Datos de las tarjetas de contacto
// ============================================================
const tarjetas = [
    {
        icon: MapPin,
        label: 'Dirección',
        valor: contacto.direccion,
        href: contacto.mapaLink,
        accion: 'Cómo llegar',
        externo: true,
    },
    {
        icon: Mail,
        label: 'Email',
        valor: contacto.email,
        href: `mailto:${contacto.email}`,
        accion: 'Enviar correo',
        externo: false,
    },
    {
        icon: Phone,
        label: 'Teléfono',
        valor: contacto.telefono,
        href: contacto.telefonoHref,
        accion: 'Llamar',
        externo: false,
    },
    {
        icon: Clock,
        label: 'Horario',
        valor: contacto.horario,
        href: null,
        accion: null,
        externo: false,
    },
]

// ============================================================
// Componente principal
// ============================================================
export function Contact() {
    return (
        <section
            id="contacto"
            className="relative scroll-mt-20 overflow-hidden bg-slate-50 py-20 sm:py-24"
        >
            {/* ============================================================
          Onda superior (transición desde EnlacesInteres con fondo white)
          ============================================================ */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-1 left-0 right-0 h-12 overflow-hidden sm:h-16"
            >
                <svg
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    className="absolute top-0 h-full w-full rotate-180 fill-white"
                >
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
                </svg>
            </div>

            {/* ============================================================
          Fondo decorativo
          ============================================================ */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                {/* Blobs */}
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-una-accent/5 blur-3xl" />
                <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-una-navy/5 blur-3xl" />

                {/* Patrón de puntos */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, rgba(10,107,196,0.8) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ============================================================
            Encabezado
            ============================================================ */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-una-accent/30 bg-una-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-una-accent">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-una-accent opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-una-accent" />
                        </span>
                        <MessageCircle className="h-3.5 w-3.5" />
                        Estamos para servirte
                    </span>

                    <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-una-navy text-balance sm:text-4xl md:text-5xl">
                        Contáctanos
                    </h2>

                    <p className="mt-4 text-base text-slate-600 text-pretty">
                        ¿Tienes dudas? Visítanos, escríbenos o llámanos. Estaremos
                        encantados de atenderte.
                    </p>
                </div>

                {/* ============================================================
            Grid principal: datos + mapa
            ============================================================ */}
                <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
                    {/* ---------- Columna izquierda: tarjetas de contacto ---------- */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
                        {tarjetas.map((t) => {
                            const Icon = t.icon
                            const esLink = t.href !== null

                            const Wrapper = esLink ? 'a' : 'div'
                            const wrapperProps = esLink
                                ? {
                                    href: t.href!,
                                    target: t.externo ? '_blank' : undefined,
                                    rel: t.externo ? 'noopener noreferrer' : undefined,
                                }
                                : {}

                            return (
                                <Wrapper
                                    key={t.label}
                                    {...wrapperProps}
                                    className={`group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 ${esLink
                                            ? 'cursor-pointer hover:-translate-y-1 hover:border-una-accent/60 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-una-accent focus-visible:ring-offset-2'
                                            : ''
                                        }`}
                                >
                                    {/* Barra lateral de acento en hover */}
                                    {esLink && (
                                        <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-una-accent transition-transform duration-500 group-hover:scale-y-100" />
                                    )}

                                    {/* Ícono */}
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-una-navy/5 text-una-navy transition-all duration-500 group-hover:bg-una-accent group-hover:text-white">
                                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                                    </span>

                                    {/* Contenido */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                            {t.label}
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-una-navy wrap-break-word">
                                            {t.valor}
                                        </p>

                                        {esLink && t.accion && (
                                            <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-una-accent transition-all duration-300 group-hover:gap-2">
                                                {t.accion}
                                                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                            </span>
                                        )}
                                    </div>
                                </Wrapper>
                            )
                        })}
                    </div>

                    {/* ---------- Columna derecha: mapa ---------- */}
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg lg:col-span-3">
                        {/* Header del mapa */}
                        <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-linear-to-r from-white to-slate-50 px-5 py-4">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-una-navy/5 text-una-navy">
                                    <Navigation className="h-4 w-4" />
                                </span>
                                <div>
                                    <p className="font-heading text-sm font-bold text-una-navy">
                                        Nuestra ubicación
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        Tucupita, Delta Amacuro
                                    </p>
                                </div>
                            </div>

                            <a
                                href={contacto.mapaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-una-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-una-accent hover:bg-una-accent hover:text-white sm:inline-flex"
                            >
                                Abrir en Maps
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                        </div>

                        {/* Mapa embed */}
                        <iframe
                            src={contacto.mapaEmbed}
                            title="Ubicación de la UNA Centro Local Delta Amacuro"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-80 w-full border-0 sm:h-96 lg:h-[calc(100%-4.5rem)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}