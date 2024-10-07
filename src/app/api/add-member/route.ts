import { NextResponse } from "next/server";
// @ts-expect-error This will throw an error because GHOST does not support typescript yet
import AdminAPI from "@tryghost/admin-api";

// Handle POST request
export async function POST(req: Request) {
  const { email, name } = await req.json();

  if (!email || !name) {
    return NextResponse.json(
      { error: "Email and name are required" },
      { status: 400 }
    );
  }

  try {
    const api = new AdminAPI({
      url: process.env.NEXT_GHOST_API_URL,
      key: process.env.NEXT_GHOST_ADMIN_API_KEY,
      version: "v3",
    });

    const member = await api.members.add({ email, name });

    return NextResponse.json({ success: true, member }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    let message = "Failed to add member";
    if (error?.context?.includes("Member already exists.")) {
      message = "Signed up already";
    }
    console.log(error?.context.includes());
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
