import Image from "next/image";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Reveal } from "./components/Reveal";
import { SectionTitle } from "./components/SectionTitle";

const benefits = [
  {
    title: "Calidad nutricional",
    description: "Menús balanceados y personalizados por tipo de operación, perfil ocupacional y objetivos de bienestar.",
  },
  {
    title: "Cobertura multisitio",
    description: "Operamos en 7 localidades con procesos estandarizados para asegurar consistencia y tiempos de entrega.",
  },
  {
    title: "Escalabilidad operativa",
    description: "Experiencia atendiendo grandes volúmenes diarios sin perder enfoque en inocuidad y servicio humano.",
  },
];

const stats = [
  { value: "+2800", label: "Comensales atendidos" },
  { value: "7", label: "Localidades activas" },
  { value: "99%", label: "Entregas puntuales" },
  { value: "24/7", label: "Seguimiento operativo" },
];

const services = [
  "Catering empresarial para desayunos y almuerzos.",
  "Alimentación para plantaciones, obras e industrias.",
  "Distribución de alimentos desde centro logístico propio.",
  "Adaptación total a turnos, capacidad y cultura de cada cliente.",
];

const qualityItems = [
  "Protocolos de higiene con trazabilidad por lote.",
  "Control nutricional con fichas técnicas y porciones estándar.",
  "Cumplimiento riguroso de normas sanitarias y auditorías internas.",
  "Supervisión médica y ocupacional para proteger a cada comensal.",
];

const gallery = [
  { src: "/comida1.jpeg", alt: "Ceviche de camarón preparado por OM Catering", title: "Alimentos" },
  { src: "/preparacion.jpeg", alt: "Equipo de cocina preparando alimentos", title: "Cocina" },
  { src: "/equipoCamion.jpeg", alt: "Camión de distribución OM Catering con equipo logístico", title: "Distribución" },
  { src: "/Equipo.jpeg", alt: "Equipo de trabajo de OM Catering en capacitación", title: "Equipo" },
  { src: "/comida2.jpeg", alt: "Mesa de buffet con frutas y bocaditos OM Catering", title: "Buffet" },
  { src: "/bodega.jpeg", alt: "Bodega de almacenamiento refrigerado", title: "Bodega" },
];

