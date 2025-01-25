"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Search } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/tools?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="border-b border-gray-700 bg-gradient-to-r from-blue-900 via-purple-900 to-violet-900">
      <div className="flex h-16 items-center px-4 gap-6">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold text-white">AdShield</span>
        </Link>
        <nav className="flex items-center gap-6 mx-6">
          <Link href="/" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/tools" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
            AI Scam Detection Tools
          </Link>
          <Link href="/news" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
            News
          </Link>
          <Link href="/legal" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
            Legal
          </Link>
        </nav>
        <div className="flex items-center gap-4 ml-auto">
          <form onSubmit={handleSearch} className="relative w-64">
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
            />
            <Button type="submit" className="absolute right-0 top-0 bottom-0 bg-transparent hover:bg-transparent">
              <Search className="h-4 w-4 text-gray-400" />
            </Button>
          </form>
          <Link href="/login">
            <Button
              variant="outline"
              className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-colors">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

