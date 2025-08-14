import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Más Cálculos",
  description: "Aplicación para cálculos eléctricos rápidos y precisos. Disponible en Android y próximamente en iOS.",
  keywords: [
    "NOM-001-SEDE-2012",
    "cálculos eléctricos",
    "calculadora eléctrica",
    "aplicación de cálculos",
    "ingeniería eléctrica",
    "estudiantes de ingeniería",
    "profesionales eléctricos",
  ],
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
