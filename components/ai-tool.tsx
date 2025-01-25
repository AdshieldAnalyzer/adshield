"use client"

import { useState } from "react"
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { generateScamAnalysis } from "@/utils/scamAnalysis"
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react"

interface AIToolProps {
  title: string
  description: string
  inputPlaceholder: string
  inputType: string
}

export function AITool({ title, description, inputPlaceholder, inputType }: AIToolProps) {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<ReturnType<typeof generateScamAnalysis> | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const analysis = generateScamAnalysis(input)
    setResult(analysis)
  }

  const getRiskColor = (percentage: number) => {
    if (percentage < 30) return "from-green-400 to-green-600"
    if (percentage < 70) return "from-yellow-400 to-yellow-600"
    return "from-red-400 to-red-600"
  }

  const getRiskIcon = (percentage: number) => {
    if (percentage < 30) return CheckCircle
    if (percentage < 70) return AlertCircle
    return AlertTriangle
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 border-none shadow-xl">
        <CardHeader>
          <CardTitle className="text-white text-2xl">{title}</CardTitle>
          <p className="text-white opacity-80">{description}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type={inputType}
              placeholder={inputPlaceholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-white/20 text-white placeholder-white/50 border-white/30 focus:border-white focus:ring-white"
            />
            <Button type="submit" className="w-full bg-white text-purple-600 hover:bg-purple-100 transition-colors">
              Analyze
            </Button>
          </form>
          {result && (
            <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4">Analysis Result</h3>
              <div className={`p-4 rounded-lg bg-gradient-to-r ${getRiskColor(result.riskPercentage)} text-white mb-4`}>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">Risk Level: {result.riskPercentage}%</span>
                  {React.createElement(getRiskIcon(result.riskPercentage), { className: "w-8 h-8" })}
                </div>
              </div>
              <p className="text-white mb-2">
                Scam Type: <span className="font-semibold">{result.scamType}</span>
              </p>
              <p className="text-white">Advice: {result.advice}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

