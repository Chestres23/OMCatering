import type { Metadata } from "next";
import { Dancing_Script, Manrope, Merriweather } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.omcatering.com"),
  title: "O M Catering Empresarial",
  description:
    "Servicio de catering empresarial para operaciones de alto volumen con enfoque en calidad, higiene y puntualidad.",
  keywords: [
    "catering empresarial",
    "alimentación industrial",
    "alimentación corporativa",
    "catering para empresas",
  ],
  openGraph: {
    title: "O M Catering Empresarial",
    description:
      "Atendemos más de 2800 comensales con procesos robustos de calidad y seguridad alimentaria.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OM Catering Empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OM Catering Empresarial",
    description:
      "Alimentación masiva empresarial con calidad, higiene y eficiencia operativa.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logoFonAm.jpeg",
    shortcut: "/logoFonAm.jpeg",
    apple: "/logoFonAm.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${merriweather.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
