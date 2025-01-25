import { AITool } from "@/components/ai-tool"

export default function EmailChecker() {
  return (
    <AITool
      title="AI Email Checker"
      description="Verify if an email address is potentially associated with scams"
      inputPlaceholder="Enter email address to check"
      inputType="email"
    />
  )
}

