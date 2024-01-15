import "@/public/styles/style.scss";
import { LayoutProvider } from "@/utils/LayoutContext";
import ThemeProvider from "@/utils/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Next13NProgress } from "nextjs13-progress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dashboi - Multipurpose Nextjs Tailwindcss admin Dashboard",
  description: "Dashboi - Multipurpose Nextjs Tailwindcss admin Dashboard",
  keywords: ["Next.js", "React", "JavaScript", "Dashboard"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} text-n500 dark:text-n30`}>
        <ThemeProvider>
          <Next13NProgress color="#5D69F4" height={3} />
          <LayoutProvider>{children}</LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
