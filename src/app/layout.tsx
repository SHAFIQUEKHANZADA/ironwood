import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title:
    "Ironwood Films & Event Rentals | Greater Vancouver Event & Production Rentals",
  description:
    "Your trusted source for all things event and film in the Lower Mainland. Ironwood Films & Event Rentals supplies tables, chairs, linens, tents, staging, lighting and production gear across British Columbia.",
  keywords: [
    "event rentals Vancouver",
    "film production rentals BC",
    "party rentals Lower Mainland",
    "tent rentals",
    "wedding rentals British Columbia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}
