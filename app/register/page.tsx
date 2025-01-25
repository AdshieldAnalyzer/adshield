"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      // In a real application, you would send this data to your backend
      // For this demo, we'll just simulate a successful registration
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to login page after successful registration
      router.push("/login")
    } catch (err) {
      setError("An error occurred. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-md text-white border-none">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-white" />
            <CardTitle className="text-2xl">Create an AdShield account</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name">Full Name</label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/20 text-white placeholder-white/50 border-white/30 focus:border-white focus:ring-white"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 text-white placeholder-white/50 border-white/30 focus:border-white focus:ring-white"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/20 text-white placeholder-white/50 border-white/30 focus:border-white focus:ring-white"
                required
              />
            </div>
            {error && <p className="text-red-300">{error}</p>}
            <Button type="submit" className="w-full bg-white text-teal-600 hover:bg-teal-100 transition-colors">
              Create Account
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <span className="text-white/80">Already have an account? </span>
            <Link href="/login" className="text-white hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

