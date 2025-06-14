// components/VisitorLogger.tsx

'use client'
import { useEffect } from 'react';

export default function VisitorLogger() {
  useEffect(() => {
    const fetchVisitor = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const response = await fetch("/api/track", {
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

        const result = await response.json();
        console.log("Visitor logged:", result);
      } catch (err) {
        console.error("Visitor logging failed:", err);
      }
    };

    fetchVisitor();
  }, []);

  return null;
}
