import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Mail, Phone } from 'lucide-react'

// ============================================================
// Tipos
// ============================================================
interface DropdownItem {
    label: string
    href: string
}

interface DropdownGroup {
    label: string
    items: DropdownItem[]
}

// ============================================================
// Datos: contacto
// ============================================================
const contacto = {
    telefono: '+58 (287) 721-0000',
    telefonoHref: 'tel:+582877210000',
    email: 'atencion.deltaamacuro@una.edu.ve',
}

// ============================================================
// Datos: rutas principales (anclas)
// ============================================================
const rutas = [
    { label: 'Inicio', to: '#inicio' },
    { label: 'Nosotros', to: '#nosotros' },
    { label: 'Carreras', to: '#carreras' },
    { label: 'Cartelera', to: '#cartelera' },
    { label: 'Contacto', to: '#contacto' },
]

// ============================================================
// Datos: dropdowns
// ============================================================
const dropdowns: DropdownGroup[] = [
    {
        label: 'Estudiantes',
        items: [
            { label: 'Orientación', href: '/docs/orientacion.pdf' },
            { label: 'Procesos', href: '/docs/guia1.pdf' },
            { label: 'Retiro/Adición', href: '/docs/retiro-adicion.pdf' },
            { label: 'Tp/Tps', href: '/docs/tp-tps.pdf' },
            { label: 'Verificación Obj.', href: '/docs/verificacion-objetivo.pdf' },
            { label: 'Servicio Comunitario', href: '/docs/servicio-comunitario.pdf' },
            { label: 'Serv. Estudiantil', href: '/docs/servicio-estudiantil.pdf' },
            { label: 'Calendario Evaluaciones', href: '/docs/calendario-evaluaciones-2026-1.pdf' },
        ],
    },
    {
        label: 'Académico',
        items: [
            {
                label: 'Trabajos Prácticos',
                href: 'https://subprogramadisenoacademicouna826543778.wordpress.com/trabajos-practicos/',
            },
            {
                label: 'Sustitutivos (TSP)',
                href: 'https://subprogramadisenoacademicouna826543778.wordpress.com/trabajos-sustitutivos-de-pruebas/',
            },
            {
                label: 'Planes de Cursos',
                href: 'https://subprogramadisenoacademicouna826543778.wordpress.com/acerca-de/',
            },
        ],
    },
    {
        label: 'Unidades',
        items: [
            { label: 'U. Administrativa', href: '/docs/unidad-administrativa.pdf' },
            { label: 'U. Académica', href: '/docs/unidad-academica.pdf' },
            { label: 'U. Logística y Evaluación', href: '/docs/unidad-logistica.pdf' },
            { label: 'U. Registro y Control', href: '/docs/unidad-control.pdf' },
            { label: 'U. de Computación', href: '/docs/unidad-computacion.pdf' },
        ],
    },
]

// ============================================================
// Sub-componente: Dropdown de escritorio
// ============================================================
function DesktopDropdown({ group }: { group: DropdownGroup }) {
    return (
        <div className="group relative py-2">
            <button
                type="button"
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-600 transition hover:text-una-navy"
            >
                {group.label}
                <ChevronDown className="h-3 w-3 transition group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-0 top-full z-50 w-60 rounded-md border border-slate-100 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                {group.items.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-600 transition hover:bg-slate-50 hover:text-una-navy"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    )
}

// ============================================================
// Componente principal
// ============================================================
export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMobileOpen(false)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            {/* ============================================================
          Top bar azul
          ============================================================ */}
            <div className="hidden h-10 bg-una-navy-dark text-xs text-white md:block">
                <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <span className="font-medium text-white/80">
                        Universidad Nacional Abierta · Centro Local Delta Amacuro
                    </span>

                    <div className="flex items-center gap-5">
                        <a
                            href={contacto.telefonoHref}
                            className="flex items-center gap-2 text-white/80 transition hover:text-una-accent"
                        >
                            <Phone className="h-3.5 w-3.5" />
                            <span>{contacto.telefono}</span>
                        </a>
                        <a
                            href={`mailto:${contacto.email}`}
                            className="flex items-center gap-2 text-white/80 transition hover:text-una-accent"
                        >
                            <Mail className="h-3.5 w-3.5" />
                            <span>{contacto.email}</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* ============================================================
          Header principal
          ============================================================ */}
            <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
                    {/* Logo + texto */}
                    <a href="#inicio" className="flex items-center gap-3">
                        <img
                            src="/images/logo-una.png"
                            alt="Logo UNA"
                            className="h-12 w-auto object-contain"
                        />
                        <div className="leading-tight">
                            <p className="text-base font-bold uppercase tracking-tight text-una-navy md:text-lg">
                                Universidad Nacional Abierta
                            </p>
                            <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-una-navy md:text-xs">
                                Centro Local Delta Amacuro
                            </span>
                        </div>
                    </a>

                    {/* Navegación desktop */}
                    <nav
                        aria-label="Navegación principal"
                        className="hidden items-center justify-center gap-5 lg:flex"
                    >
                        {rutas.map((r) => (
                            <a
                                key={r.to}
                                href={r.to}
                                className="py-2 text-xs font-bold uppercase tracking-wider text-slate-600 transition-colors hover:text-una-navy"
                            >
                                {r.label}
                            </a>
                        ))}

                        {dropdowns.map((group) => (
                            <DesktopDropdown key={group.label} group={group} />
                        ))}
                    </nav>

                    {/* Botón hamburguesa móvil */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={mobileOpen}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-una-navy transition hover:bg-slate-100 lg:hidden"
                    >
                        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* ============================================================
            Menú móvil
            ============================================================ */}
                {mobileOpen && (
                    <div className="border-t border-slate-200 bg-white lg:hidden">
                        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
                            {/* Rutas principales */}
                            {rutas.map((r) => (
                                <li key={r.to} className="border-b border-slate-100 last:border-b-0">
                                    <a
                                        href={r.to}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-3 text-xs font-bold uppercase tracking-wider text-slate-700 transition hover:text-una-navy"
                                    >
                                        {r.label}
                                    </a>
                                </li>
                            ))}

                            {/* Dropdowns como acordeones */}
                            {dropdowns.map((group) => {
                                const isOpen = openMobileGroup === group.label
                                return (
                                    <li
                                        key={group.label}
                                        className="border-b border-slate-100 last:border-b-0"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenMobileGroup(isOpen ? null : group.label)
                                            }
                                            aria-expanded={isOpen}
                                            className="flex w-full items-center justify-between py-3 text-xs font-bold uppercase tracking-wider text-slate-700 transition hover:text-una-navy"
                                        >
                                            {group.label}
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>

                                        {isOpen && (
                                            <ul className="pb-2 pl-3">
                                                {group.items.map((item) => (
                                                    <li key={item.label}>
                                                        <a
                                                            href={item.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={() => setMobileOpen(false)}
                                                            className="block py-2 text-sm text-slate-600 transition hover:text-una-navy"
                                                        >
                                                            {item.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                )
                            })}

                            {/* Contacto en móvil */}
                            <li className="mt-2 border-t border-slate-200 pt-4">
                                <div className="flex flex-col gap-3">
                                    <a
                                        href={contacto.telefonoHref}
                                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-una-navy"
                                    >
                                        <Phone className="h-4 w-4" />
                                        <span>{contacto.telefono}</span>
                                    </a>
                                    <a
                                        href={`mailto:${contacto.email}`}
                                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-una-navy"
                                    >
                                        <Mail className="h-4 w-4" />
                                        <span className="break-all">{contacto.email}</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </header>
        </>
    )
}