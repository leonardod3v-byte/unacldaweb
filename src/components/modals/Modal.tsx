import { useCallback, useEffect, useState } from 'react'
import { X, GraduationCap, Calendar, BookOpen } from 'lucide-react'

// ============================================================
// Constantes
// ============================================================
const STORAGE_KEY = 'una_modal_curso_introductorio_visto'

// ============================================================
// Componente principal
// ============================================================
export function Modal() {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    // Verificar si ya se mostró en esta sesión
    useEffect(() => {
        const yaVisto = sessionStorage.getItem(STORAGE_KEY)
        if (!yaVisto) {
            setOpen(true)
            // Pequeño delay para que la animación se vea bien
            requestAnimationFrame(() => setMounted(true))
            sessionStorage.setItem(STORAGE_KEY, 'true')
        }
    }, [])

    const close = useCallback(() => {
        setMounted(false)
        // Esperar a que termine la animación antes de desmontar
        setTimeout(() => setOpen(false), 300)
    }, [])

    // Cerrar con Escape
    useEffect(() => {
        if (!open) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [open, close])

    // Bloquear scroll del body mientras el modal está abierto
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
            {/* ============================================================
          Contenedor del modal
          ============================================================ */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-white/20 transition-all duration-300 ${mounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
            >
                {/* Botón cerrar */}
                <button
                    type="button"
                    onClick={close}
                    aria-label="Cerrar ventana"
                    className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-una-navy shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-una-accent hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-una-accent sm:right-5 sm:top-5"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* ============================================================
            Grid: imagen izquierda + contenido derecha
            ============================================================ */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* ---------- Imagen (izquierda) ---------- */}
                    <div className="relative min-h-64 overflow-hidden bg-una-navy-dark lg:min-h-full">
                        <img
                            src="/images/cursointroductorio.jpg"
                            alt="Curso Introductorio de la Universidad Nacional Abierta"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        {/* Overlay con gradiente para legibilidad */}
                        <div className="absolute inset-0 bg-linear-to-br from-una-navy-dark/40 via-una-navy-dark/20 to-una-navy-dark/70 lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-una-navy-dark/60" />
                    </div>

                    {/* ---------- Contenido (derecha) ---------- */}
                    <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-10">
                        {/* Decoración sutil */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-una-accent/5 blur-3xl"
                        />

                        <div className="relative">
                            {/* Badge */}
                            <span className="inline-flex items-center gap-2 rounded-full border border-una-accent/30 bg-una-accent/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-una-accent">
                                <GraduationCap className="h-3.5 w-3.5" />
                                Curso Introductorio
                            </span>

                            {/* Título */}
                            <h2
                                id="modal-title"
                                className="mt-5 font-heading text-2xl font-extrabold leading-tight text-una-navy text-balance sm:text-3xl"
                            >
                                ¡Da el primer paso hacia tu vida universitaria!
                            </h2>

                            {/* Subtítulo */}
                            <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-una-accent">
                                UNA · Centro Local Delta Amacuro
                            </p>

                            {/* Descripción */}
                            <p className="mt-4 text-sm leading-relaxed text-slate-600 text-pretty sm:text-base">
                                Prepárate para tu formación universitaria con nuestro Curso
                                Introductorio. Una experiencia diseñada para que llegues con
                                las herramientas, métodos de estudio y confianza necesarias
                                para triunfar en tu carrera.
                            </p>

                            {/* Info destacada */}
                            <div className="mt-6 space-y-3">
                                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-una-navy/10 text-una-navy">
                                        <Calendar className="h-4 w-4" />
                                    </span>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                            Inscripciones abiertas
                                        </p>
                                        <p className="mt-0.5 text-sm font-bold text-una-navy">
                                            Hasta el 30 de septiembre de 2026
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3.5">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-una-accent/15 text-una-accent">
                                        <BookOpen className="h-4 w-4" />
                                    </span>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                            Modalidad
                                        </p>
                                        <p className="mt-0.5 text-sm font-bold text-una-navy">
                                            100% a distancia · Online
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
            </div>
        </div>
    )
}