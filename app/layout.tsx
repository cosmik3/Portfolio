import type { Metadata } from "next";
import "./globals.css";

const siteDescription = "I am a Software Developer, I'm interested in building iOS and Web apps, coding videogames, and training machine learning models"

export const metadata: Metadata = {
  title: "Manu R",
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
