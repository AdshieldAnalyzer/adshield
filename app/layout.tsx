import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar/sidebar"
import { Header } from "@/components/header"
import { AIChatbot } from "@/components/ai-chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AdShield - AI-Powered Scam Protection",
  description: "Protect yourself from scams with our AI-powered detection tools",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 animate-gradient-x">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 overflow-auto">{children}</main>
          </div>
          <AIChatbot />
        </div>
      </body>
    </html>
  )
}

