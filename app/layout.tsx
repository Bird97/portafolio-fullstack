import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Juan Camilo Pájaro Reyes - Desarrollador Fullstack",
  description:
    "Portafolio profesional de Juan Camilo Pájaro Reyes, desarrollador fullstack especializado en crear sitios web funcionales y elegantes.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/paloma.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/paloma.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/paloma.jpg",
        type: "image/jpg",
      },
    ],
    apple: "/paloma.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
