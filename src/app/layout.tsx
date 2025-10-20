import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRS – Gestión de Recursos Sustentables | Consultoría en Calidad, Ambiente y Seguridad",
  description: "Consultoría especializada en la transformación de sistemas de gestión, en plataformas sostenibles, capaces de generar la mejora continua en todos los niveles de la organización.",
  keywords: "gestión sustentable, consultoría ambiental, ISO 9001, ISO 14001, ISO 45001, auditorías, sostenibilidad",
  authors: [{ name: "GRS - Gestión de Recursos Sustentables" }],
  robots: "index, follow",
  openGraph: {
    title: "GRS – Gestión de Recursos Sustentables",
    description: "Consultoría especializada en la transformación de sistemas de gestión sostenibles",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-century antialiased bg-white text-grs-gray">
        {children}
      </body>
    </html>
  );
}
