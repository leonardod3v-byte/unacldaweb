import { ExternalLink, Bell, Mail, Calendar } from 'lucide-react'

// ============================================================
// Tipos
// ============================================================
type Categoria =
    | 'Inglés'
    | 'Modificación'
    | 'Postgrado'
    | 'Inscripción'
    | 'Competencia'

interface Anuncio {
    titulo: string
    fecha: string
    categoria: Categoria
    imagen: string
    href?: string
    destacado?: boolean
    orientadora?: boolean
}

// ============================================================
// Imágenes por categoría
// ============================================================
const imagenes: Record<Categoria, string> = {
    Inglés:
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop',
    Modificación:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    Postgrado:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    Inscripción:
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    Competencia:
        'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800&auto=format&fit=crop',
}

// ============================================================
// Datos: orientadora
// ============================================================
const orientadora = {
    nombre: 'MsC Tibisay Padrino',
    cargo: 'Orientadora',
    email: 'tibisayp337@gmail.com',
    whatsapp: '0424-914-1754',
    whatsappHref: 'https://wa.me/584249141754',
    foto: '/images/asesores/tibisay-padrino.jpg',
}

// ============================================================
// Datos: anuncios
// ============================================================
const anuncios: Anuncio[] = [
    {
        titulo: 'Presentación de Prueba de Suficiencia de Inglés 2do Momento',
        fecha: '14 de noviembre de 2026',
        categoria: 'Inglés',
        imagen: imagenes['Inglés'],
    },
    {
        titulo: 'Procesos de Modificaciones',
        fecha: 'Del 20/10/2026 al 31/10/2026',
        categoria: 'Modificación',
        imagen: imagenes['Modificación'],
    },
    {
        titulo: 'Curso de Iniciación de Postgrado 2026',
        fecha: 'Tercer curso: del 21/09/2026 al 09/10/2026',
        categoria: 'Postgrado',
        imagen: imagenes['Postgrado'],
    },
    {
        titulo: 'Próximas Inscripciones para Nuevo Ingreso 2026-2',
        fecha: 'Del 21/07/2026 al 30/09/2026',
        categoria: 'Inscripción',
        imagen: imagenes['Inscripción'],
        destacado: true,
    },
    {
        titulo: 'Inscripción Prueba de Suficiencia de Inglés 2do Momento',
        fecha: 'Del 13/10/2026 al 17/10/2026',
        categoria: 'Inglés',
        imagen: imagenes['Inglés'],
    },
    {
        titulo: 'Entrega de Certificado de Competencia',
        fecha: 'Del 08/06/2026 al 26/06/2026',
        categoria: 'Competencia',
        imagen: imagenes['Competencia'],
    },
    {
        titulo: 'Inscripción Curso Introductorio',
        fecha: 'Hasta el 30 de septiembre de 2026',
        categoria: 'Inscripción',
        imagen: imagenes['Inscripción'],
        orientadora: true,
    },
    {
        titulo: 'Proceso de Modificaciones Lapso 2027-1',
        fecha: 'Del 20/10/2026 al 31/10/2026',
        categoria: 'Modificación',
        imagen: imagenes['Modificación'],
    },
]

