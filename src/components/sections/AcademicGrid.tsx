import { useMemo, useState } from 'react'
import { ArrowUpRight, Filter, BookOpen, GraduationCap, Calculator, Users, Briefcase } from 'lucide-react'

// ============================================================
// Tipos
// ============================================================
type Area = 'Ingeniería' | 'Administración' | 'Educación' | 'Postgrados'

interface Programa {
    nombre: string
    descripcion: string
    area: Area
    href: string
}

// ============================================================
// Config por área (icono + colores)
// ============================================================
const configArea: Record<
    Area,
    { icon: typeof BookOpen; color: string; bg: string }
> = {
    Ingeniería: {
        icon: Calculator,
        color: 'text-una-navy',
        bg: 'bg-una-navy/10',
    },
    Administración: {
        icon: Briefcase,
        color: 'text-una-accent',
        bg: 'bg-una-accent/15',
    },
    Educación: {
        icon: Users,
        color: 'text-una-navy-dark',
        bg: 'bg-una-navy/5',
    },
    Postgrados: {
        icon: GraduationCap,
        color: 'text-una-accent',
        bg: 'bg-una-accent/15',
    },
}

// ============================================================
// Datos: programas por área
// ============================================================
const programas: Programa[] = [
    // ---------- INGENIERÍA ----------
    {
        nombre: 'Ingeniería de Sistemas',
        descripcion:
            'Diseño, desarrollo y gestión de sistemas informáticos y soluciones tecnológicas.',
        area: 'Ingeniería',
        href: 'https://drive.google.com/drive/folders/1ur135N7IeS7hWgZm6fueWHPKrOwXjObu?usp=sharing',
    },
    {
        nombre: 'Ingeniería Industrial',
        descripcion:
            'Optimización de procesos productivos, calidad y gestión de operaciones.',
        area: 'Ingeniería',
        href: 'https://drive.google.com/drive/folders/1_AoiymGgijthOjKPaGdaV2udggPKGhvS?usp=sharing',
    },
    {
        nombre: 'TSU en Mantenimiento de Sistemas Informáticos',
        descripcion:
            'Técnico Superior en mantenimiento preventivo y correctivo de equipos y sistemas.',
        area: 'Ingeniería',
        href: 'https://drive.google.com/drive/folders/1xPGfdMBb0l8GKRV2hS-hW0XTUaol10dd?usp=sharing',
    },
    {
        nombre: 'TSU en Higiene y Seguridad Industrial',
        descripcion:
            'Prevención de riesgos laborales, seguridad industrial y salud ocupacional.',
        area: 'Ingeniería',
        href: 'https://drive.google.com/drive/folders/1dNFgvQTl1P0PCfxBDJF9wGpqIdAOr21K?usp=sharing',
    },

    // ---------- ADMINISTRACIÓN ----------
    {
        nombre: 'Licenciatura en Administración de Empresas',
        descripcion:
            'Gestión organizacional, finanzas, mercadeo y liderazgo empresarial.',
        area: 'Administración',
        href: 'https://drive.google.com/drive/folders/1JMXsaf3z5ZX26Yx0rgeKY3Rlh2VZeVfm?usp=sharing',
    },
    {
        nombre: 'Licenciatura en Administración (Mención Riesgos y Seguros)',
        descripcion:
            'Especialización en gestión de riesgos, seguros y análisis financiero.',
        area: 'Administración',
        href: 'https://drive.google.com/drive/folders/1kttHrUzc0jTAMhJsh8fWs3lEaR_Ixy-p?usp=sharing',
    },
    {
        nombre: 'Licenciatura en Contaduría Pública',
        descripcion:
            'Contabilidad, auditoría y tributación con dominio de normativa vigente.',
        area: 'Administración',
        href: 'https://drive.google.com/drive/folders/1L0eGsmVMAvia5Q4Ronvo-bMCWNmk0pFm?usp=sharing',
    },
    {
        nombre: 'TSU en Contaduría',
        descripcion:
            'Técnico Superior en contabilidad, costos y registro de operaciones financieras.',
        area: 'Administración',
        href: 'https://drive.google.com/drive/folders/1sUZVBruTaWEpcXqZl3O0P1pBqqp3UUGx?usp=sharing',
    },

    // ---------- EDUCACIÓN ----------
    {
        nombre: 'Licenciatura en Educación Integral',
        descripcion:
            'Formación docente para la educación básica con enfoque humanista.',
        area: 'Educación',
        href: 'https://drive.google.com/drive/folders/1k6HUPXnAVlzoijbS6bFOF3TWlOvG97EX?usp=sharing',
    },
    {
        nombre: 'Licenciatura en Educación (Mención Dificultades del Aprendizaje)',
        descripcion:
            'Atención especializada a estudiantes con dificultades de aprendizaje.',
        area: 'Educación',
        href: 'https://drive.google.com/drive/folders/1oFbb5r4dFpbPZCfQrzHExukdcmbK7TJx?usp=sharing',
    },
    {
        nombre: 'Licenciatura en Educación Inicial / Preescolar',
        descripcion:
            'Formación docente para la atención integral de niños en edad preescolar.',
        area: 'Educación',
        href: 'https://drive.google.com/drive/folders/1dsiTBrC4OyrGWJUrIwUcvXVOMgNhftPY?usp=sharing',
    },
    {
        nombre: 'Licenciatura en Educación Matemática',
        descripcion:
            'Formación docente especializada en la enseñanza de las matemáticas.',
        area: 'Educación',
        href: 'https://drive.google.com/drive/folders/1TRFYYWZOUc9boBfLseZm8bFxB3FcNcGX?usp=sharing',
    },
    {
        nombre: 'Licenciatura en Matemática',
        descripcion:
            'Formación en matemáticas puras y aplicadas con orientación a la docencia e investigación.',
        area: 'Educación',
        href: 'https://drive.google.com/drive/folders/1Nn0sriM6oURhxojpmRACs8HqABVQEW9f?usp=sharing',
    },
    {
        nombre: 'TSU en Educación Integral',
        descripcion:
            'Técnico Superior en educación integral para apoyo docente en educación básica.',
        area: 'Educación',
        href: 'https://drive.google.com/drive/folders/1-GlrvhKK7OkdLwNU0lWY7m1di4B4OMV7?usp=sharing',
    },

    // ---------- POSTGRADOS ----------
    {
        nombre: 'MSc. en Ciencias de la Educación (Mención Planificación de la Educación)',
        descripcion:
            'Especialización en planificación estratégica y gestión de sistemas educativos.',
        area: 'Postgrados',
        href: '/docs/pensums/planificacion-educativa.pdf',
    },
    {
        nombre: 'MSc. en Ciencias de la Educación (Mención Administración Educativa)',
        descripcion:
            'Formación avanzada para directivos y gestores de instituciones educativas.',
        area: 'Postgrados',
        href: '/docs/pensums/administracion-educativa.pdf',
    },
    {
        nombre: 'MSc. en Educación Abierta y a Distancia',
        descripcion:
            'Maestría orientada al diseño y gestión de programas educativos a distancia.',
        area: 'Postgrados',
        href: '/docs/pensums/eduacion-abierta-distancia.pdf',
    },
    {
        nombre: 'MSc. en Administración de Negocios',
        descripcion:
            'Formación avanzada en dirección estratégica y gestión empresarial.',
        area: 'Postgrados',
        href: '/docs/pensums/administracion-negocios.pdf',
    },
    {
        nombre: 'Esp. en Telemática e Informática en Educación a Distancia',
        descripcion:
            'Especialización en tecnologías de la información aplicadas a la educación.',
        area: 'Postgrados',
        href: '/docs/pensums/informatica-telematica.pdf',
    },
    {
        nombre: 'Esp. en Derechos Humanos',
        descripcion:
            'Formación avanzada en promoción, defensa y estudio de los derechos humanos.',
        area: 'Postgrados',
        href: '/docs/pensums/derechos-humanos.pdf',
    },
]

