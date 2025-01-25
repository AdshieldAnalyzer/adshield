import { AITool } from "@/components/ai-tool"

export default function WebsiteChecker() {
  return (
    <AITool
      title="AI Website Checker"
      description="Check if a website is legitimate or potentially fraudulent using AI"
      inputPlaceholder="Enter website URL to check"
      inputType="url"
    />
  )
}

