import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor"; // Import the CustomCursor component
import VisitorLogger from "@/components/VistorLogger";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nitesh Ranjankar | Full Stack Developer Portfolio",
  description: "Portfolio of Nitesh Ranjankar, Full Stack Web Developer skilled in Next.js, Python, React.js and scalable applications.",
  keywords: [
    "Nitesh Ranjankar",
    "Nitesh Ranjankar Portfolio",
    "Nitesh Ranjankar Vereigen Media",
    "Full Stack Developer Portfolio",
    "Full Stack Developer in JSPM",
    "Full Stack Developer in JSPM College",
    "Full Stack Developer in JSPM College Pune",
    "Full Stack Developer in JSPM College Pune India",
    "Next.js Portfolio",
    "Three.js Portfolio",
    "Software Developer in Pune",
    "Three.js Projects",
    "Python Developer",
    "Flask Developer",
    "React Developer",
  ],
  authors: [{ name: "Nitesh Ranjankar" }],
  metadataBase: new URL("https://nitesh-portfolio-three.vercel.app"), // your portfolio URL
  alternates: {
    canonical: "https://nitesh-portfolio-three.vercel.app",
  },
  openGraph: {
    title: "Nitesh Ranjankar | Full Stack Developer Portfolio",
    description:
      "Explore the portfolio of Nitesh Ranjankar, Full Stack Developer specializing in Next.js, Python, React.js and scalable web apps.",
    url: "https://nitesh-portfolio-three.vercel.app",
    siteName: "Nitesh Portfolio",
    images: [
      {
        url: "/thumbnail.png", // create a nice preview image
        width: 1200,
        height: 630,
        alt: "Nitesh Ranjankar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitesh Ranjankar | Full Stack Developer",
    description:
      "Full Stack Developer skilled in Next.js, Three.js, Python, and scalable web apps.",
    creator: "@Nitesh1831", // replace with your handle
    images: ["/thumbnail.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VisitorLogger />
        <CustomCursor />
        {children}

        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nitesh Ranjankar",
            url: "https://nitesh-portfolio-three.vercel.app",
            sameAs: [
              "https://github.com/Nitesh-18",
              "https://www.linkedin.com/in/nitesh-r-a15518243",
              "https://twitter.com/Nitesh1831",
            ],
            jobTitle: "Full Stack Developer",
            worksFor: {
              "@type": "Vereigen Media",
              name: "Full Time & Internship Experience",
            },
          })}
        </Script>

      </body>
    </html>
  );
}