const filtros = ['Todas', 'Ingeniería', 'Administración', 'Educación', 'Postgrados'] as const
type Filtro = (typeof filtros)[number]

// ============================================================
// Componente principal
// ============================================================
export function AcademicGrid() {
    const [activo, setActivo] = useState<Filtro>('Todas')

    const visibles = useMemo(
        () =>
            activo === 'Todas'
                ? programas
                : programas.filter((p) => p.area === activo),
        [activo],
    )

    return (
        <section id="carreras" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-una-accent">
                        Oferta educativa
                    </span>
                    <h2 className="mt-3 font-heading text-3xl font-extrabold text-una-navy text-balance sm:text-4xl">
                        Nuestra Oferta Académica
                    </h2>
                    <p className="mt-4 text-base text-slate-600 text-pretty">
                        Explora nuestras carreras, postgrados y programas organizados por
                        área de estudio.
                    </p>
                </div>

                {/* Filtros */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    {filtros.map((f) => {
                        const total =
                            f === 'Todas'
                                ? programas.length
                                : programas.filter((p) => p.area === f).length
                        const isActive = activo === f

                        return (
                            <button
                                key={f}
                                type="button"
                                onClick={() => setActivo(f)}
                                aria-pressed={isActive}
                                className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-una-accent focus-visible:ring-offset-2 sm:px-5 sm:text-sm ${isActive
                                        ? 'bg-una-navy text-white shadow-lg shadow-una-navy/25'
                                        : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:text-una-navy hover:ring-una-accent/40'
                                    }`}
                            >
                                {f}
                                <span
                                    className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${isActive
                                            ? 'bg-white/20 text-white'
                                            : 'bg-slate-100 text-slate-500 group-hover:bg-una-accent/20 group-hover:text-una-navy'
                                        }`}
                                >
                                    {total}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* Tabla */}
                <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                    <div className="hidden border-b border-slate-200 bg-slate-50/80 px-6 py-4 lg:block">
                        <div className="grid grid-cols-12 items-center gap-4">
                            <div className="col-span-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                <Filter className="h-3 w-3" />
                                N°
                            </div>
                            <div className="col-span-7 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                Programa
                            </div>
                            <div className="col-span-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                Área
                            </div>
                            <div className="col-span-2 text-right text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                Pensum
                            </div>
                        </div>
                    </div>

                    <ul className="divide-y divide-slate-100">
                        {visibles.map((p, i) => {
                            const config = configArea[p.area]
                            const Icon = config.icon

                            return (
                                <li key={p.nombre}>
                                    <a
                                        href={p.href}
                                        target={p.href !== '#' ? '_blank' : undefined}
                                        rel={p.href !== '#' ? 'noopener noreferrer' : undefined}
                                        className="group relative block transition-colors duration-200 hover:bg-slate-50 focus:outline-none focus-visible:bg-una-accent/5"
                                    >
                                        <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-una-accent transition-transform duration-300 group-hover:scale-y-100" />

                                        {/* Desktop */}
                                        <div className="hidden grid-cols-12 items-center gap-4 px-6 py-5 lg:grid">
                                            <div className="col-span-1">
                                                <span className="font-heading text-lg font-bold text-slate-300 transition-colors duration-300 group-hover:text-una-accent">
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                            </div>

                                            <div className="col-span-7 flex items-start gap-3">
                                                <span
                                                    className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${config.bg} ${config.color} transition-transform duration-300 group-hover:scale-110`}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </span>
                                                <div>
                                                    <h3 className="font-heading text-base font-bold text-una-navy transition-colors group-hover:text-una-accent">
                                                        {p.nombre}
                                                    </h3>
                                                    <p className="mt-1 text-sm text-slate-500 text-pretty">
                                                        {p.descripcion}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-span-2">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 rounded-full ${config.bg} px-3 py-1 text-xs font-bold uppercase tracking-wider ${config.color}`}
                                                >
                                                    {p.area}
                                                </span>
                                            </div>

                                            <div className="col-span-2 flex justify-end">
                                                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-una-navy transition-all duration-300 group-hover:border-una-navy group-hover:bg-una-navy group-hover:text-white">
                                                    Ver Pensum
                                                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Móvil */}
                                        <div className="flex flex-col gap-4 p-5 lg:hidden">
                                            <div className="flex items-start gap-3">
                                                <span
                                                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${config.bg} ${config.color}`}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </span>
                                                <div className="flex-1">
                                                    <span
                                                        className={`inline-flex items-center rounded-full ${config.bg} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${config.color}`}
                                                    >
                                                        {p.area}
                                                    </span>
                                                    <h3 className="mt-1.5 font-heading text-base font-bold text-una-navy">
                                                        {p.nombre}
                                                    </h3>
                                                    <p className="mt-1.5 text-sm text-slate-500 text-pretty">
                                                        {p.descripcion}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end border-t border-slate-100 pt-3">
                                                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-una-navy">
                                                    Ver Pensum y Requisitos
                                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50/80 px-6 py-4">
                        <p className="text-xs font-medium text-slate-500">
                            Mostrando{' '}
                            <span className="font-bold text-una-navy">
                                {visibles.length}
                            </span>{' '}
                            {visibles.length === 1 ? 'programa' : 'programas'}
                            {activo !== 'Todas' && (
                                <>
                                    {' '}
                                    en <span className="font-bold text-una-accent">{activo}</span>
                                </>
                            )}
                        </p>

                        {activo !== 'Todas' && (
                            <button
                                type="button"
                                onClick={() => setActivo('Todas')}
                                className="text-xs font-bold text-una-accent transition hover:text-una-navy hover:underline"
                            >
                                Limpiar filtro
                            </button>
                        )}
                    </div>
                </div>

                <p className="mt-6 text-center text-xs text-slate-400">
                    Haz clic en cualquier fila para abrir el pensum oficial en una nueva
                    pestaña
                </p>
            </div>
        </section>
    )
}