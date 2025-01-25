import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ShareStory() {
  return (
    <div className="container mx-auto py-8">
      <Card className="bg-[rgb(25,25,25)] border-[rgb(45,45,45)]">
        <CardHeader>
          <CardTitle className="text-white">Share Your Story</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-white">
                Title
              </label>
              <Input id="title" className="mt-1 bg-[rgb(35,35,35)] text-white" placeholder="Give your story a title" />
            </div>
            <div>
              <label htmlFor="story" className="block text-sm font-medium text-white">
                Your Story
              </label>
              <Textarea
                id="story"
                className="mt-1 bg-[rgb(35,35,35)] text-white"
                placeholder="Share your experience with cyber scams"
                rows={6}
              />
            </div>
            <div>
              <label htmlFor="lessons" className="block text-sm font-medium text-white">
                Lessons Learned
              </label>
              <Textarea
                id="lessons"
                className="mt-1 bg-[rgb(35,35,35)] text-white"
                placeholder="What did you learn from this experience?"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full bg-[rgb(0,122,255)] hover:bg-[rgb(0,100,210)]">
              Submit Your Story
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

