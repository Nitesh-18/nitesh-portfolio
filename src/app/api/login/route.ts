import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = await request.json();
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (password === ADMIN_PASSWORD) {
    // Set cookie for 30 minutes
    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          "Set-Cookie": `admin_auth=1; Path=/; Max-Age=1800; HttpOnly; SameSite=Strict; Secure`,
        },
      }
    );
  }
  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
