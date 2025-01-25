import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Award, Star, Eye, Book, Share2, Flag, MessageSquare, BarChart2 } from "lucide-react"

export default function Badges() {
  const badges = [
    {
      name: "Scam Spotter",
      icon: Shield,
      description: "Successfully identified 10 potential scams",
      color: "bg-blue-500",
    },
    {
      name: "Cyber Guardian",
      icon: Award,
      description: "Completed all cybersecurity training modules",
      color: "bg-purple-500",
    },
    {
      name: "Community Protector",
      icon: Star,
      description: "Reported 5 scams to help protect others",
      color: "bg-yellow-500",
    },
    { name: "Vigilant Observer", icon: Eye, description: "Logged in for 7 consecutive days", color: "bg-green-500" },
    { name: "Knowledge Seeker", icon: Book, description: "Read 20 articles about cybersecurity", color: "bg-red-500" },
    {
      name: "Story Sharer",
      icon: Share2,
      description: "Shared your scam experience to educate others",
      color: "bg-indigo-500",
    },
    { name: "Scam Buster", icon: Flag, description: "Successfully resolved a scam attempt", color: "bg-pink-500" },
    {
      name: "Inquisitive Mind",
      icon: MessageSquare,
      description: "Asked 10 questions in the community",
      color: "bg-orange-500",
    },
    {
      name: "Poll Participant",
      icon: BarChart2,
      description: "Participated in 5 community polls",
      color: "bg-teal-500",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Cybersecurity Badges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <Card key={index} className={`${badge.color} border-none transition-transform hover:scale-105`}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <badge.icon className={`w-6 h-6 ${badge.color.replace("bg-", "text-")}`} />
                </div>
                <CardTitle className="text-white">{badge.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white opacity-90">{badge.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

