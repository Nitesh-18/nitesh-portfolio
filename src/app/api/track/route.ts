import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Visitor from "@/lib/models/Visitor";

export async function GET(req: NextRequest) {
const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const userAgent = req.headers.get("user-agent") || "unknown";

  // Optional: Use an external API like ipinfo.io or ipapi.co to fetch geolocation
  const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
  const geo = await geoRes.json();

  await dbConnect();
  await Visitor.create({
    ip,
    city: geo.city,
    region: geo.region,
    country: geo.country_name,
    device: userAgent,
    org: geo.org || "unknown",
  });

  return NextResponse.json({ success: true });
}
