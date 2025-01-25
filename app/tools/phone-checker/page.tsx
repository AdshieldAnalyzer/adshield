import { AITool } from "@/components/ai-tool"

export default function PhoneChecker() {
  return (
    <AITool
      title="AI Phone Number Checker"
      description="Verify if a phone number is potentially associated with scams"
      inputPlaceholder="Enter phone number to check"
      inputType="tel"
    />
  )
}

