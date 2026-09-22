"use client";

import type { MouseEvent } from "react";

const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#quienes-somos", label: "Quiénes somos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#calidad", label: "Calidad" },
    { href: "#galeria", label: "Galería" },
    { href: "#contacto", label: "Contacto" },
    { href: "#ubicacion", label: "Ubicación" },
];

export function Navbar() {
    function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
        if (!href.startsWith("#")) {
            return;
        }

        event.preventDefault();
        const target = document.querySelector(href);
        if (!(target instanceof HTMLElement)) {
            return;
        }

        const header = document.querySelector("header");
        const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
        const targetRect = target.getBoundingClientRect();
        const absoluteTop = targetRect.top + window.scrollY;
        const availableHeight = window.innerHeight - headerHeight;
        const centeredOffset = Math.max(0, (availableHeight - targetRect.height) / 2);
        const comfortableOffset =
            targetRect.height <= availableHeight
                ? centeredOffset
                : Math.min(availableHeight * 0.18, 120);
        const nextTop =
            href === "#inicio"
                ? 0
                : absoluteTop - headerHeight - comfortableOffset;

        window.scrollTo({
            top: Math.max(0, nextTop),
            behavior: "smooth",
        });
        history.replaceState(null, "", href);

        const details = event.currentTarget.closest("details");
        if (details) {
            details.removeAttribute("open");
        }
    }

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-emerald-950/85 backdrop-blur">
            <nav className="mx-auto max-w-6xl px-4 py-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <a
                        href="#inicio"
                        onClick={(event) => handleAnchorClick(event, "#inicio")}
                        className="flex items-center"
                    >
                        <span className="font-script text-xl font-semibold italic leading-none tracking-wide text-white sm:text-[1.7rem]">
                            O M Catering
                        </span>
                    </a>

                    <ul className="hidden items-center gap-6 text-sm font-medium text-white/90 md:flex">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    className="transition hover:text-amber-300"
                                    href={item.href}
                                    onClick={(event) => handleAnchorClick(event, item.href)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        <a
                            href="#contacto"
                            onClick={(event) => handleAnchorClick(event, "#contacto")}
                            className="rounded-full bg-amber-400 px-3 py-1.5 text-xs font-semibold text-emerald-950 transition hover:bg-amber-300 sm:px-4 sm:text-sm"
                        >
                            Solicitar propuesta
                        </a>

                        <details className="relative md:hidden">
                            <summary className="cursor-pointer list-none rounded-lg border border-white/35 px-3 py-2 text-sm font-semibold text-white">
                                Menú
                            </summary>
                            <div className="absolute right-0 mt-2 w-52 rounded-xl border border-white/20 bg-emerald-950 p-2 shadow-xl">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        className="block rounded-lg px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-amber-300"
                                        href={item.href}
                                        onClick={(event) => handleAnchorClick(event, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </details>
                    </div>
                </div>
            </nav>
        </header>
    );
}
