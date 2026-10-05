import { MapPin, Mail, Phone, Clock, ArrowUp, ArrowRight } from 'lucide-react'

// ============================================================
// Datos: enlaces internos (anclas)
// ============================================================
const enlacesInternos = [
  { label: 'Inicio', to: '#inicio' },
  { label: 'Nosotros', to: '#nosotros' },
  { label: 'Carreras', to: '#carreras' },
  { label: 'Cartelera', to: '#cartelera' },
  { label: 'Contacto', to: '#contacto' },
]

// ============================================================
// Datos: contacto
// ============================================================
const contacto = {
  direccion: 'Calle Bolívar cruce con calle Los Apamates, Tucupita, Estado Delta Amacuro, Venezuela',
  telefono: '+58 (287) 721-0000',
  telefonoHref: 'tel:+582877210000',
  email: 'atencion.deltaamacuro@una.edu.ve',
  horario: 'Martes · Jueves · Sábado',
  horarioDetalle: '8:00 AM - 12:00 PM',
}

// ============================================================
// Componente principal
// ============================================================
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden bg-una-navy-dark text-slate-300">
      {/* Onda superior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1 left-0 right-0 h-12 overflow-hidden sm:h-16"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute top-0 h-full w-full rotate-180 fill-slate-50"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* Fondo decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-una-accent/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-una-navy/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 sm:pt-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Columna 1: Marca */}
          <div className="lg:col-span-4">
            <a href="#inicio" className="group inline-flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white/10 p-2 backdrop-blur-sm ring-1 ring-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:ring-una-accent/50">
                <img
                  src="/images/logo-una.png"
                  alt="Logotipo de la Universidad Nacional Abierta"
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="leading-tight">
                <p className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                  Universidad Nacional Abierta
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-una-accent">
                  Centro Local Delta Amacuro
                </p>
              </div>
            </a>

            <p className="mt-5 text-sm leading-relaxed text-slate-300 text-pretty">
              Comprometida con la democratización de la educación superior en el
              estado Delta Amacuro. Formando profesionales íntegros, competentes
              y comprometidos con el desarrollo social del país.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-una-accent/30 bg-una-accent/10 px-3.5 py-1.5 text-xs font-semibold text-una-accent backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-una-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-una-accent" />
              </span>
              Tucupita · Delta Amacuro · Venezuela
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <nav aria-label="Navegación del sitio" className="lg:col-span-2">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-white">
              Navegación
            </h3>
            <span className="mt-2 block h-0.5 w-8 rounded-full bg-una-accent" />

            <ul className="mt-5 space-y-3">
              {enlacesInternos.map((e) => (
                <li key={e.label}>
                  <a
                    href={e.to}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-300 hover:text-una-accent"
                  >
                    <span className="h-px w-0 bg-una-accent transition-all duration-300 group-hover:w-3" />
                    {e.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Columna 3: Contacto */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-white">
              Contacto
            </h3>
            <span className="mt-2 block h-0.5 w-8 rounded-full bg-una-accent" />

            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-una-accent ring-1 ring-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="pt-1.5 leading-snug text-slate-300">
                  {contacto.direccion}
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-una-accent ring-1 ring-white/10">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href={`mailto:${contacto.email}`}
                  className="break-all pt-1.5 leading-snug text-slate-300 transition-colors duration-300 hover:text-una-accent"
                >
                  {contacto.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-una-accent ring-1 ring-white/10">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href={contacto.telefonoHref}
                  className="pt-1.5 leading-snug text-slate-300 transition-colors duration-300 hover:text-una-accent"
                >
                  {contacto.telefono}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Horario de atención */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-white">
              Horario de Atención
            </h3>
            <span className="mt-2 block h-0.5 w-8 rounded-full bg-una-accent" />

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-una-accent/15 text-una-accent">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">
                    {contacto.horario}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-300">
                    {contacto.horarioDetalle}
                  </p>
                </div>
              </div>

              <a
                href="#contacto"
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-una-accent px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-una-accent/90 hover:shadow-lg hover:shadow-una-accent/30"
              >
                Ver cómo llegar
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-center text-xs text-slate-400 sm:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-white">
              Universidad Nacional Abierta
            </span>{' '}
            · Centro Local Delta Amacuro. Todos los derechos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-una-accent hover:bg-una-accent hover:text-una-navy-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-una-accent"
          >
            Volver arriba
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}