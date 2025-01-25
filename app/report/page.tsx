import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ReportScam() {
  return (
    <div className="container mx-auto py-8">
      <Card className="bg-[rgb(25,25,25)] border-[rgb(45,45,45)]">
        <CardHeader>
          <CardTitle className="text-white">Report a Scam</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="scamType" className="block text-sm font-medium text-white">
                Scam Type
              </label>
              <Input
                id="scamType"
                className="mt-1 bg-[rgb(35,35,35)] text-white"
                placeholder="E.g. Phishing, Identity Theft"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-white">
                Description
              </label>
              <Textarea
                id="description"
                className="mt-1 bg-[rgb(35,35,35)] text-white"
                placeholder="Provide details about the scam"
              />
            </div>
            <Button type="submit" className="w-full bg-[rgb(0,122,255)] hover:bg-[rgb(0,100,210)]">
              Submit Report
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

