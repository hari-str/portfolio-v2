import { PortfolioAssistant } from "@/components/assistant/portfolio-assistant";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.url),
  title: {
    default: `${portfolio.name} · ${portfolio.title}`,
    template: `%s | ${portfolio.name}`,
  },
  description: portfolio.introduction,
  keywords: [
    "Hariharan Ganesan",
    "Full Stack Engineer",
    "Frontend Specialist",
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "AWS",
    "EdTech",
    "Chennai",
  ],
  authors: [{ name: portfolio.name, url: portfolio.url }],
  creator: portfolio.name,
  openGraph: {
    title: `${portfolio.name} · Full Stack Engineer`,
    description: portfolio.headline,
    url: portfolio.url,
    siteName: portfolio.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: portfolio.avatarUrl,
        width: 800,
        height: 800,
        alt: portfolio.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${portfolio.name} · Full Stack Engineer`,
    description: portfolio.headline,
    card: "summary_large_image",
    images: [portfolio.avatarUrl],
  },
  alternates: {
    canonical: portfolio.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider delayDuration={0}>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
              <PortfolioAssistant />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
