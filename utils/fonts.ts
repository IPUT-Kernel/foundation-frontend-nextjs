import { Ubuntu_Mono, Inter, Noto_Serif_JP } from "next/font/google";
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ubuntumono = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const notojp = Noto_Serif_JP({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
