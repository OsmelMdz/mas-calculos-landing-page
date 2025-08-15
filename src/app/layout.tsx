import type { Metadata, Viewport } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Más Cálculos",
  description:
    "Más Cálculos: la app para cálculos eléctricos rápidos, precisos y confiables. Ideal para profesionales y estudiantes. Disponible en Android y próximamente en iOS.",
  keywords: [
    "calculadoras eléctricas",
    "cálculos eléctricos",
    "app de electricidad",
    "ingeniería eléctrica",
    "NOM-001-SEDE-2012",
    "aplicación de cálculos eléctricos",
    "profesionales eléctricos",
    "estudiantes de ingeniería eléctrica",
  ],
  applicationName: "Más Cálculos",
  authors: [
    { name: "Más Capacitación" },
    { name: "lii-tec", url: "https://www.lii-tec.com" },
    { name: "Osmel Dev", url: "https://osmel-dev.vercel.app" },
  ],
  creator: "Osmel Dev",
  publisher: "Más Capacitación",
  metadataBase: new URL("https://mas-calculos.vercel.app"),
  openGraph: {
    title: "Más Cálculos",
    description:
      "App para cálculos eléctricos rápidos y confiables. Cumple NOM-001-SEDE-2012. Descárgala en Google Play.",
    url: "https://mas-calculos.vercel.app",
    siteName: "Más Cálculos",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "https://mas-calculos.vercel.app/screenshots/login.png",
        width: 1200,
        height: 630,
        alt: "Más Cálculos App - Calculadoras eléctricas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Más Cálculos",
    description:
      "Calculadoras eléctricas rápidas y seguras para profesionales y estudiantes. Cumple NOM-001-SEDE-2012.",
    images: ["https://mas-calculos.vercel.app/screenshots/login.png"],
    creator: "@OsmelMdz",
  },
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://mas-calculos.vercel.app",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
  colorScheme: "light",
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
