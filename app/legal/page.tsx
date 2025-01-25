import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LegalPage() {
  const laws = [
    {
      title: "Computer Fraud and Abuse Act (CFAA)",
      description:
        "Federal law that prohibits accessing a computer without authorization, or in excess of authorization...",
    },
    {
      title: "CAN-SPAM Act",
      description:
        "Establishes requirements for commercial email messages, gives recipients the right to stop receiving them...",
    },
    {
      title: "Identity Theft and Assumption Deterrence Act",
      description:
        "Makes identity theft a federal crime, with penalties for individuals who knowingly transfer or use...",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Cybercrime Laws</h1>
      <div className="space-y-6">
        {laws.map((law, index) => (
          <Card key={index} className="bg-[rgb(25,25,25)] border-[rgb(45,45,45)]">
            <CardHeader>
              <CardTitle className="text-white">{law.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[rgb(200,200,200)]">{law.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Reporting Cybercrime</h2>
        <Card className="bg-[rgb(25,25,25)] border-[rgb(45,45,45)]">
          <CardContent className="p-6">
            <p className="text-[rgb(200,200,200)] mb-4">
              If you've been a victim of cybercrime, report it to the following authorities:
            </p>
            <ul className="list-disc list-inside text-[rgb(200,200,200)] space-y-2">
              <li>Local law enforcement</li>
              <li>FBI's Internet Crime Complaint Center (IC3)</li>
              <li>Federal Trade Commission (FTC)</li>
              <li>Your state's Attorney General's office</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

