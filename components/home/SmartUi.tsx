"use client";
import classic from "@/public/images/home/classic.png";
import corporate from "@/public/images/home/corporate.png";
import creative from "@/public/images/home/creative.png";
import forecastDark from "@/public/images/home/forecast-dark.png";
import forecast from "@/public/images/home/forecast.png";
import osDark from "@/public/images/home/os-dark.png";
import os from "@/public/images/home/os.png";
import smart from "@/public/images/home/smart.png";
import smartUi from "@/public/images/home/smartui.png";
import { useTheme } from "next-themes";
import Image from "next/image";

const uidata = [
  {
    icon: classic,
    title: "Classic",
  },
  {
    icon: corporate,
    title: "Corporate",
  },
  {
    icon: smart,
    title: "Smart",
  },
  {
    icon: creative,
    title: "Creative",
  },
];
const SmartUi = () => {
  const { theme } = useTheme();
  return (
    <section className="py-14 xxl:py-28 bg-primary/5 bg-[url(/images/home/smartui-bg.png)] bg-cover relative">
      <div className="container grid grid-cols-2 gap-4 xl:gap-6">
        <div className="col-span-2 lg:col-span-1">
          <h5 className="h5 text-primary font-semibold mb-2 lg:mb-4">
            Ui Library
          </h5>
          <h2 className="h2 mb-4 lg:mb-6">Smart UI Design</h2>
          <p className="mb-10 lg:mb-14 text-sm md:text-base">
            Dashboi UI provides a complete set of Nextjs components and
            utilities such as buttons, form elements, badges, tabs and
            typography clusters. Each component exposes several props that you
            can use to customize its look and feel.
          </p>
          <div className="grid grid-cols-2 gap-4 xl:gap-6">
            {uidata.map(({ icon, title }) => (
              <div
                key={title}
                className="col-span-2 min-[480px]:col-span-1 box p-5 xl:p-8 flex flex-col items-center justify-center">
                <div className="p-2 bg-primary/5 dark:bg-bg3 rounded-xl mb-4">
                  <Image src={icon} alt="img" />
                </div>
                <h5 className="h5">{title}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 relative">
          <Image
            className="hidden xxl:block absolute left-0 top-20 z-[2]"
            src={theme == "dark" ? osDark : os}
            alt="img"
          />
          <Image
            className="hidden xxl:block absolute bottom-[15%] xxl:-right-10 xxxl:-right-32 z-[2]"
            src={theme == "dark" ? forecastDark : forecast}
            alt="img"
          />
          <Image
            src={smartUi}
            className="xxl:translate-x-10 xxxl:translate-x-16"
            alt="img"
          />
        </div>
      </div>
    </section>
  );
};

export default SmartUi;
