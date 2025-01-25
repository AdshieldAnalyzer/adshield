import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AskQuestion() {
  return (
    <div className="container mx-auto py-8">
      <Card className="bg-[rgb(25,25,25)] border-[rgb(45,45,45)]">
        <CardHeader>
          <CardTitle className="text-white">Ask a Question</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-white">
                Your Question
              </label>
              <Input
                id="question"
                className="mt-1 bg-[rgb(35,35,35)] text-white"
                placeholder="Enter your question about cyber scams"
              />
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-white">
                Additional Details
              </label>
              <Textarea
                id="details"
                className="mt-1 bg-[rgb(35,35,35)] text-white"
                placeholder="Provide any additional context"
              />
            </div>
            <Button type="submit" className="w-full bg-[rgb(0,122,255)] hover:bg-[rgb(0,100,210)]">
              Submit Question
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

