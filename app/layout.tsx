import "@/public/styles/style.scss";
import { LayoutProvider } from "@/utils/LayoutContext";
import ThemeProvider from "@/utils/ThemeProvider";
import type { Metadata } from "next";
import { Next13NProgress } from "nextjs13-progress";
import "./globals.css";

import { notojp, ubuntumono, inter } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "IPUT-Kernel",
  description: "IPUTのすべての開発者のためのソーシャルプラットフォームです。",
  keywords: ["東京国際工科専門職大学", "Github", "LMS", "IPUT"],
  openGraph: {
    title: "IPUT-Kernel",
    description: "IPUTのすべての開発者のためのソーシャルプラットフォームです。",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="!scroll-smooth">
      <body className={`${inter.className} text-n500 dark:text-n30`}>
        <ThemeProvider>
          <Next13NProgress color="#5D69F4" height={3} />
          <LayoutProvider>{children}</LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
