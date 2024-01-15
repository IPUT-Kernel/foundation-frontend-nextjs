"use client";
import StatImgDark from "@/public/images/home/stat-dark.png";
import StatImg from "@/public/images/home/stat.png";
import TransactionImgDark from "@/public/images/home/transactions-dark.png";
import TransactionImg from "@/public/images/home/transactions.png";
import WhyChooseImg from "@/public/images/home/whychoose.png";
import {
  IconBriefcase,
  IconBulbFilled,
  IconUserCode,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Image from "next/image";
const supportData = [
  {
    title: "User Experience",
    desc: "We understand the importance of creating a dashboard that not only looks great but is also easy to use and accessible for everyone.",
    icon: <IconBriefcase size={36} />,
  },
  {
    title: "Developer Experience",
    desc: "We get that creating a dashboard is not just about the end-users but also about the developers who build it. ",
    icon: <IconUserCode size={36} />,
  },
  {
    title: "Nextjs powered",
    desc: "Dashboi combines the power of the latest version of Nextjs with the popular Tailwind CSS framework, allowing you to create stunning designs with ease.",
    icon: <IconBulbFilled size={36} />,
  },
];

const HardRock = () => {
  const { theme } = useTheme();
  return (
    <section className="py-14 xxl:py-28 bg-n0 dark:bg-bg4">
      <div className="container grid grid-cols-2 gap-4 xl:gap-6 items-center">
        <div className="col-span-2 lg:col-span-1 relative">
          <Image
            className="hidden xxl:block absolute -left-10 z-[2] xxxl:-left-20 4xl:-left-56 top-[20%]"
            src={theme == "dark" ? TransactionImgDark : TransactionImg}
            width={138}
            height={138}
            alt="img"
          />
          <Image
            className="hidden xxl:block absolute bottom-10 z-[2] -right-0"
            src={theme == "dark" ? StatImgDark : StatImg}
            alt="img"
          />
          <Image
            src={WhyChooseImg}
            className="xxl:-translate-x-10 xxxl:-translate-x-28 4xl:-translate-x-40"
            alt="img"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h5 className="h5 text-primary font-semibold mb-2 lg:mb-4">
            Hard Rock
          </h5>
          <h2 className="h2 mb-4 lg:mb-6">Why choose Dashboi</h2>
          <p className="mb-10 lg:mb-14 text-sm md:text-base">
            Dashboi is a modern, clean and fully responsive Nextjs / Tailwind
            CSS dashboard system. It is built with care and provides a solid
            foundation for your next project, while yielding an exquisite
            developer experience.
          </p>
          <div className="flex flex-col gap-4 md:gap-6 xl:gap-8">
            {supportData.map(({ title, desc, icon }) => (
              <div key={title} className="flex items-start gap-4 xl:gap-6">
                <div className="p-3 rounded-full bg-primary/5 dark:bg-bg3 text-primary">
                  {icon}
                </div>
                <div>
                  <h5 className="text-lg lg:text-xl font-medium mb-2">
                    {title}
                  </h5>
                  <p className="text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardRock;
