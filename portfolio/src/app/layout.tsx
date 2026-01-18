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
        className={`${inter.className} antialiased min-h-screen selection:bg-brand-blue-light/30 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30`}
      >
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100/20 via-transparent to-transparent dark:from-pink-900/10 pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/10 pointer-events-none" />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-portfolio mx-auto px-6 py-12 md:py-24 relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
