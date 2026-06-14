import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "700", "800"],
});

export const metadata: Metadata = {
  title: "Surround — multi-device synchronized audio",
  description:
    "Turn nearby phones into synchronized satellite speakers for music playing on your computer. Download the desktop host app for macOS and Windows.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bricolage.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
