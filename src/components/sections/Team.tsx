import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react'

// ============================================================
// Tipos
// ============================================================
interface Persona {
    nombre: string
    cargo: string
    email: string
    imagen: string
}

// ============================================================
// Datos: Personal Directivo
// ============================================================
const directivo: Persona[] = [
    {
        nombre: 'Dr. Edgar Ramírez Marcano',
        cargo: 'Coordinador',
        email: '',
        imagen: '/images/asesores/dr-edgar-2025.jpg',
    },
    {
        nombre: 'Dra. Yovinsa Trinidad Salazar J.',
        cargo: 'Jefa de la Unidad Académica',
        email: '',
        imagen: '/images/asesores/yovinsa-salazar.jpg',
    },
    {
        nombre: 'Licdo. Carlos Alexander Acosta',
        cargo: 'Jefe de la Unidad Administrativa',
        email: '',
        imagen: '/images/asesores/carlos-alexander-acosta.jpg',
    },
    {
        nombre: 'Licda. Ledys Arzolay',
        cargo: 'Jefa de la Unidad de Registro y Control de Estudios',
        email: '',
        imagen: '/images/asesores/ledys-arzolay.jpg',
    },
]

// ============================================================
// Datos: Asesores con funciones administrativas
// ============================================================
const asesoresAdmin: Persona[] = [
    {
        nombre: 'Msc. Tibisay Padrino',
        cargo: 'Resp. del Servicio de Orientación al Estudiante',
        email: 'tibisayp337@gmail.com',
        imagen: '/images/asesores/tibisay-padrino.jpg',
    },
    {
        nombre: 'Msc. Nancy Lira',
        cargo: 'Resp. de Logística de Evaluación y Asesora Académica',
        email: 'nancyclira58@gmail.com',
        imagen: '/images/asesores/nancy-lira.jpg',
    },
    {
        nombre: 'Lcda. Luz Jaramillo',
        cargo:
            'Resp. de Extensión · Asesora en Administración de Empresas (612) y Administración Mención Riesgos y Seguros (613)',
        email: 'milagrosluz@gmail.com',
        imagen: '/images/asesores/luz-jaramillo.jpg',
    },
    {
        nombre: 'Dra. Eldris Salazar',
        cargo: 'Asesora en Educación · Resp. Servicio Comunitario',
        email: 'uneldris@gmail.com',
        imagen: '/images/asesores/eldris-salazar.jpg',
    },
    {
        nombre: 'Dra. Leslibeth Sucre',
        cargo:
            'Asesora Ing. Industrial y TSU Higiene y Seguridad Industrial · Resp. Investigaciones y Postgrado',
        email: 'leslibethsucregonzalez@gmail.com',
        imagen: '/images/asesores/leslibeth-sucre.jpg',
    },
    {
        nombre: 'Ing. Matías Sarabia C.',
        cargo:
            'Asesor Ing. Sistemas y TSU Mantenimiento de Sistemas Informáticos · Resp. Sala de Computación',
        email: 'jsarabia22@gmail.com',
        imagen: '/images/asesores/matias-sarabia.jpg',
    },
]

// ============================================================
// Datos: Asesores académicos
// ============================================================
const asesoresAcademicos: Persona[] = [
    {
        nombre: 'Msc. María Lo Galbo',
        cargo: 'Asesora Educación Integral',
        email: 'marialogalbouna@gmail.com',
        imagen: '/images/asesores/maria-lo-galbo.jpg',
    },
    {
        nombre: 'Ing. Chrismar Sarabia',
        cargo: 'Asesora Área Matemáticas',
        email: 'chrismarcsh34@gmail.com',
        imagen: '/images/asesores/chrismar-sarabia.jpg',
    },
    {
        nombre: 'Licdo. Edgar Abreu',
        cargo: 'Asesor Lingüística y Literatura',
        email: 'ejam77@hotmail.com',
        imagen: '/images/asesores/edgar-abreu.jpg',
    },
    {
        nombre: 'Msc. Tomasa Rodríguez',
        cargo: 'Asesora Educación Preescolar',
        email: 'tominesrm@gmail.com',
        imagen: '/images/asesores/tomasa-rodriguez.jpg',
    },
    {
        nombre: 'Licda. Roraima Nuñez',
        cargo: 'Asesora Contaduría Pública',
        email: 'roraiman@gmail.com',
        imagen: '/images/asesores/roraima-nunez.jpg',
    },
    {
        nombre: 'Msc. Leydis Zacarías',
        cargo: 'Asesora Dificultades del Aprendizaje',
        email: 'zacariasleydis@gmail.com',
        imagen: '/images/asesores/leydis-zacarias.jpg',
    },
]

