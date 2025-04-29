import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rotar Matriz NxN 90° - Visualiza y comprende la rotación de matrices",
  description: "Herramienta interactiva para rotar matrices cuadradas NxN 90 grados. Ingresa tu matriz, visualiza el resultado como tabla y comprende fácilmente cómo se transforma. Ideal para estudiantes, docentes y entusiastas de las matemáticas y programación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
