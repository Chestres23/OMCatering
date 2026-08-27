"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_i4l1lb9";
const TEMPLATE_ID = "template_4p1jpgb";
const PUBLIC_KEY = "q5Vyl8uCm2uXhZ6j5";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [emailValue, setEmailValue] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!formRef.current) return;

        setStatus("sending");
        setErrorMsg("");

        try {
            // sendForm envía todos los campos del formulario usando sus atributos "name"
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY,
            );
            console.log("EmailJS respuesta:", result.status, result.text);
            setStatus("success");
            formRef.current.reset();
        } catch (error: unknown) {
            // Extraer mensaje legible del error de EmailJS
            let message = "Error desconocido";
            if (error instanceof Error) {
                message = error.message;
            } else if (typeof error === "object" && error !== null && "text" in error) {
                message = (error as { text: string }).text;
            } else if (typeof error === "string") {
                message = error;
            }
            console.error("EmailJS error detallado:", JSON.stringify(error), message);
            setErrorMsg(message);
            setStatus("error");
        }
    }

    const isSending = status === "sending";

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white p-6 shadow-lg shadow-emerald-900/10">
            <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                    Nombre
                    <input
                        required
                        name="nombre"
                        type="text"
                        disabled={isSending}
                        className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none transition focus:border-emerald-600 disabled:opacity-60"
                        placeholder="Tu nombre"
                    />
                </label>

                <label className="text-sm font-medium text-slate-700">
                    Empresa
                    <input
                        required
                        name="empresa"
                        type="text"
                        disabled={isSending}
                        className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none transition focus:border-emerald-600 disabled:opacity-60"
                        placeholder="Nombre de la empresa"
                    />
                </label>
            </div>

            <label className="block text-sm font-medium text-slate-700">
                Correo
                <input
                    required
                    name="correo electrónico"
                    type="email"
                    disabled={isSending}
                    onChange={(e) => setEmailValue(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none transition focus:border-emerald-600 disabled:opacity-60"
                    placeholder="correo@empresa.com"
                />
            </label>

            {/* Campo oculto para el "Reply to" del template que usa {{email}} */}
            <input type="hidden" name="email" value={emailValue} />

            <label className="block text-sm font-medium text-slate-700">
                Mensaje
                <textarea
                    required
                    name="mensaje"
                    rows={4}
                    disabled={isSending}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 outline-none transition focus:border-emerald-600 disabled:opacity-60"
                    placeholder="Cuántos colaboradores atienden y en qué ubicaciones."
                />
            </label>

            <button
                type="submit"
                disabled={isSending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 disabled:opacity-60"
            >
                {isSending ? (
                    <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando…
                    </>
                ) : (
                    "Enviar solicitud"
                )}
            </button>

            {status === "success" && (
                <p className="text-sm font-medium text-emerald-700">
                    ✅ Gracias. Recibimos tu solicitud y te contactaremos pronto.
                </p>
            )}

            {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                    ❌ Error: {errorMsg || "Intenta de nuevo o contáctanos por WhatsApp."}
                </p>
            )}
        </form>
    );
}
