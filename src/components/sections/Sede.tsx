import { useState } from 'react'
import { Camera, Maximize2, Sparkles } from 'lucide-react'
import { ImageLightbox } from '@/components/ui/ImageLightbox'

// ============================================================
// Datos de las imágenes
// ============================================================
const imagenesSede = [
    { src: '/images/una/una1.jpg', alt: 'Fachada del Centro Local Delta Amacuro' },
    { src: '/images/una/una2.jpg', alt: 'Área administrativa de la UNA' },
    { src: '/images/una/una3.jpg', alt: 'Pasillo principal de la sede' },
    { src: '/images/una/una5.jpg', alt: 'Sala de computación' },
    { src: '/images/una/una6.jpg', alt: 'Biblioteca y sala de estudio' },
    { src: '/images/una/una7.jpg', alt: 'Sala de videoconferencias' },
    { src: '/images/una/una8.jpg', alt: 'Oficinas de la UNA' },
    { src: '/images/una/una9.jpg', alt: 'Áreas comunes de la sede' },
]

// ============================================================
// Componente principal
// ============================================================
export function Sede() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    return (
        <section
            id="sede"
            className="relative scroll-mt-20 overflow-hidden bg-una-navy-dark py-20 sm:py-28"
        >
            {/* ============================================================
          Onda superior (transición desde la sección anterior)
          ============================================================ */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-1 left-0 right-0 z-10 h-12 overflow-hidden sm:h-16"
            >
                <svg
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    className="absolute top-0 h-full w-full rotate-180 fill-slate-50"
                >
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
                </svg>
            </div>

            {/* ============================================================
          Fondo decorativo
          ============================================================ */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                {/* Gradiente radial */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(74,158,255,0.15)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(10,107,196,0.2)_0%,transparent_60%)]" />

                {/* Blobs de luz */}
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-una-accent/20 blur-3xl" />
                <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-una-navy/40 blur-3xl" />

                {/* Grid pattern sutil */}
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ============================================================
            Encabezado
            ============================================================ */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-una-accent/40 bg-una-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-una-accent backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-una-accent opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-una-accent" />
                        </span>
                        <Camera className="h-3.5 w-3.5" />
                        Nuestra casa
                    </span>

                    <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl md:text-5xl">
                        Centro Local Delta Amacuro
                    </h2>

                    <p className="mt-4 text-base text-slate-300 text-pretty">
                        Un recorrido visual por nuestras instalaciones: espacios pensados
                        para tu formación y bienestar.
                    </p>
                </div>

                {/* ============================================================
            Stats mini
            ============================================================ */}
                <div className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-3">
                    <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-una-accent/15 text-una-accent">
                            <Camera className="h-4 w-4" />
                        </span>
                        <div className="text-left">
                            <p className="font-heading text-base font-bold leading-none text-white">
                                {imagenesSede.length}
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Fotos
                            </p>
                        </div>
                    </div>

                    <span className="hidden h-8 w-px bg-white/20 sm:block" />

                    <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-una-accent/15 text-una-accent">
                            <Sparkles className="h-4 w-4" />
                        </span>
                        <div className="text-left">
                            <p className="font-heading text-base font-bold leading-none text-white">
                                +45 Años
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                De historia
                            </p>
                        </div>
                    </div>
                </div>

                {/* ============================================================
            Grid Bento: 1 destacada (2x2) + 7 medianas
            ============================================================ */}
                <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                    {/* Imagen destacada (2x2) */}
                    <button
                        type="button"
                        onClick={() => setLightboxIndex(0)}
                        aria-label={`Ver imagen: ${imagenesSede[0].alt}`}
                        className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl bg-una-navy/20 ring-1 ring-white/10 transition-all duration-500 hover:ring-una-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-una-accent focus-visible:ring-offset-2 focus-visible:ring-offset-una-navy-dark"
                    >
                        <img
                            src={imagenesSede[0].src}
                            alt={imagenesSede[0].alt}
                            loading="lazy"
                            className="h-full min-h-65 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:min-h-80 md:min-h-100"
                        />

                        {/* Overlay base */}
                        <div className="absolute inset-0 bg-linear-to-t from-una-navy-dark/90 via-una-navy-dark/30 to-transparent" />

                        {/* Overlay hover (más intenso) */}
                        <div className="absolute inset-0 bg-linear-to-t from-una-navy-dark via-una-navy-dark/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-60" />

                        {/* Badge "Destacada" */}
                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-una-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm sm:left-5 sm:top-5">
                            <Sparkles className="h-3 w-3" />
                            Destacada
                        </span>

                        {/* Icono expandir */}
                        <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-una-accent sm:right-5 sm:top-5">
                            <Maximize2 className="h-5 w-5" />
                        </span>

                        {/* Caption */}
                        <div className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-6">
                            <p className="font-heading text-base font-bold text-white drop-shadow-lg sm:text-lg">
                                {imagenesSede[0].alt}
                            </p>
                            <p className="mt-1 text-xs font-medium text-slate-300">
                                Centro Local Delta Amacuro
                            </p>
                        </div>
                    </button>

                    {/* Resto de imágenes */}
                    {imagenesSede.slice(1).map((img, i) => (
                        <button
                            key={img.src}
                            type="button"
                            onClick={() => setLightboxIndex(i + 1)}
                            aria-label={`Ver imagen: ${img.alt}`}
                            className="group relative overflow-hidden rounded-xl bg-una-navy/20 ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1 hover:ring-una-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-una-accent focus-visible:ring-offset-2 focus-visible:ring-offset-una-navy-dark"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="h-32 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-40 md:h-48"
                            />

                            {/* Overlay base sutil */}
                            <div className="absolute inset-0 bg-linear-to-t from-una-navy-dark/60 via-transparent to-transparent" />

                            {/* Overlay hover */}
                            <div className="absolute inset-0 bg-linear-to-t from-una-navy-dark via-una-navy-dark/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90" />

                            {/* Icono expandir */}
                            <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-una-accent">
                                <Maximize2 className="h-3.5 w-3.5" />
                            </span>

                            {/* Caption en hover */}
                            <p className="absolute inset-x-0 bottom-0 translate-y-3 p-3 text-left text-xs font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                {img.alt}
                            </p>
                        </button>
                    ))}
                </div>

                {/* Nota inferior */}
                <p className="mt-8 text-center text-xs font-medium text-slate-400">
                    Haz clic en cualquier imagen para verla en tamaño completo
                </p>
            </div>

            {/* ============================================================
          Onda inferior (transición hacia la sección siguiente)
          ============================================================ */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 left-0 right-0 h-12 overflow-hidden sm:h-16"
            >
                <svg
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 h-full w-full fill-white"
                >
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
                </svg>
            </div>

            {/* ============================================================
          Lightbox
          ============================================================ */}
            {lightboxIndex !== null && (
                <ImageLightbox
                    imagenes={imagenesSede}
                    indiceInicial={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                />
            )}
        </section>
    )
}