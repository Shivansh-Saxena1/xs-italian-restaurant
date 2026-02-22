import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real application, you would save this to a database like PostgreSQL or MongoDB
    // and potentially send a confirmation email to the restaurant and customer.
    console.log("New Reservation Request Received:", data);

    // Give it a tiny simulated delay as though it were writing to a DB
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: "Reservation successfully received", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reservation Error:", error);
    return NextResponse.json(
      { message: "Server error processing reservation", success: false },
      { status: 500 }
    );
  }
}
