import { AITool } from "@/components/ai-tool"

export default function AppChecker() {
  return (
    <AITool
      title="AI App Checker"
      description="Check if an app has been reported as malicious using AI"
      inputPlaceholder="Enter app name or package ID to check"
      inputType="text"
    />
  )
}

