import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio-grace-arts.lovable.app"),
  title: "Tattoo Tornado And Paintings - Tattoo Shop · Udaipur",
  description: "Tattoo Tornado And Paintings - Tattoo Shop — a premium tattoo studio and painting atelier in Udaipur, Rajasthan. Custom tattoos, portrait & wall paintings, sterile studio, master artists.",
  openGraph: {
    title: "Tattoo Tornado And Paintings - Tattoo Shop",
    description: "Tattoo Tornado And Paintings - Tattoo Shop — a premium tattoo studio and painting atelier in Udaipur, Rajasthan. Custom tattoos, portrait & wall paintings, sterile studio, master artists.",
    url: "/",
    siteName: "Tattoo Tornado And Paintings - Tattoo Shop",
    images: [
      {
        url: "/og.jpg", // Note: Need to add this to public dir later
        width: 1200,
        height: 630,
        alt: "Tattoo Tornado Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattoo Tornado And Paintings - Tattoo Shop",
    description: "A premium tattoo studio and painting atelier in Udaipur, Rajasthan.",
    images: ["/og.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "name": "Tattoo Tornado And Paintings - Tattoo Shop",
  "image": "/og.jpg",
  "telephone": "+91-77377-47772",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Main Chouraha, First Floor, New Rajasthan Bakery, Opposite Shastri Misthan, Near Arya Samaj Marg, Sector 4",
    "addressLocality": "Udaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "313001",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.instagram.com/tattoo_tornado_official/"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "11:00",
      "closes": "21:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
