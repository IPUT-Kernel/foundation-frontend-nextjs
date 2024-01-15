"use client";
import { useLayout } from "@/utils/LayoutContext";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const { layout } = useLayout();
  return (
    <footer className="bg-n0 footer dark:bg-bg4 ">
      <div
        className={`p-6 xl:px-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 ${
          layout == "Horizontal" && "max-w-[1700px] mx-auto xxl:px-3"
        }`}>
        <p className="text-sm lg:text-base max-md:text-center max-md:w-full">
          Copyright ©{new Date().getFullYear()}{" "}
          <Link className="text-primary" href="/">
            DashBoi
          </Link>
          . Designed By{" "}
          <Link href="#" className="text-secondary1">
            Pixelaxis
          </Link>
        </p>
        <div className="max-md:w-full max-md:flex justify-center">
          <SocialLinks />
        </div>

        <ul className="flex gap-3 lg:gap-4 text-sm lg:text-base max-lg:justify-center max-lg:w-full">
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Terms of condition</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
