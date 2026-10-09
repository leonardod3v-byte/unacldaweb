import { ArrowRight, GraduationCap, Clock, Wifi, HeartHandshake, PlayCircle } from 'lucide-react'
import { Plyr } from 'plyr-react'
import 'plyr-react/plyr.css'

// ============================================================
// Datos
// ============================================================
const metrics = [
    { icon: Clock, value: '+49 Años', label: 'de Trayectoria' },
    { icon: Wifi, value: 'Entornos', label: 'Virtuales' },
    { icon: HeartHandshake, value: 'Atención', label: 'Personalizada' },
]

// ============================================================
// Componente principal
// ============================================================
export function HeroSection() {
    const plyrProps = {
        source: {
            type: 'video' as const,
            sources: [
                {
                    src: '/images/aniversario-una.mp4',
                    type: 'video/mp4',
                },
            ],
        },
        options: {
            autoplay: true,
            muted: true,
            loop: { active: true },
            playsinline: true,
            controls: [
                'play-large',
                'play',
                'progress',
                'current-time',
                'mute',
                'volume',
                'fullscreen',
            ],
            settings: [],
            ratio: '9:16',
        },
    }

    return (
        <section
            id="inicio"
            className="relative overflow-hidden bg-una-navy-dark"
        >
            {/* Fondo */}
            <div className="absolute inset-0">
                <img
                    src="/images/campus-hero.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-br from-una-navy-dark/70 via-una-navy-dark/50 to-una-navy/25" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,47,92,0.25)_100%)]" />

                <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-una-accent/20 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-40 bottom-0 h-112 w-md rounded-full bg-una-navy/40 blur-3xl"
                />
            </div>

            {/* Contenido */}
            <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-24 lg:pb-28">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* ---------- Columna izquierda ---------- */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 rounded-full border border-una-accent/40 bg-una-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-una-accent backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-una-accent opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-una-accent" />
                            </span>
                            <GraduationCap className="h-3.5 w-3.5" />
                            Universidad Nacional Abierta
                        </span>

                        {/* Título */}
                        <h1 className="mt-6 font-heading text-3xl font-extrabold leading-[1.1] text-white text-balance sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
                            UNA modalidad diferente{' '}
                            <span className="relative inline-block text-una-accent">
                                con presencia nacional
                                <span
                                    aria-hidden="true"
                                    className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-linear-to-r from-una-accent via-una-accent/60 to-transparent"
                                />
                            </span>
                        </h1>

                        {/* Subtítulo */}
                        <p className="mx-auto mt-6 max-w-xl text-base text-slate-200 text-pretty sm:text-lg lg:mx-0">
                            <strong className="font-bold text-white">49 años</strong>{' '}
                            formando profesionales de excelencia en el Estado Delta Amacuro y
                            toda Venezuela.
                        </p>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                            <a
                                href="#carreras"
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-una-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-una-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-una-accent/90 hover:shadow-xl hover:shadow-una-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-una-accent focus-visible:ring-offset-2 focus-visible:ring-offset-una-navy-dark sm:w-auto"
                            >
                                Explorar Carreras
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>

                            <a
                                href="#nosotros"
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-una-accent hover:bg-una-accent/10 hover:text-una-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-una-accent sm:w-auto"
                            >
                                <PlayCircle className="h-4 w-4" />
                                Conócenos
                            </a>
                        </div>

                        {/* Mini-stat */}
                        <div className="mt-10 hidden items-center gap-6 lg:flex">
                            <div className="h-12 w-px bg-white/20" />
                            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                Centro Local{' '}
                                <span className="text-una-accent font-bold">Delta Amacuro</span>
                            </p>
                        </div>
                    </div>

                    {/* ---------- Columna derecha: video ---------- */}
                    <div className="relative mx-auto w-full max-w-70 sm:max-w-65 lg:max-w-75">
                        <div
                            aria-hidden="true"
                            className="absolute -inset-4 rounded-3xl bg-linear-to-br from-una-accent/40 via-transparent to-una-navy/40 blur-2xl"
                        />

                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-una-navy-dark shadow-2xl ring-1 ring-white/20">
                            <div className="absolute left-3 top-3 z-20 flex items-center gap-1.5 rounded-full bg-una-accent/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                                </span>
                                Video institucional
                            </div>

                            <div className="aspect-9/16 w-full">
                                <Plyr {...plyrProps} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Métricas */}
                <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
                    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                        {metrics.map((m) => (
                            <div
                                key={m.label}
                                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-una-accent/40 hover:bg-white/10"
                            >
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-una-accent/20 text-una-accent transition-colors duration-300 group-hover:bg-una-accent group-hover:text-white">
                                    <m.icon className="h-6 w-6" />
                                </span>
                                <div className="text-left">
                                    <dt className="font-heading text-xl font-extrabold text-white">
                                        {m.value}
                                    </dt>
                                    <dd className="text-xs font-medium uppercase tracking-wider text-slate-300">
                                        {m.label}
                                    </dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* Onda inferior */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 left-0 right-0 h-16 overflow-hidden"
            >
                <svg
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 h-full w-full fill-white"
                >
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
                </svg>
            </div>
        </section>
    )
}