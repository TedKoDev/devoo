import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import BottomNavigation from "@/components/layout/BottomNavigation"
import Footer from "@/components/layout/Footer"
import { QueryProvider } from "@/lib/providers/query-provider"
import { ToastProvider } from "@/lib/providers/toast-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Devooup Hub - 개발자와 투자자를 위한 종합 정보 플랫폼",
  description: "개발 도구, 투자 정보, 부업 아이디어를 한 곳에서 만나보세요.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <QueryProvider>
          <ToastProvider />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4">{children}</main>
            <Footer />
            <BottomNavigation />
          </div>
        </QueryProvider>
      </body>
    </html>
  )
}
