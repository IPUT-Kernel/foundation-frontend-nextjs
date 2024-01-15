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
        <Image
          src={theme == "dark" ? osDark : os}
          className="absolute left-3 min-[1650px]:left-[8%] top-[24%] hidden xxl:block"
          alt="hero img"
        />
        <Image
          src={theme == "dark" ? browserDark : browser}
          className="absolute hidden xxl:block left-[2%] bottom-[5%]"
          alt="hero img"
        />
        <Image
          src={theme == "dark" ? projectStatusDark : projectStatus}
          className="absolute hidden xxl:block top-[10%] right-0 min-[1480px]:]right-6 min-[1680px]:right-[4%]"
          alt="hero img"
        />
        <Image
          src={theme == "dark" ? transactionsDark : transactions}
          className="absolute hidden right-[4%] bottom-[3%] xxl:block"
          alt="hero img"
        />
        <Navbar />
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="display-3 mb-4 lg:mb-6 mt-6">
              Effortless Dashboard Creation for Pros very Fast
            </h1>
            <p className="lg:text-xl mb-8 lg:mb-10 text-sm md:text-base">
              Dashboi is the ultimate solution for developers looking to build
              beautiful Nextjs dashboards in no time, with the power of UI and
              Tailwind CSS.
            </p>
            <div className="flex justify-center gap-4 lg:gap-6 pb-10 lg:pb-14">
              <Link href="#" className="btn">
                Purchase Now
              </Link>
              <Link href="#pages" className="btn-outline">
                View Demos
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
