import Link from "next/link"
import { Home, AlertTriangle, Flag, HelpCircle, MessageSquare, Award, Share2, BarChart2 } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 bg-[rgb(25,25,25)] text-white min-h-screen p-4">
      <nav className="space-y-2">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-[rgb(200,200,200)] hover:bg-[rgb(35,35,35)]"
        >
          <Home className="h-5 w-5" />
          Home
        </Link>
        <Link
          href="/tools"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-[rgb(200,200,200)] hover:bg-[rgb(35,35,35)]"
        >
          <AlertTriangle className="h-5 w-5" />
          AI Scam Detection Tools
        </Link>
        <Link
          href="/report"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-[rgb(200,200,200)] hover:bg-[rgb(35,35,35)]"
        >
          <Flag className="h-5 w-5" />
          Report Scams
        </Link>
        <Link
          href="/questions"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-[rgb(200,200,200)] hover:bg-[rgb(35,35,35)]"
        >
          <MessageSquare className="h-5 w-5" />
          Ask Questions
        </Link>
        <Link
          href="/polls"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-[rgb(200,200,200)] hover:bg-[rgb(35,35,35)]"
        >
          <BarChart2 className="h-5 w-5" />
          Polls
        </Link>
        <Link
          href="/badges"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-[rgb(200,200,200)] hover:bg-[rgb(35,35,35)]"
        >
          <Award className="h-5 w-5" />
          Badges
        </Link>
        <Link
          href="/help"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-[rgb(200,200,200)] hover:bg-[rgb(35,35,35)]"
        >
          <HelpCircle className="h-5 w-5" />
          Help
        </Link>
        <Link
          href="/share"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-[rgb(200,200,200)] hover:bg-[rgb(35,35,35)]"
        >
          <Share2 className="h-5 w-5" />
          Share Your Story
        </Link>
      </nav>
    </div>
  )
}

