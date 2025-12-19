import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { AppProvider } from "@/contexts/app-context"

export const metadata: Metadata = {
  title: "Made with App Studio",
  description: "Buy and sell eBooks, courses, designs, audiobooks, and videos with Pi cryptocurrency",
    generator: 'v1.0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <AppProvider>{children}</AppProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
