import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-eight-theta-32.vercel.app"),
  title: "Anurag Yadav | Elite Full Stack Developer & UI Designer",
  description: "Portfolio of Anurag Yadav, specializing in premium web experiences.",
  openGraph: {
    title: "Anurag Yadav | Elite Full Stack Developer",
    description: "Building high-performance, pixel-perfect web experiences that scale.",
    url: "/",
    siteName: "Anurag Yadav Portfolio",
    images: [
      {
        url: "/og-image.png.png", // Ye wahi image hai jo public folder me dali hai
        width: 1200,
        height: 630,
        alt: "Anurag Yadav Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <Navbar />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
