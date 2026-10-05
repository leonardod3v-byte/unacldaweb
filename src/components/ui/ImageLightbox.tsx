import { useCallback, useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Imagen {
    src: string
    alt: string
}

interface ImageLightboxProps {
    imagenes: Imagen[]
    indiceInicial: number
    onClose: () => void
}

export function ImageLightbox({
    imagenes,
    indiceInicial,
    onClose,
}: ImageLightboxProps) {
    const [indice, setIndice] = useState(indiceInicial)

    const siguiente = useCallback(
        () => setIndice((i) => (i + 1) % imagenes.length),
        [imagenes.length],
    )
    const anterior = useCallback(
        () => setIndice((i) => (i - 1 + imagenes.length) % imagenes.length),
        [imagenes.length],
    )

    // Cerrar con Escape + navegar con flechas
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight') siguiente()
            if (e.key === 'ArrowLeft') anterior()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [onClose, siguiente, anterior])

    // Bloquear scroll del body
    useEffect(() => {
        const original = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = original
        }
    }, [])

    const img = imagenes[indice]

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={`Imagen: ${img.alt}`}
            className="fixed inset-0 z-100 flex items-center justify-center bg-una-navy-dark/95 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Botón cerrar */}
            <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar imagen"
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-una-gold hover:text-una-navy-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-una-gold"
            >
                <X className="h-6 w-6" />
            </button>

            {/* Botón anterior */}
            {imagenes.length > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation()
                        anterior()
                    }}
                    aria-label="Imagen anterior"
                    className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-una-gold hover:text-una-navy-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-una-gold"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
            )}

            {/* Imagen */}
            <figure
                className="max-h-[90vh] max-w-6xl"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={img.src}
                    alt={img.alt}
                    className="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
                />
                <figcaption className="mt-4 text-center text-sm text-slate-300">
                    {img.alt}{' '}
                    <span className="text-slate-500">
                        ({indice + 1} / {imagenes.length})
                    </span>
                </figcaption>
            </figure>

            {/* Botón siguiente */}
            {imagenes.length > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation()
                        siguiente()
                    }}
                    aria-label="Imagen siguiente"
                    className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-una-gold hover:text-una-navy-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-una-gold"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            )}
        </div>
    )
}