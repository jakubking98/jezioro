import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@/styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const siteUrl = "https://www.jeziorosfera.pl";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Jeziorosfera - Wynajem Stodoły nad Jeziorem na Mazurach",
    template: "%s | Jeziorosfera",
  },

  description:
    "Odkryj Jeziorosferę - wyjątkową stodołę do wynajęcia nad jeziorem na Mazurach. Idealne miejsce na relaks, wypoczynek w otoczeniu natury. Sprawdź naszą ofertę noclegów.",

  keywords: [
    "Jeziorosfera",
    "stodoła na wynajem",
    "noclegi Mazury",
    "dom nad jeziorem",
    "wypoczynek na Mazurach",
    "agroturystyka Mazury",
    "Brejdyny noclegi",
    "wynajem domu Mazury",
    "wakacje na Mazurach",
    "spokojny wypoczynek",
  ],

  openGraph: {
    title: "Jeziorosfera - Wynajem Stodoły nad Jeziorem na Mazurach",
    description:
      "Odkryj Jeziorosferę - wyjątkową stodołę do wynajęcia nad jeziorem na Mazurach. Idealne miejsce na relaks i wypoczynek w otoczeniu natury.",
    url: siteUrl, // Główny adres strony
    siteName: "Jeziorosfera",
    images: [
      {
        url: "/og-image.jpg", // <--- ZMIEŃ NA ŚCIEŻKĘ DO TWOJEGO OBRAZKA
        width: 1200,
        height: 630,
        alt: "Jeziorosfera - Stodoła nad jeziorem na Mazurach",
      },
    ],
    locale: "pl_PL", // Język i region
    type: "website", // Typ strony
  },

  icons: {
    icon: "/favicon.png", // Standardowy favicon
    shortcut: "/favicon.png", // Ikona skrótu
    apple: "/favicon.png", // Ikona dla urządzeń Apple
  },

  alternates: {
    canonical: "/",
    // Dla innych języków (jeśli istnieją):
    // languages: {
    //   'en-US': '/en-US',
    // },
  },

  authors: [{ name: "Jeziorosfera", url: siteUrl }],
  publisher: "Jeziorosfera",

  verification: {
    google: "MfOAooGVSvZhVXvrYD_t_7-wjSUg8PTrYc8_t208mrE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${sora.variable} scroll-smooth`}>
      <body className={`font-sora bg-BodyC text-TextN`}>{children}</body>
    </html>
  );
}
