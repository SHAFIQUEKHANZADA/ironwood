import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: {
    default:
      "Ironwood Film & Event Rentals | Greater Vancouver Event & Production Rentals",
    template: "%s | Ironwood Film & Event Rentals",
  },
  description:
    "Your trusted source for all things event and film in the Lower Mainland. Ironwood Film & Event Rentals supplies tents, tables, chairs, linens, heaters, bars and location gear across British Columbia.",
  keywords: [
    "event rentals Vancouver",
    "film production rentals BC",
    "party rentals Lower Mainland",
    "tent rentals",
    "ground protection mats",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
