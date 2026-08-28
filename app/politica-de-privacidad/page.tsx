import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Política de Privacidad | O M Catering",
    description: "Política de privacidad de O M Catering.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-slate-50 px-4 py-16 text-slate-800 sm:px-6 lg:px-8">
            <article className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-lg shadow-emerald-900/10 sm:p-10">
                <Link href="/" className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
                    Volver a O M Catering
                </Link>
                <h1 className="mt-6 font-serif text-3xl text-emerald-950 sm:text-4xl">Política de Privacidad</h1>
                <p className="mt-6 leading-7">
                    En O M Catering respetamos la privacidad de las personas que visitan nuestro sitio web y se ponen en contacto con nosotros.
                </p>
                <h2 className="mt-8 text-xl font-semibold text-emerald-900">Información de contacto</h2>
                <p className="mt-3 leading-7">
                    Los datos que envías mediante el formulario de contacto se utilizan únicamente para responder a tu solicitud y preparar una propuesta de servicio.
                </p>
                <h2 className="mt-8 text-xl font-semibold text-emerald-900">Uso responsable</h2>
                <p className="mt-3 leading-7">
                    No vendemos ni compartimos tus datos personales con terceros, salvo cuando sea necesario para atender tu solicitud o cumplir una obligación legal.
                </p>
                <p className="mt-8 text-sm text-slate-500">Última actualización: 2026</p>
            </article>
        </main>
    );
}
