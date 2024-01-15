"use client";
import welcomeImg from "@/public/images/welcome.png";
import {
  IconChartBar,
  IconChartHistogram,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";
import StateCard from "./StateCard";
const statesdata = [
  {
    title: "All Earning",
    icon: <IconChartHistogram />,
    amount: "$65,110",
    percent: "76.9%",
    color: "text-primary",
    bg: "bg-primary/5 dark:bg-bg3",
    chartbg: "#5D69F4",
  },
  {
    title: "Total Users",
    icon: <IconUsers />,
    amount: "32.7k",
    percent: "66.7%",
    color: "text-secondary1",
    bg: "bg-secondary1/5",
    chartbg: "#00998B",
  },
  {
    title: "Monthly Sales",
    icon: <IconChartBar />,
    amount: "$33,110",
    percent: "66.9%",
    color: "text-secondary3",
    bg: "bg-secondary3/5",
    chartbg: "#C78200",
  },
];
const Stats = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6 mb-4 xxxl:mb-6 overflow-x-hidden">
      <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 flex items-center box p-3 md:p-4 4xl:px-8 xxl:py-6">
        <div className="flex items-center justify-between w-full">
          <div className="shrink-0">
            <span className="block text-lg xl:text-xl 4xl:text-2xl mb-4 font-medium">
              Welcome back, <br /> Hawkins
            </span>
            <p>
              <span className="text-primary">DashBoi</span> Dashboard
            </p>
          </div>
          <Image
            src={welcomeImg}
            className="self-center 4xl:shrink-0"
            alt="img"
          />
        </div>
      </div>
      {statesdata.map((data) => (
        <StateCard key={data.title} cardData={data} />
      ))}
    </div>
  );
};

export default Stats;
