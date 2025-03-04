import { NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/types"
import { supabase } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactFormSchema.parse(body)

    // Format the phone number by combining DDI and phone, removing any non-digit characters
    const formattedPhone = `${validatedData.ddi}${validatedData.phone.replace(/\D/g, "")}`

    // Insert data into Supabase with the formatted phone number
    const { error } = await supabase.from("contacts").insert([
      {
        name: validatedData.name,
        email: validatedData.email,
        phone: formattedPhone,
      },
    ])

    if (error) throw error

    return NextResponse.json({ message: "Contact form submitted successfully" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}

