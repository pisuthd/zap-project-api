import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zap Project API",
  description: "Public API Server for Zap Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers> 
    </html>
  );
}
