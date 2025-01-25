type ScamType = "Phishing" | "Identity Theft" | "Financial Fraud" | "Malware" | "Social Engineering"

export function generateScamAnalysis(input: string): {
  scamType: ScamType
  riskPercentage: number
  advice: string
} {
  const scamTypes: ScamType[] = ["Phishing", "Identity Theft", "Financial Fraud", "Malware", "Social Engineering"]
  const scamType = scamTypes[Math.floor(Math.random() * scamTypes.length)]
  const riskPercentage = Math.floor(Math.random() * 101)

  let advice = ""
  if (riskPercentage < 30) {
    advice = "Low risk detected. Stay vigilant and continue to practice safe online habits."
  } else if (riskPercentage < 70) {
    advice = "Moderate risk detected. Exercise caution and verify the authenticity of the source."
  } else {
    advice = "High risk detected. Do not engage further and report this to the relevant authorities."
  }

  return { scamType, riskPercentage, advice }
}

