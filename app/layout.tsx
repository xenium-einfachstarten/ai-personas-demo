import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Personas Demo",
  description: "Demo application for AI personas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
