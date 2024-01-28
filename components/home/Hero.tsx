"use client";
import browserDark from "@/public/images/home/browser-dark.png";
import browser from "@/public/images/home/browser.png";
import HeroImg from "@/public/images/home/main.png";
import osDark from "@/public/images/home/os-dark.png";
import os from "@/public/images/home/os.png";
import projectStatusDark from "@/public/images/home/projects-status-dark.png";
import projectStatus from "@/public/images/home/projects-status.png";
import transactionsDark from "@/public/images/home/transactions-dark.png";
import transactions from "@/public/images/home/transactions.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <div className="bg-[url(/images/home/hero-bg.png)] bg-cover bg-no-repeat relative">
      <div className="bg-gradient-to-b from-primary/20 to-n0 dark:to-[#1B232D] pt-28 lg:pt-32">
        <Navbar />
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="display-3 mb-4 lg:mb-6 mt-6">
              IPUT-Kernel
            </h1>
            <p className="lg:text-xl mb-8 lg:mb-10 text-sm md:text-base">
              このプロジェクトは学生が管理することを主体においた<br />大学生活をより豊かで効率的にするソーシャルプラットフォームです。
            </p>
            <div className="flex justify-center gap-4 lg:gap-6 pb-10 lg:pb-14">
              <Link href="https://github.com/IPUT-Kernel" className="btn-outline"　target="_blank">
                Join Us
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={HeroImg}
              className="rounded-t-2xl rounded-b-sm"
              width={1296}
              height={619}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
