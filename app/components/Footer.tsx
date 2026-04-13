import Image from "next/image";

const socialLinks = [
    {
        name: "Facebook",
        href: "https://facebook.com/tu-pagina",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.2-1.6 1.5-1.6H16V4.8c-.5-.1-1.3-.2-2.4-.2-2.3 0-3.8 1.4-3.8 3.9V11H7.5v3h2.3v7h3.7Z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://instagram.com/tu-perfil",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm8.2 2H8A4 4 0 0 0 4 8v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm-4 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm4.9-3.1a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
            </svg>
        ),
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/573000000000",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.3-.7-1.5-.8s-.4-.1-.6.1-.6.8-.7 1-.3.2-.6 0a6.7 6.7 0 0 1-2-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.3 0-.4.1-.6l.4-.5.2-.4c.1-.1 0-.3 0-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2c0 1.3 1 2.6 1 2.8.2.2 2 3.2 4.9 4.3.7.3 1.3.5 1.8.6.8.2 1.5.1 2.1.1.7-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.2-.5-.3Z" />
            </svg>
        ),
    },
];

export function Footer() {
    return (
        <>
            <footer className="border-t border-emerald-900/10 bg-emerald-950 py-8 text-white">
                <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[300px_1fr] lg:gap-12 lg:px-8">
                    <div className="flex justify-center lg:justify-start">
                        <Image
                            src="/logoFonAm.jpeg"
                            alt="Logo de O M Catering"
                            width={360}
                            height={360}
                            className="h-40 w-40 rounded-full border border-white/25 object-cover shadow-[0_8px_22px_rgba(0,0,0,0.3)] sm:h-60 sm:w-60"
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <p className="text-xl font-semibold tracking-wide text-white">O M Catering Empresarial</p>
                            <p className="max-w-2xl text-sm leading-7 text-white/75">
                                Soluciones de alimentación masiva con foco en inocuidad, puntualidad y bienestar laboral.
                            </p>
                            <p className="font-script text-3xl leading-none text-amber-200">
                                Mi sazón, mi pasión
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Redes sociales</p>
                                <div className="mt-3 flex items-center gap-3">
                                    {socialLinks.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={item.name}
                                            className="rounded-full border border-white/25 bg-white/10 p-2 text-white transition hover:border-amber-300 hover:text-amber-300"
                                        >
                                            {item.icon}
                                        </a>
                                    ))}
                                </div>
                                <p className="mt-3 text-sm leading-6 text-white/75">Síguenos en nuestras redes sociales y conoce nuestras novedades.</p>
                            </div>

                            <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Contacto</p>
                                <div className="mt-3 space-y-1.5 text-sm leading-6 text-white/80">
                                    <p>Teléfono: +57 300 000 0000</p>
                                    <p>WhatsApp: +57 300 000 0000</p>
                                    <p>Correo: comercial@omcatering.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mx-auto mt-6 max-w-6xl border-t border-white/10 px-4 pt-4 text-xs text-white/55 sm:px-6 lg:px-8">
                    {new Date().getFullYear()} OM Catering Empresarial. Todos los derechos reservados.
                </p>
            </footer>

            <div
                className="fixed inset-x-0 bottom-0 z-50 border-t border-emerald-900/20 bg-white/95 backdrop-blur"
                style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
            >
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-1.5 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        {socialLinks.map((item) => (
                            <a
                                key={`sticky-${item.name}`}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.name}
                                className="rounded-full border border-emerald-700/25 bg-emerald-50 p-2 text-emerald-800 transition hover:border-emerald-700 hover:bg-emerald-100"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                    <a
                        href="#contacto"
                        className="rounded-full bg-emerald-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-800 sm:px-4 sm:text-sm"
                    >
                        Solicitar propuesta
                    </a>
                </div>
            </div>
        </>
    );
}
