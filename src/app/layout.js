import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/ui/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "YZN | Agencia Creativa Digital",
  description:
    "Producción audiovisual, diseño, branding y contenido digital para marcas que quieren destacar.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><PageTransition>{children}</PageTransition></body>
    </html>
  );
}
