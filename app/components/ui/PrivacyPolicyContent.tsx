"use client";

import Link from "next/link";

export function PrivacyPolicyContent({ onClose }: { onClose?: () => void }) {
    return (
        <div className="bg-[#f5f7f1] text-slate-800">
            <section className="relative overflow-hidden bg-emerald-950 px-4 pb-20 pt-8 text-white sm:px-6 sm:pb-24 lg:px-8">
                <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full border-[32px] border-amber-300/15" aria-hidden="true" />
                <div className="absolute -bottom-40 left-[-5rem] h-80 w-80 rounded-full border-[42px] border-white/5" aria-hidden="true" />
                <div className="relative mx-auto max-w-5xl">
                    <div className="flex items-center justify-between gap-4">
                        <Link href="/" onClick={onClose ? (event) => { event.preventDefault(); onClose(); } : undefined} className="inline-flex items-center text-white transition hover:text-amber-300">
                            <span className="font-script text-xl font-semibold italic leading-none tracking-wide sm:text-[1.7rem]">
                                O M Catering
                            </span>
                        </Link>
                        {onClose ? (
                            <button type="button" onClick={onClose} className="rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">Cerrar ✕</button>
                        ) : (
                        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-300 hover:bg-white/10 hover:text-amber-300">
                            <span aria-hidden="true">←</span>
                            Regresar
                        </Link>
                        )}
                    </div>
                    <div className="mt-16 max-w-2xl">
                        <p className="font-script text-3xl text-amber-300">Cuidamos lo que importa</p>
                        <h1 id="privacy-title" className="mt-3 font-serif text-4xl leading-tight sm:text-6xl">Política de Privacidad</h1>
                        <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
                            La confianza también es parte de nuestro servicio. Aquí te contamos cómo protegemos la información que compartes con nosotros.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative mx-auto -mt-10 max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
                <article className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-[0_24px_60px_-30px_rgba(6,78,59,0.45)]">
                    <div className="grid gap-8 border-b border-emerald-900/10 bg-[#fbfcf8] p-6 sm:p-10 lg:grid-cols-[190px_1fr] lg:p-12">
                        <aside className="h-fit rounded-2xl bg-emerald-950 p-5 text-white">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">En esta página</p>
                            <nav className="mt-4 space-y-3 text-sm text-white/80">
                                <a className="block transition hover:text-amber-300" href="#privacidad-introduccion">Introducción</a>
                                <a className="block transition hover:text-amber-300" href="#privacidad-contacto">Información de contacto</a>
                                <a className="block transition hover:text-amber-300" href="#privacidad-uso-responsable">Uso responsable</a>
                            </nav>
                        </aside>

                        <div className="max-w-2xl">
                            <div id="privacidad-introduccion" className="scroll-mt-8">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Nuestro compromiso</p>
                                <p className="mt-4 text-lg leading-8 text-slate-700">
                                    En O M Catering respetamos la privacidad de las personas que visitan nuestro sitio web y se ponen en contacto con nosotros.
                                </p>
                            </div>

                            <div id="privacidad-contacto" className="mt-10 scroll-mt-8 border-t border-emerald-900/10 pt-8">
                                <div className="flex items-start gap-4">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-lg text-amber-700" aria-hidden="true">✦</span>
                                    <div>
                                        <h2 className="font-serif text-2xl text-emerald-950">Información de contacto</h2>
                                        <p className="mt-3 leading-7 text-slate-600">
                                            Los datos que envías mediante el formulario de contacto se utilizan únicamente para responder a tu solicitud y preparar una propuesta de servicio.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div id="privacidad-uso-responsable" className="mt-10 scroll-mt-8 border-t border-emerald-900/10 pt-8">
                                <div className="flex items-start gap-4">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg text-emerald-700" aria-hidden="true">✓</span>
                                    <div>
                                        <h2 className="font-serif text-2xl text-emerald-950">Uso responsable</h2>
                                        <p className="mt-3 leading-7 text-slate-600">
                                            No vendemos ni compartimos tus datos personales con terceros, salvo cuando sea necesario para atender tu solicitud o cumplir una obligación legal.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 border-t border-emerald-900/10 pt-6 text-sm text-slate-500">
                                Última actualización: 2026
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-between gap-4 bg-emerald-950 px-6 py-7 text-white sm:flex-row sm:items-center sm:px-10">
                        <div>
                            <p className="font-serif text-xl">¿Tienes alguna pregunta?</p>
                            <p className="mt-1 text-sm text-white/70">Estamos listos para atenderte.</p>
                        </div>
                        <Link onClick={onClose} href="/#contacto" className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-amber-300">
                            Ir a contacto
                        </Link>
                    </div>
                </article>

                <div className="mt-8 text-center">
                    <Link onClick={onClose ? (event) => { event.preventDefault(); onClose(); } : undefined} href="/" className="text-sm font-semibold text-emerald-800 transition hover:text-emerald-950">
                        ← Volver a la página principal
                    </Link>
                </div>
            </section>
        </div>
    );
}
