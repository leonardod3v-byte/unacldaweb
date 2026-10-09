import { useCallback, useEffect, useState } from 'react'
import { X, GraduationCap, ArrowRight, Calendar, Bell, Sparkles } from 'lucide-react'

// ============================================================
// Constantes
// ============================================================
const STORAGE_KEY = 'una_modal_cartelera_visto'

// ============================================================
// Datos: anuncios resumidos de la cartelera
// ============================================================
const anunciosResumen = [
    {
        titulo: 'Próximas Inscripciones para Nuevo Ingreso 2026-2',
        fecha: 'Del 21/07/2026 al 30/09/2026',
        categoria: 'Inscripción',
        destacado: true,
    },
    {
        titulo: 'Inscripción Curso Introductorio',
        fecha: 'Hasta el 30 de septiembre de 2026',
        categoria: 'Curso',
    },
    {
        titulo: 'Procesos de Modificaciones',
        fecha: 'Del 20/10/2026 al 31/10/2026',
        categoria: 'Modificación',
    },
    {
        titulo: 'Inscripción Prueba de Suficiencia de Inglés',
        fecha: 'Del 13/10/2026 al 17/10/2026',
        categoria: 'Inglés',
    },
]

// ============================================================
// Componente principal
// ============================================================
export function Modal() {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const yaVisto = sessionStorage.getItem(STORAGE_KEY)
        if (!yaVisto) {
            setOpen(true)
            requestAnimationFrame(() => setMounted(true))
            sessionStorage.setItem(STORAGE_KEY, 'true')
        }
    }, [])

    const close = useCallback(() => {
        setMounted(false)
        setTimeout(() => setOpen(false), 300)
    }, [])

    useEffect(() => {
        if (!open) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [open, close])

    useEffect(() => {
        if (!open) return
        const original = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = original
        }
    }, [open])

    if (!open) return null

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={close}
            className={`fixed inset-0 z-100 flex items-center justify-center bg-una-navy-dark/85 p-4 backdrop-blur-md transition-opacity duration-300 sm:p-6 ${mounted ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-white/20 transition-all duration-300 sm:max-w-xl ${mounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
            >
                {/* Botón cerrar */}
                <button
                    type="button"
                    onClick={close}
                    aria-label="Cerrar ventana"
                    className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-una-navy shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-una-accent hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-una-accent sm:right-4 sm:top-4"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* ============================================================
            Header "Bienvenido" — AHORA MÁS COMPACTO
            ============================================================ */}
                <div className="relative shrink-0 overflow-hidden bg-linear-to-br from-una-navy via-una-navy to-una-navy-dark px-6 py-5 sm:px-7 sm:py-6">
                    {/* Decoraciones */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-una-accent/30 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"
                    />

                    <div className="relative flex items-center gap-3.5">
                        {/* Icono más chico */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm ring-1 ring-white/20 sm:h-12 sm:w-12">
                            <GraduationCap className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                        </div>

                        {/* Textos compactos */}
                        <div className="min-w-0 flex-1">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-una-accent/40 bg-una-accent/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-una-accent backdrop-blur-sm">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-una-accent opacity-75" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-una-accent" />
                                </span>
                                Bienvenido
                            </span>
                            <h2
                                id="modal-title"
                                className="mt-1.5 font-heading text-base font-extrabold leading-tight text-white sm:text-lg"
                            >
                                Universidad Nacional Abierta
                            </h2>
                            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-una-accent sm:text-xs">
                                Centro Local Delta Amacuro
                            </p>
                        </div>
                    </div>
                </div>

                {/* ============================================================
            Contenido scrollable — AHORA MÁS IMPACTANTE
            ============================================================ */}
                <div className="flex-1 overflow-y-auto bg-linear-to-b from-slate-50 to-white px-5 py-5 sm:px-6 sm:py-6">
                    {/* Subtítulo llamativo */}
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-una-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-una-accent">
                            <Bell className="h-3 w-3" />
                            Atención estudiantes
                        </span>
                        <h3 className="mt-3 font-heading text-lg font-extrabold leading-tight text-una-navy sm:text-xl">
                            Próximos procesos académicos
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">
                            Estas son las fechas vigentes en nuestra cartelera
                        </p>
                    </div>

                    {/* Lista de anuncios destacada */}
                    <ul className="mt-5 space-y-3">
                        {anunciosResumen.map((a) => (
                            <li
                                key={a.titulo}
                                className={`group relative overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${a.destacado
                                        ? 'border-una-accent/40 bg-linear-to-br from-una-accent/10 via-white to-white ring-1 ring-una-accent/20'
                                        : 'border-slate-200 bg-white hover:border-una-accent/40'
                                    }`}
                            >
                                {/* Franja lateral de acento */}
                                <span
                                    className={`absolute inset-y-0 left-0 w-1 ${a.destacado ? 'bg-una-accent' : 'bg-una-navy/30'
                                        }`}
                                />

                                <div className="flex items-start gap-3 p-3.5 pl-4 sm:p-4 sm:pl-5">
                                    {/* Icono fecha */}
                                    <span
                                        className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ${a.destacado
                                                ? 'bg-una-accent text-white shadow-una-accent/30'
                                                : 'bg-una-navy/5 text-una-navy ring-1 ring-una-navy/10'
                                            }`}
                                    >
                                        <Calendar className="h-4 w-4" />
                                    </span>

                                    {/* Contenido */}
                                    <div className="min-w-0 flex-1">
                                        {/* Categoría + badge Nuevo */}
                                        <div className="flex flex-wrap items-center gap-1.5">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${a.destacado
                                                        ? 'bg-una-accent text-white'
                                                        : 'bg-una-navy/10 text-una-navy'
                                                    }`}
                                            >
                                                {a.categoria}
                                            </span>
                                            {a.destacado && (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-una-gold/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-600">
                                                    <Sparkles className="h-2.5 w-2.5" />
                                                    Nuevo
                                                </span>
                                            )}
                                        </div>

                                        {/* Título */}
                                        <h4 className="mt-1.5 font-heading text-sm font-bold leading-snug text-una-navy sm:text-base">
                                            {a.titulo}
                                        </h4>

                                        {/* Fecha destacada */}
                                        <p className="mt-1.5 text-xs font-bold text-una-accent sm:text-sm">
                                            {a.fecha}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ============================================================
            Footer con CTAs
            ============================================================ */}
                <div className="shrink-0 border-t border-slate-100 bg-slate-50 px-5 py-4 sm:px-6">
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <a
                            href="#cartelera"
                            onClick={close}
                            className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-una-accent px-5 py-3 text-sm font-bold text-white shadow-lg shadow-una-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-una-accent/90 hover:shadow-xl hover:shadow-una-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-una-accent focus-visible:ring-offset-2"
                        >
                            Ver cartelera completa
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>

                        <button
                            type="button"
                            onClick={close}
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-una-navy hover:text-una-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-una-accent"
                        >
                            Continuar al sitio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}