"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

export default function Polls() {
  const [votes, setVotes] = useState({
    scamVictim: { yes: 45, no: 55 },
    concerningScam: { phishing: 40, identityTheft: 35, ransomware: 25 },
    securityMeasure: { antivirus: 30, passwordManager: 25, twoFactor: 45 },
    reportedScam: { yes: 20, no: 80 },
  })

  const handleVote = (poll: string, option: string) => {
    setVotes((prev) => ({
      ...prev,
      [poll]: {
        ...prev[poll as keyof typeof prev],
        [option]: prev[poll as keyof typeof prev][option as keyof (typeof prev)[keyof typeof prev]] + 1,
      },
    }))
  }

  const calculatePercentage = (value: number, total: number) => {
    return Math.round((value / total) * 100)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Cyber Scam Polls</h1>
      <div className="space-y-8">
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 border-none">
          <CardHeader>
            <CardTitle className="text-white">Have you ever been a victim of a cyber scam?</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup>
              {Object.entries(votes.scamVictim).map(([option, count]) => (
                <div key={option} className="flex items-center justify-between space-x-2 mb-2">
                  <div className="flex items-center">
                    <RadioGroupItem
                      value={option}
                      id={`scamVictim-${option}`}
                      onClick={() => handleVote("scamVictim", option)}
                    />
                    <Label htmlFor={`scamVictim-${option}`} className="text-white ml-2">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Label>
                  </div>
                  <div className="flex-1 mx-4">
                    <Progress
                      value={calculatePercentage(count, votes.scamVictim.yes + votes.scamVictim.no)}
                      className="h-2"
                    />
                  </div>
                  <span className="text-white">{count} votes</span>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-teal-500 border-none">
          <CardHeader>
            <CardTitle className="text-white">Which type of cyber scam concerns you the most?</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup>
              {Object.entries(votes.concerningScam).map(([option, count]) => (
                <div key={option} className="flex items-center justify-between space-x-2 mb-2">
                  <div className="flex items-center">
                    <RadioGroupItem
                      value={option}
                      id={`concerningScam-${option}`}
                      onClick={() => handleVote("concerningScam", option)}
                    />
                    <Label htmlFor={`concerningScam-${option}`} className="text-white ml-2">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Label>
                  </div>
                  <div className="flex-1 mx-4">
                    <Progress
                      value={calculatePercentage(
                        count,
                        Object.values(votes.concerningScam).reduce((a, b) => a + b, 0),
                      )}
                      className="h-2"
                    />
                  </div>
                  <span className="text-white">{count} votes</span>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-none">
          <CardHeader>
            <CardTitle className="text-white">Which security measure do you find most effective?</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup>
              {Object.entries(votes.securityMeasure).map(([option, count]) => (
                <div key={option} className="flex items-center justify-between space-x-2 mb-2">
                  <div className="flex items-center">
                    <RadioGroupItem
                      value={option}
                      id={`securityMeasure-${option}`}
                      onClick={() => handleVote("securityMeasure", option)}
                    />
                    <Label htmlFor={`securityMeasure-${option}`} className="text-white ml-2">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Label>
                  </div>
                  <div className="flex-1 mx-4">
                    <Progress
                      value={calculatePercentage(
                        count,
                        Object.values(votes.securityMeasure).reduce((a, b) => a + b, 0),
                      )}
                      className="h-2"
                    />
                  </div>
                  <span className="text-white">{count} votes</span>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-yellow-500 border-none">
          <CardHeader>
            <CardTitle className="text-white">Have you ever reported a cyber scam?</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup>
              {Object.entries(votes.reportedScam).map(([option, count]) => (
                <div key={option} className="flex items-center justify-between space-x-2 mb-2">
                  <div className="flex items-center">
                    <RadioGroupItem
                      value={option}
                      id={`reportedScam-${option}`}
                      onClick={() => handleVote("reportedScam", option)}
                    />
                    <Label htmlFor={`reportedScam-${option}`} className="text-white ml-2">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Label>
                  </div>
                  <div className="flex-1 mx-4">
                    <Progress
                      value={calculatePercentage(count, votes.reportedScam.yes + votes.reportedScam.no)}
                      className="h-2"
                    />
                  </div>
                  <span className="text-white">{count} votes</span>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

