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
  title: "Nitesh Ranjankar | Software Developer Portfolio",
  description: "Portfolio of Nitesh Ranjankar, Software Web Developer skilled in Next.js, Python, React.js and scalable applications.",
  keywords: [
    "Nitesh Ranjankar",
    "Nitesh Ranjankar Portfolio",
    "Nitesh Ranjankar Vereigen Media",
    "Software Developer Portfolio",
    "Software Developer in JSPM",
    "Software Developer in JSPM College",
    "Software Developer in JSPM College Pune",
    "Software Developer in JSPM College Pune India",
    "Next.js Portfolio",
    "Three.js Portfolio",
    "Software Developer in Pune",
    "Three.js Projects",
    "Three.js Portfolio",
    "Python Developer",
    "Flask Developer",
    "React Developer",
  ],
  authors: [{ name: "Nitesh Ranjankar" }],
  metadataBase: new URL("https://www.nitesh-ranjankar.me/"), // your portfolio URL
  alternates: {
    canonical: "https://www.nitesh-ranjankar.me/",
  },
  openGraph: {
    title: "Nitesh Ranjankar | Software Developer Portfolio",
    description:
      "Explore the portfolio of Nitesh Ranjankar, Software Developer specializing in Next.js, Python, React.js and scalable web apps.",
    url: "https://www.nitesh-ranjankar.me/",
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
    title: "Nitesh Ranjankar | Software Developer",
    description:
      "Software Developer skilled in Next.js, Three.js, Python, and scalable web apps.",
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
      <head>
        <meta name="google-site-verification" content="zGAmrdov43yCHLEndXBuxxwFQ7mliUFDdD166KiZJHQ" />
      </head>
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
            url: "https://www.nitesh-ranjankar.me/",
            sameAs: [
              "https://github.com/Nitesh-18",
              "https://www.linkedin.com/in/nitesh-ranjankar",
              "https://twitter.com/Nitesh1831",
            ],
            jobTitle: "Software Developer",
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
