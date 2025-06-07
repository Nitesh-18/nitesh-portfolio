'use client'
import { useEffect } from 'react';

export default function VisitorLogger() {
  useEffect(() => {
    const fetchVisitor = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        await fetch("/api/visitor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            city: data.city,
            region: data.region,
            country: data.country_name,
            org: data.org,
            ip: data.ip,
            userAgent: navigator.userAgent,
            platform: navigator.platform,
          }),
        });
      } catch (err) {
        console.error("Visitor logging failed:", err);
      }
    };

    fetchVisitor();
  }, []);

  return null;
}
// This component logs visitor information to the server when mounted.
// It fetches the visitor's IP and location data from ipapi.co and sends it to the /api/visitor endpoint.