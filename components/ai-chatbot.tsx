"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useChat } from "ai/react"

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg animate-pulse"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bot className="w-6 h-6 text-white" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-96 bg-gradient-to-b from-gray-900 to-gray-800 text-white border-none shadow-xl rounded-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 py-3">
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="w-5 h-5" />
                AI Scam Assistant (Powered by ChatGPT)
              </CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === "assistant"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                        : "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-gray-800">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about cyber scams..."
                className="flex-1 bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                disabled={isLoading}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  )
}

