"use client";
import { options } from "@/public/data/timesDropdown";
import { IconArrowDownLeft, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
const trending = [
  {
    icon: "/images/linkedin.png",
    title: "LinkedIn",
    company: "Linkedin Corp.",
    amount: 1478.32,
  },
  {
    icon: "/images/github.png",
    title: "Github",
    company: "Github Inc.",
    amount: 978.32,
  },
  {
    icon: "/images/invision.png",
    title: "Invision",
    company: "Invision Corp.",
    amount: 1678.32,
  },
  {
    icon: "/images/telegram.png",
    title: "Telegram",
    company: "Telegram Inc.",
    amount: 478.32,
  },
  {
    icon: "/images/kickstarter.png",
    title: "Kickstarter",
    company: "Kickstarter Corp.",
    amount: 1178.32,
  },
  {
    icon: "/images/google.png",
    title: "Google",
    company: "Google Inc.",
    amount: 2478.32,
  },
];
const TrendingStocks = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="col-span-12 lg:col-span-5 xl:col-span-4 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Trending Stocks</p>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm">Sort By : </p>
          <Dropdown
            selected={selected}
            setSelected={setSelected}
            items={options}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {trending.map(({ title, amount, company, icon }) => (
          <Link
            href="#"
            key={title}
            className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-4 xxl:gap-6">
              <Image src={icon} width={54} height={54} alt="icon" />
              <div className="flex flex-col">
                <p className="font-medium lg:text-xl mb-2">{title}</p>
                <span className="text-sm">{company}</span>
              </div>
            </div>
            <p
              className={`flex items-center gap-1 ${
                amount > 1000 ? "text-primary" : "text-secondary2"
              }`}>
              {amount > 1000 ? <IconArrowUpRight /> : <IconArrowDownLeft />} $
              {amount}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingStocks;
