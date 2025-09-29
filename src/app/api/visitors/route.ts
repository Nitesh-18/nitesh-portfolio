// src/app/api/visitors/route.ts

import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Visitor from "@/lib/models/Visitor";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const skip = (page - 1) * limit;
    const [visitors, totalCount] = await Promise.all([
      Visitor.find().sort({ time: -1 }).skip(skip).limit(limit).lean(),
      Visitor.countDocuments(),
    ]);

    return NextResponse.json({ visitors, totalCount });
  } catch (error) {
    console.error("Error fetching visitors:", error);
    return NextResponse.json({ error: "Failed to fetch visitors" }, { status: 500 });
  }
}