const desktopSectionShell =
  "mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 pb-24 text-slate-900 sm:pb-28 lg:pb-32">
        <section id="inicio" className="hero-bg relative overflow-hidden pt-24">
          <div className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <div className="relative mb-7 ml-2 w-fit sm:ml-6">
                <span className="absolute -left- -top-2 h-12 w-12 rounded-full bg-amber-300/35 blur-xl" />
                <span className="absolute -bottom-2 -right-2 h-14 w-14 rounded-full bg-emerald-200/30 blur-xl" />
                <div className="relative rounded-full bg-gradient-to-br from-amber-300 via-amber-200 to-white p-[3px] shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
                  <div className="rounded-full bg-emerald-950/35 p-2 backdrop-blur">
                    <Image
                      src="/logo.jpeg"
                      alt="Identidad visual de O M Catering"
                      width={300}
                      height={300}
                      className="h-30 w-30 rounded-full object-cover sm:h-38 sm:w-39"
                    />
                  </div>
                </div>
              </div>
              <p className="inline-flex rounded-full bg-white/85 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-900">
                Catering empresarial
              </p>
              <h1 className="mt-6 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Alimentamos a tu equipo con calidad y compromiso
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-emerald-50 sm:text-lg">
                Soluciones de alimentación corporativa para organizaciones que necesitan escala, orden y confianza en cada servicio.
              </p>
              <p className="font-script mt-4 text-3xl leading-none text-amber-200 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] sm:text-4xl">
                Mi sazón, mi pasión
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-amber-300"
                >
                  Solicitar propuesta
                </a>
                <a
                  href="#servicios"
                  className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Ver servicios
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Beneficios clave</p>
              <ul className="mt-5 space-y-4">
                {benefits.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-emerald-50">{item.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-emerald-900/10 bg-white py-8">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
            {stats.map((item, index) => (
              <Reveal key={item.label} delay={index * 80} className="rounded-2xl bg-emerald-50 p-4 text-center">
                <p className="text-2xl font-bold text-emerald-900 sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-sm text-slate-600">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="quienes-somos" className="bg-white">
          <div className={desktopSectionShell}>
            <div className="w-full">
              <Reveal>
                  <SectionTitle
                  eyebrow="Quiénes somos"
                  title="De emprendimiento local a aliado estratégico de alimentación masiva"
                  description="Nacimos atendiendo operaciones pequeñas y hoy somos una empresa consolidada, enfocada en mejorar el bienestar de miles de colaboradores a través de una alimentación segura, rica y eficiente."
                />
              </Reveal>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <Reveal className="space-y-6 rounded-3xl bg-white p-6 shadow-lg shadow-emerald-900/10 sm:p-8">
              <div>
                <h3 className="text-lg font-semibold text-emerald-900">Misión</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Proveer alimentación empresarial confiable y nutritiva, elevando la experiencia diaria de cada comensal.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-900">Visión</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Ser la empresa referente en catering corporativo de alto volumen por calidad alimentaria e innovación operacional.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-900">Valores</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Calidad",
                    "Higiene",
                    "Responsabilidad",
                    "Puntualidad",
                  ].map((value) => (
                    <span key={value} className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="overflow-hidden rounded-3xl">
              <Image
                src="/colage.jpeg"
                alt="Collage de operaciones OM Catering: equipo, cocina, distribución y alimentos"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
            </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="border-y border-emerald-900/10 bg-white">
          <div className={desktopSectionShell}>
            <div className="w-full">
              <Reveal>
                <SectionTitle
                  eyebrow="Servicios"
                  title="Alimentación empresarial diseñada para cada operación"
                  description="Estructuramos cada contrato con enfoque en productividad, seguridad alimentaria y continuidad del servicio."
                />
              </Reveal>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {services.map((service, index) => (
                  <Reveal
                    key={service}
                    delay={index * 80}
                    className="group rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-emerald-50 to-amber-50 p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10"
                  >
                    <p className="text-base leading-7 text-slate-700">{service}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="calidad" className="bg-emerald-950 text-white">
          <div className={desktopSectionShell}>
            <div className="w-full">
              <Reveal>
                <SectionTitle
                  eyebrow="Calidad y seguridad alimentaria"
                  title="Procesos robustos para proteger tu operación y a tu gente"
                  description="Nuestra cadena de preparación y distribución mantiene estándares sanitarios y nutricionales en cada entrega."
                  tone="light"
                />
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {qualityItems.map((item, index) => (
                  <Reveal key={item} delay={index * 80} className="rounded-2xl border border-white/15 bg-white/8 p-5">
                    <p className="text-sm leading-7 text-emerald-50">{item}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="bg-slate-50">
          <div className={desktopSectionShell}>
            <div className="w-full">
              <Reveal>
                <SectionTitle
                  eyebrow="Galería"
                  title="Infraestructura, cocina y distribución en acción"
                  description="Una vista general de nuestras operaciones diarias para garantizar calidad en cada plato entregado."
                />
              </Reveal>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((item, index) => (
                  <Reveal key={item.src} delay={index * 90} className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-emerald-900/10">
                    <Image src={item.src} alt={item.alt} width={800} height={540} className="h-56 w-full object-cover sm:h-64" />
                    <div className="p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{item.title}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-gradient-to-b from-amber-50 to-white">
          <div className={desktopSectionShell}>
            <div className="grid w-full gap-8 lg:grid-cols-[1fr_1.1fr]">
              <Reveal>
                <SectionTitle
                  eyebrow="Contacto"
                  title="Conversemos sobre tu operación"
                  description="Cuéntanos la cantidad de personal, turnos y ubicaciones. Te preparamos una propuesta alineada a tus objetivos de servicio."
                />

                <div className="mt-8 space-y-3 rounded-3xl bg-white p-6 shadow-lg shadow-emerald-900/10">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-emerald-900">Teléfono:</span>{" "}
                    <a href="tel:+593981942383" className="transition hover:text-emerald-700">593 98 194 2383</a>
                  </p>
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-emerald-900">WhatsApp:</span>{" "}
                    <a
                      href="https://wa.me/593981942383"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-700 font-medium transition hover:text-emerald-900"
                    >
                      Chatea con nosotros
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.3-.7-1.5-.8s-.4-.1-.6.1-.6.8-.7 1-.3.2-.6 0a6.7 6.7 0 0 1-2-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.3 0-.4.1-.6l.4-.5.2-.4c.1-.1 0-.3 0-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2c0 1.3 1 2.6 1 2.8.2.2 2 3.2 4.9 4.3.7.3 1.3.5 1.8.6.8.2 1.5.1 2.1.1.7-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.2-.5-.3Z" />
                      </svg>
                    </a>
                  </p>
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-emerald-900">Correo:</span>{" "}
                    <a href="mailto:olguer.merino@omcatering.com.ec" className="transition hover:text-emerald-700">olguer.merino@omcatering.com.ec</a>
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="ubicacion" className="bg-white">
          <div className={desktopSectionShell}>
            <div className="grid gap-6 md:gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
              <Reveal>
                <div className="space-y-4 rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-lg shadow-emerald-900/10 sm:p-7 lg:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Ubicación</p>
                  <h2 className="font-serif text-2xl leading-tight text-emerald-950 sm:text-3xl lg:text-4xl">
                    Dónde nos puedes encontrar
                  </h2>
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    Con cobertura logística en la zona, podemos atender distribución y servicio con tiempos eficientes y seguimiento continuo.
                  </p>
                  <div className="grid gap-3 pt-2 text-sm text-slate-700">
                    <p><span className="font-semibold text-emerald-900">Zona:</span> Guayllabamba, Simón Bolívar</p>
                    <p><span className="font-semibold text-emerald-900">Disponibilidad:</span> Atención para operaciones empresariales e industriales</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/wQ6jd89hpMvmBX798"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 sm:w-fit"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </Reveal>

              <Reveal delay={120} className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-2xl shadow-emerald-950/10 sm:rounded-[2rem]">
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                  <iframe
                    title="Ubicación de OM Catering"
                    src="https://www.google.com/maps?q=-0.0828178,-78.3137559&z=17&hl=es&output=embed"
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