// ============================================================
// Sub-componente: Card de Directivo
// ============================================================
function DirectivoCard({ persona, indice }: { persona: Persona; indice: number }) {
    return (
        <article className="group relative h-full overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-una-accent/10 hover:ring-una-accent/40">
            <span
                aria-hidden="true"
                className="absolute right-4 top-4 z-10 font-heading text-5xl font-black leading-none text-white/20 transition-all duration-500 group-hover:text-una-accent/40"
            >
                {String(indice + 1).padStart(2, '0')}
            </span>

            <div className="relative aspect-square overflow-hidden bg-linear-to-br from-slate-100 to-slate-200">
                <img
                    src={persona.imagen}
                    alt={persona.nombre}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-una-navy-dark via-una-navy-dark/40 to-transparent" />

                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-una-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    Directivo
                </span>
            </div>

            <div className="relative p-6 text-center">
                <h4 className="font-heading text-lg font-bold leading-tight text-una-navy">
                    {persona.nombre}
                </h4>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-una-accent">
                    {persona.cargo}
                </p>
            </div>

            <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-linear-to-r from-transparent via-una-accent to-transparent transition-all duration-500 group-hover:w-32" />
        </article>
    )
}

// ============================================================
// Sub-componente: Card de Asesor
// ============================================================
function AsesorCard({ persona }: { persona: Persona }) {
    const iniciales = persona.nombre
        .split(' ')
        .filter((w) => /^[A-Z]/.test(w))
        .slice(0, 2)
        .map((w) => w[0])
        .join('')

    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-una-accent/50 hover:shadow-xl hover:shadow-una-accent/10">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-una-accent/5 transition-all duration-700 group-hover:scale-150 group-hover:bg-una-accent/10" />

            <div className="relative flex items-start gap-4">
                <div className="relative shrink-0">
                    <img
                        src={persona.imagen}
                        alt={persona.nombre}
                        loading="lazy"
                        className="h-20 w-20 rounded-xl object-cover ring-2 ring-slate-100 transition-all duration-500 group-hover:ring-una-accent/50"
                    />
                    <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-una-navy text-[10px] font-bold text-una-accent ring-2 ring-white">
                        {iniciales}
                    </span>
                </div>

                <div className="min-w-0 flex-1">
                    <h4 className="font-heading text-sm font-bold leading-tight text-una-navy">
                        {persona.nombre}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                        {persona.cargo}
                    </p>
                </div>
            </div>

            <a
                href={`mailto:${persona.email}`}
                className="relative mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 transition-all duration-300 group-hover:bg-una-navy group-hover:text-una-accent"
            >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{persona.email}</span>
            </a>
        </article>
    )
}

