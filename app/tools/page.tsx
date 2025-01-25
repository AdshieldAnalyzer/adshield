import { Bot, Mail, Phone, Globe, FileText, AppWindow } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ToolsPage() {
  const tools = [
    {
      icon: Bot,
      title: "AI Text Message Checker",
      description: "Analyze text messages for potential scams using advanced AI",
      color: "rgb(0,122,255)",
      href: "/tools/text-checker",
    },
    {
      icon: FileText,
      title: "AI Image Analysis",
      description: "Upload and analyze images for scam detection using AI",
      color: "rgb(175,82,222)",
      href: "/tools/image-checker",
    },
    {
      icon: Mail,
      title: "AI Email Checker",
      description: "Verify if an email address is potentially associated with scams",
      color: "rgb(255,159,10)",
      href: "/tools/email-checker",
    },
    {
      icon: Globe,
      title: "AI Website Checker",
      description: "Check if a website is legitimate or potentially fraudulent using AI",
      color: "rgb(48,209,88)",
      href: "/tools/website-checker",
    },
    {
      icon: Phone,
      title: "AI Phone Number Checker",
      description: "Verify if a phone number is potentially associated with scams",
      color: "rgb(255,69,58)",
      href: "/tools/phone-checker",
    },
    {
      icon: AppWindow,
      title: "AI App Checker",
      description: "Check if an app has been reported as malicious using AI",
      color: "rgb(94,92,230)",
      href: "/tools/app-checker",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-white mb-8">AI Scam Detection Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <Link key={index} href={tool.href}>
            <Card className="bg-[rgb(25,25,25)] hover:bg-[rgb(35,35,35)] transition-colors cursor-pointer border-[rgb(45,45,45)]">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: tool.color }}
                  >
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{tool.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[rgb(150,150,150)]">{tool.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

