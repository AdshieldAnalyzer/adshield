"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { generateScamAnalysis } from "@/utils/scamAnalysis"
import { Upload } from "lucide-react"

export default function ImageChecker() {
  const [image, setImage] = useState<File | null>(null)
  const [result, setResult] = useState<ReturnType<typeof generateScamAnalysis> | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (image) {
      const analysis = generateScamAnalysis(image.name) // Using filename as input for demo purposes
      setResult(analysis)
    }
  }

  const getRiskColor = (percentage: number) => {
    if (percentage < 30) return "text-green-500"
    if (percentage < 70) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="bg-[rgb(25,25,25)] border-[rgb(45,45,45)]">
        <CardHeader>
          <CardTitle className="text-white">AI Image Analysis</CardTitle>
          <p className="text-[rgb(150,150,150)]">Upload and analyze images for scam detection using AI</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                  accept="image/*"
                />
              </label>
            </div>
            {image && <p className="text-white">Selected file: {image.name}</p>}
            <Button type="submit" className="w-full bg-[rgb(0,122,255)] hover:bg-[rgb(0,100,210)]">
              Analyze
            </Button>
          </form>
          {result && (
            <div className="mt-6 p-4 bg-[rgb(35,35,35)] rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Analysis Result</h3>
              <p className="text-[rgb(200,200,200)]">Scam Type: {result.scamType}</p>
              <p className={`${getRiskColor(result.riskPercentage)} font-bold`}>Risk Level: {result.riskPercentage}%</p>
              <p className="text-[rgb(200,200,200)] mt-2">Advice: {result.advice}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

