import { NextResponse } from "next/server";
import { createClient } from "next-sanity";

// We need a client with a token to write to Sanity
const writeClient = createClient({
  projectId: "rdvxazsi",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Make sure this is set in .env.local
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate basic required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Prepare document
    const doc = {
      _type: "contactSubmission",
      name: body.name,
      email: body.email,
      company: body.company || "",
      industry: body.industry || "",
      address: body.address || "",
      subject: body.subject || "",
      message: body.message,
      submittedAt: new Date().toISOString(),
    };

    // Create the document in Sanity
    const result = await writeClient.create(doc);

    return NextResponse.json({ success: true, id: result._id }, { status: 201 });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
