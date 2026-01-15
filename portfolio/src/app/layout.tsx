import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKCONNOR | Portfolio",
  description: "Personal portfolio of MKCONNOR, a passionate developer based in Guangzhou.",
  keywords: ["MKCONNOR", "Developer", "Portfolio", "Guangzhou", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased min-h-screen selection:bg-brand-blue-light/30`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-portfolio mx-auto px-6 py-12 md:py-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