// ============================================================
// Sub-componente: Carrusel de Directivos
// ============================================================
function CarruselDirectivo() {
    const trackRef = useRef<HTMLDivElement>(null)
    const [puedeIzq, setPuedeIzq] = useState(false)
    const [puedeDer, setPuedeDer] = useState(true)

    const actualizarBotones = useCallback(() => {
        const track = trackRef.current
        if (!track) return
        const maxScroll = track.scrollWidth - track.clientWidth
        setPuedeIzq(track.scrollLeft > 4)
        setPuedeDer(track.scrollLeft < maxScroll - 4)
    }, [])

    useEffect(() => {
        actualizarBotones()
        const track = trackRef.current
        if (!track) return
        track.addEventListener('scroll', actualizarBotones, { passive: true })
        window.addEventListener('resize', actualizarBotones)
        return () => {
            track.removeEventListener('scroll', actualizarBotones)
            window.removeEventListener('resize', actualizarBotones)
        }
    }, [actualizarBotones])

    const desplazar = (direccion: 'izq' | 'der') => {
        const track = trackRef.current
        if (!track) return
        const delta =
            direccion === 'izq'
                ? -track.clientWidth * 0.8
                : track.clientWidth * 0.8
        track.scrollBy({ left: delta, behavior: 'smooth' })
    }

    return (
        <div className="relative mt-14">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-white to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-white to-transparent sm:w-20" />

            <button
                type="button"
                onClick={() => desplazar('izq')}
                disabled={!puedeIzq}
                aria-label="Anterior"
                className="absolute -left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-una-navy text-white shadow-xl ring-4 ring-white transition-all duration-300 hover:scale-110 hover:bg-una-accent focus:outline-none focus-visible:ring-una-accent disabled:pointer-events-none disabled:opacity-0 sm:-left-5"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                type="button"
                onClick={() => desplazar('der')}
                disabled={!puedeDer}
                aria-label="Siguiente"
                className="absolute -right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-una-navy text-white shadow-xl ring-4 ring-white transition-all duration-300 hover:scale-110 hover:bg-una-accent focus:outline-none focus-visible:ring-una-accent disabled:pointer-events-none disabled:opacity-0 sm:-right-5"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            <div
                ref={trackRef}
                className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 pt-2"
            >
                {directivo.map((p, i) => (
                    <div
                        key={p.nombre}
                        className="w-[75%] shrink-0 snap-center sm:w-[45%] lg:w-[30%] xl:w-[23%]"
                    >
                        <DirectivoCard persona={p} indice={i} />
                    </div>
                ))}
            </div>
        </div>
    )
}

// ============================================================
// Componente principal
// ============================================================
export function Team() {
    return (
        <section
            id="nosotros"
            className="relative scroll-mt-20 overflow-hidden bg-white py-20 sm:py-24"
        >
            {/* Fondo decorativo */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-una-accent/5 blur-3xl" />
                <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-una-navy/5 blur-3xl" />

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
            Encabezado general de la sección
            ============================================================ */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-una-accent/30 bg-una-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-una-accent">
                        <span className="h-2 w-2 rounded-full bg-una-accent" />
                        Nuestro equipo
                    </span>

                    <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-una-navy text-balance sm:text-4xl md:text-5xl">
                        Personal del Centro Local
                    </h2>

                    <p className="mt-4 text-base text-slate-600 text-pretty">
                        Conoce al equipo humano que hace posible la educación universitaria
                        en el estado Delta Amacuro.
                    </p>
                </div>

                {/* ============================================================
            Bloque 1: Personal Directivo
            ============================================================ */}
                <div className="mt-16">
                    <div className="flex items-center gap-4">
                        <h3 className="font-heading text-xl font-bold text-una-navy sm:text-2xl">
                            Personal Directivo
                        </h3>
                        <span className="h-px flex-1 bg-linear-to-r from-una-accent/40 to-transparent" />
                    </div>

                    <CarruselDirectivo />
                </div>

                {/* ============================================================
            Bloque 2: Asesores con funciones administrativas
            ============================================================ */}
                <div className="mt-20">
                    <div className="flex items-center gap-4">
                        <h3 className="font-heading text-xl font-bold text-una-navy sm:text-2xl">
                            Asesores con Funciones Administrativas
                        </h3>
                        <span className="h-px flex-1 bg-linear-to-r from-una-accent/40 to-transparent" />
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {asesoresAdmin.map((p) => (
                            <AsesorCard key={p.nombre} persona={p} />
                        ))}
                    </div>
                </div>

                {/* ============================================================
            Bloque 3: Asesores académicos
            ============================================================ */}
                <div className="mt-20">
                    <div className="flex items-center gap-4">
                        <h3 className="font-heading text-xl font-bold text-una-navy sm:text-2xl">
                            Asesores Académicos
                        </h3>
                        <span className="h-px flex-1 bg-linear-to-r from-una-accent/40 to-transparent" />
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {asesoresAcademicos.map((p) => (
                            <AsesorCard key={p.nombre} persona={p} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}