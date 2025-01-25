import { Bot, Mail, Phone, Globe, FileText, AppWindow } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AIChatbot } from "@/components/ai-chatbot"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Scam Detection Tools (Powered by AI)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/tools/text-checker">
            <Card className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white text-center">AI Text Message Checker</h3>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/image-checker">
            <Card className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white text-center">AI Image Analysis</h3>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/email-checker">
            <Card className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white text-center">AI Email Checker</h3>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/website-checker">
            <Card className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white text-center">AI Website Checker</h3>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/phone-checker">
            <Card className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white text-center">AI Phone Number Checker</h3>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/app-checker">
            <Card className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center">
                  <AppWindow className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white text-center">AI App Checker</h3>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <AIChatbot />
    </div>
  )
}

