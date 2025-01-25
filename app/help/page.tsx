import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Help() {
  return (
    <div className="container mx-auto py-8">
      <Card className="bg-[rgb(25,25,25)] border-[rgb(45,45,45)]">
        <CardHeader>
          <CardTitle className="text-white">About AdShield</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-[rgb(200,200,200)]">
            <p>
              AdShield is an AI-powered platform designed to protect users from various types of cyber scams. Our suite
              of tools helps identify potential threats, educate users about online safety, and provide a
              community-driven approach to combating scams.
            </p>
            <h3 className="text-lg font-medium text-white">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>AI-powered scam detection tools for text, images, emails, websites, phone numbers, and apps</li>
              <li>Community-driven scam reporting and question-asking system</li>
              <li>Educational resources and polls to increase awareness about cyber scams</li>
              <li>Gamification through cybersecurity badges to encourage active participation</li>
            </ul>
            <p>
              If you need further assistance or have any questions about using AdShield, please don't hesitate to
              contact our support team at support@adshield.com.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

