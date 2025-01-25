import { NextResponse } from "next/server"

// This is a mock authentication function. In a real-world scenario, you'd use a proper authentication system.
async function authenticateUser(email: string, password: string) {
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // For demo purposes, we'll consider any email ending with @test.com as valid
  if (email.endsWith("@test.com") && password.length >= 6) {
    return { success: true, user: { id: "1", email } }
  }
  return { success: false, error: "Invalid credentials" }
}

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const result = await authenticateUser(email, password)

  if (result.success) {
    return NextResponse.json({ user: result.user })
  } else {
    return NextResponse.json({ error: result.error }, { status: 401 })
  }
}
