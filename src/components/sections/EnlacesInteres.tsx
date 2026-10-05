import { BookOpen, GraduationCap, FileText, ArrowUpRight } from 'lucide-react'

// ============================================================
// Datos
// ============================================================
const enlaces = [
    {
        icon: BookOpen,
        titulo: 'Subprograma de Diseño Académico',
        descripcion:
            'Planes de curso, trabajos prácticos y material de apoyo del subprograma.',
        href: 'https://subprogramadisenoacademicouna826543778.wordpress.com/',
        tag: 'Académico',
    },
    {
        icon: GraduationCap,
        titulo: 'Material Instruccional UNA',
        descripcion:
            'Recursos educativos abiertos y material instruccional gratuito de la UNA.',
        href: 'https://materialinstruccionalunagratis.wordpress.com/about/',
        tag: 'Recursos',
    },
    {
        icon: FileText,
        titulo: 'Inscripción UNASEC',
        descripcion:
            'Portal oficial para iniciar tu proceso de inscripción en línea.',
        href: 'http://www.unasec.com/',
        tag: 'Inscripciones',
    },
]

// ============================================================
// Componente principal
// ============================================================
export function EnlacesInteres() {
    return (
        <section
            id="enlaces-interes"
            className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:py-24"
        >
            {/* ============================================================
          Fondo decorativo
          ============================================================ */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                {/* Blobs */}
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-una-accent/5 blur-3xl" />
                <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-una-navy/5 blur-3xl" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(10,107,196,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(10,107,196,0.6) 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ============================================================
            Encabezado
            ============================================================ */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-una-accent/30 bg-una-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-una-accent">
                        <span className="h-2 w-2 rounded-full bg-una-accent" />
                        Recursos útiles
                    </span>

                    <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-una-navy text-balance sm:text-4xl md:text-5xl">
                        Enlaces de Interés
                    </h2>

                    <p className="mt-4 text-base text-slate-600 text-pretty">
                        Accede a los recursos y portales oficiales más utilizados por
                        nuestra comunidad universitaria.
                    </p>
                </div>

                {/* ============================================================
            Grid de tarjetas
            ============================================================ */}
                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
                    {enlaces.map((e, i) => (
                        <a
                            key={e.titulo}
                            href={e.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-una-accent/60 hover:shadow-2xl hover:shadow-una-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-una-accent focus-visible:ring-offset-2 sm:p-8"
                        >
                            {/* Número decorativo grande */}
                            <span
                                aria-hidden="true"
                                className="absolute -right-4 -top-6 font-heading text-[8rem] font-black leading-none text-una-navy/5 transition-all duration-500 group-hover:text-una-accent/10"
                            >
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            {/* Gradiente que aparece en hover */}
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-linear-to-br from-una-accent/0 via-una-accent/0 to-una-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            />

                            {/* Contenido */}
                            <div className="relative flex flex-1 flex-col">
                                {/* Tag de categoría */}
                                <span className="absolute right-0 top-0 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 transition-colors duration-300 group-hover:border-una-accent/30 group-hover:bg-una-accent/10 group-hover:text-una-accent">
                                    {e.tag}
                                </span>

                                {/* Icono grande */}
                                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-una-navy text-white shadow-lg shadow-una-navy/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-una-accent group-hover:shadow-xl group-hover:shadow-una-accent/30">
                                    <e.icon className="h-7 w-7" strokeWidth={1.75} />
                                </span>

                                {/* Título */}
                                <h3 className="mt-6 font-heading text-lg font-bold leading-snug text-una-navy transition-colors duration-300 group-hover:text-una-accent">
                                    {e.titulo}
                                </h3>

                                {/* Descripción */}
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 text-pretty">
                                    {e.descripcion}
                                </p>

                                {/* Footer con CTA */}
                                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 transition-colors duration-300 group-hover:border-una-accent/20">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-una-navy transition-colors duration-300 group-hover:text-una-accent">
                                        Visitar sitio
                                    </span>

                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-una-navy transition-all duration-300 group-hover:bg-una-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-una-accent/30">
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Nota inferior */}
                <p className="mt-10 text-center text-xs font-medium text-slate-400">
                    Todos los enlaces abren en una nueva pestaña
                </p>
            </div>

            {/* ============================================================
          Onda inferior (transición hacia Contact)
          ============================================================ */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 left-0 right-0 h-12 overflow-hidden sm:h-16"
            >
                <svg
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 h-full w-full fill-slate-50"
                >
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
                </svg>
            </div>
        </section>
    )
}