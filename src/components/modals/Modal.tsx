import { useCallback, useEffect, useState } from 'react'
import { X } from 'lucide-react'

const STORAGE_KEY = 'una_modal_comunicado_visto'

export function Modal() {
    const [open, setOpen] = useState(false)

    // Verificar si ya se mostró en esta sesión
    useEffect(() => {
        const yaVisto = sessionStorage.getItem(STORAGE_KEY)
        if (!yaVisto) {
            setOpen(true)
            sessionStorage.setItem(STORAGE_KEY, 'true')
        }
    }, [])

    const close = useCallback(() => setOpen(false), [])

    // Cerrar con Escape
    useEffect(() => {
        if (!open) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [open, close])

    // Bloquear scroll del body
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
            aria-label="Comunicado oficial"
            onClick={close}
            className="fixed inset-0 z-100 flex items-center justify-center bg-una-navy-dark/80 p-4 backdrop-blur-sm sm:p-6"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-full overflow-y-auto rounded-xl bg-transparent"
            >
                {/* Botón cerrar flotante */}
                <button
                    type="button"
                    onClick={close}
                    aria-label="Cerrar comunicado"
                    className="fixed right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 hover:text-white sm:right-6 sm:top-6"
                >
                    <X className="h-6 w-6" />
                </button>

                {/* Imagen tal cual, sin estilos extra */}
                <img
                    src="/images/comunicado-medidas-temporales.png"
                    alt="Comunicado de la Dirección de Registro y Control de Estudios"
                    className="h-auto w-auto max-w-full rounded-md object-contain shadow-2xl"
                />
            </div>
        </div>
    )
}