import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewsPage() {
  const news = [
    {
      title: "New Cryptocurrency Scam Alert",
      date: "January 24, 2025",
      category: "Crypto Scams",
      content: "A new wave of cryptocurrency scams has been detected targeting users through social media platforms...",
    },
    {
      title: "Rising Cases of AI-Generated Voice Scams",
      date: "January 23, 2025",
      category: "Voice Scams",
      content: "Security researchers have identified an increase in scams using AI-generated voice cloning...",
    },
    {
      title: "Major Phishing Campaign Targets Banking Customers",
      date: "January 22, 2025",
      category: "Phishing",
      content: "A sophisticated phishing campaign impersonating major banks has been detected...",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Cyber Scam News</h1>
      <div className="space-y-6">
        {news.map((item, index) => (
          <Card key={index} className="bg-[rgb(25,25,25)] border-[rgb(45,45,45)]">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">{item.title}</CardTitle>
                <span className="text-[rgb(150,150,150)] text-sm">{item.date}</span>
              </div>
              <span className="inline-block px-2 py-1 rounded-full text-sm bg-[rgb(0,122,255)] text-white">
                {item.category}
              </span>
            </CardHeader>
            <CardContent>
              <p className="text-[rgb(200,200,200)]">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

