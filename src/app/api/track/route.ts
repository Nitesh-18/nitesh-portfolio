// src/app/api/track/route.ts

import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Visitor from "@/lib/models/Visitor";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await dbConnect();

    await Visitor.create({
      ip: body.ip || "unknown",
      city: body.city || "unknown",
      region: body.region || "unknown",
      country: body.country || "unknown",
      device: body.userAgent || "unknown",
      org: body.org || "unknown",
      time: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visitor logging failed on server:", error);
    return NextResponse.json({ error: "Failed to save visitor" }, { status: 500 });
  }
}
