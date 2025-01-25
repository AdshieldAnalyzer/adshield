import { AITool } from "@/components/ai-tool"

export default function TextChecker() {
  return (
    <AITool
      title="AI Text Message Checker"
      description="Analyze text messages for potential scams using advanced AI"
      inputPlaceholder="Enter the text message to analyze"
      inputType="text"
    />
  )
}