// ============================================================
// Sub-componente: Modal de orientadora (centrado en pantalla)
// ============================================================
function OrientadoraModal() {
    return (
        <div className="pointer-events-none fixed inset-0 z-100 flex items-center justify-center bg-una-navy-dark/60 p-4 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
            <div
                onClick={(e) => e.preventDefault()}
                className="relative w-full max-w-md scale-95 overflow-hidden rounded-3xl bg-white shadow-2xl transition-transform duration-300 group-hover:scale-100"
            >
                {/* Header con gradiente + foto */}
                <div className="relative bg-linear-to-br from-una-navy via-una-navy to-una-navy-dark px-6 pb-16 pt-6">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-una-accent/30 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-white/10 blur-3xl"
                    />

                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                            backgroundSize: '24px 24px',
                        }}
                    />
                </div>

                {/* Foto circular */}
                <div className="relative -mt-14 flex justify-center px-6">
                    <div className="relative">
                        <img
                            src={orientadora.foto}
                            alt={orientadora.nombre}
                            className="h-28 w-28 rounded-full object-cover shadow-xl ring-4 ring-white"
                        />
                        <span className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-una-accent ring-4 ring-white">
                            <svg
                                viewBox="0 0 24 24"
                                className="h-3.5 w-3.5"
                                fill="none"
                                stroke="white"
                                strokeWidth={3}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Info */}
                <div className="px-6 pb-6 pt-5 text-center">
                    <h3 className="font-heading text-xl font-extrabold leading-tight text-una-navy">
                        {orientadora.nombre}
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-una-accent">
                        {orientadora.cargo}
                    </p>

                    <div className="mt-5 space-y-2.5">
                        <a
                            href={`mailto:${orientadora.email}`}
                            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-una-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-una-accent hover:bg-una-accent/5 hover:shadow-md"
                        >
                            <Mail className="h-4 w-4 shrink-0 text-una-accent" />
                            <span className="truncate">{orientadora.email}</span>
                        </a>

                        <a
                            href={orientadora.whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/40"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-4 w-4 shrink-0"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg>
                            {orientadora.whatsapp}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ============================================================
// Sub-componente: Card individual
// ============================================================
function AnnouncementCard({ anuncio }: { anuncio: Anuncio }) {
    const contenido = (
        <>
            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-slate-100 sm:h-56">
                <img
                    src={anuncio.imagen}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-una-navy-dark via-una-navy-dark/40 to-transparent" />

                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-una-navy shadow-md backdrop-blur-sm">
                    {anuncio.categoria}
                </span>

                {anuncio.destacado && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-una-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                        </span>
                        Nuevo
                    </span>
                )}

                <h3 className="absolute inset-x-4 bottom-4 font-heading text-base font-extrabold leading-tight text-white drop-shadow-lg sm:text-lg">
                    {anuncio.titulo}
                </h3>
            </div>

            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-una-accent/10 text-una-accent">
                        <Calendar className="h-4 w-4" />
                    </span>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Fecha
                        </p>
                        <p className="mt-0.5 text-sm font-bold text-una-navy">
                            {anuncio.fecha}
                        </p>
                    </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    {anuncio.href ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-una-navy transition group-hover:text-una-accent">
                            Ver más información
                            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                    ) : (
                        <span className="text-xs font-medium text-slate-400">
                            Información general
                        </span>
                    )}

                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 transition group-hover:text-una-accent">
                        UNA · Delta Amacuro
                    </span>
                </div>
            </div>
        </>
    )

    const clases = `group relative flex w-80 shrink-0 snap-start flex-col rounded-2xl border bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:w-96 ${anuncio.destacado
            ? 'border-una-accent/40 ring-2 ring-una-accent/20 hover:ring-una-accent/60'
            : 'border-slate-200 hover:border-una-accent/40'
        }`

    const card = (
        <article className={clases}>
            {contenido}
            {anuncio.orientadora && <OrientadoraModal />}
        </article>
    )

    if (anuncio.href) {
        return (
            <a
                href={anuncio.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contents"
            >
                {card}
            </a>
        )
    }

    return card
}

// ============================================================
// Componente principal
// ============================================================
export function BulletinBoard() {
    const listaDuplicada = [...anuncios, ...anuncios]

    return (
        <section
            id="cartelera"
            className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:py-24"
        >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-una-accent/5 blur-3xl" />
                <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-una-navy/5 blur-3xl" />

                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, rgba(10,107,196,0.8) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />
            </div>

            <div className="relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-una-accent/30 bg-una-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-una-accent">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-una-accent opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-una-accent" />
                            </span>
                            <Bell className="h-3.5 w-3.5" />
                            Atención estudiantes
                        </span>

                        <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-una-navy text-balance sm:text-4xl">
                            Cartelera Informativa
                        </h2>
                        <p className="mt-4 text-base text-slate-600 text-pretty">
                            Consulta las fechas y procesos académicos vigentes del Centro
                            Local Delta Amacuro.
                        </p>
                    </div>
                </div>

                <div className="relative mt-14">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-white to-transparent sm:w-32" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-white to-transparent sm:w-32" />

                    <div className="overflow-hidden py-4">
                        <div className="bulletin-track-horizontal flex gap-6 pl-4 sm:pl-6 lg:pl-8">
                            {listaDuplicada.map((a, i) => (
                                <AnnouncementCard key={`${i}-${a.titulo}`} anuncio={a} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}