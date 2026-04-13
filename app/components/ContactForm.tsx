"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "success";

export function ContactForm() {
    const [status, setStatus] = useState<FormStatus>("idle");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        // Reemplaza este flujo local por un POST a tu API cuando el backend esté listo.
        console.log("Cotización solicitada", Object.fromEntries(formData.entries()));

        setStatus("success");
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white p-6 shadow-lg shadow-emerald-900/10">
            <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                    Nombre
                    <input
                        required
                        name="nombre"
                        type="text"
                        className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none transition focus:border-emerald-600"
                        placeholder="Tu nombre"
                    />
                </label>

                <label className="text-sm font-medium text-slate-700">
                    Empresa
                    <input
                        required
                        name="empresa"
                        type="text"
                        className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none transition focus:border-emerald-600"
                        placeholder="Nombre de la empresa"
                    />
                </label>
            </div>

            <label className="block text-sm font-medium text-slate-700">
                Correo
                <input
                    required
                    name="correo"
                    type="email"
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none transition focus:border-emerald-600"
                    placeholder="correo@empresa.com"
                />
            </label>

            <label className="block text-sm font-medium text-slate-700">
                Mensaje
                <textarea
                    required
                    name="mensaje"
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none transition focus:border-emerald-600"
                    placeholder="Cuántos colaboradores atienden y en qué ubicaciones."
                />
            </label>

            <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
                Enviar solicitud
            </button>

            {status === "success" ? (
                <p className="text-sm font-medium text-emerald-700">
                    Gracias. Recibimos tu solicitud y te contactaremos pronto.
                </p>
            ) : null}
        </form>
    );
}
