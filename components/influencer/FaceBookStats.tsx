import { IconArrowUpRight, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import ProgressChart from "../sales/ProgressChart";
import OptionsVertical from "../shared/OptionsVertical";
const fbStats = [
  {
    title: "Content Posts",
    amount: "$65,110",
    percent: 40.7,
    series: 35.5,
    bg: "#5D69F4",
    color: "text-primary",
  },
  {
    title: "Followers",
    amount: "32.7k",
    percent: 66.7,
    series: 78.5,
    bg: "#00998B",
    color: "text-secondary1",
  },
  {
    title: "Following",
    amount: "29.4%",
    percent: 10.7,
    series: 55.5,
    bg: "#FFC861",
    color: "text-secondary3",
  },
  {
    title: "Likes (30 days)",
    amount: "$33,110",
    percent: 50.7,
    series: 43.5,
    bg: "#00998B",
    color: "text-secondary1",
  },
  {
    title: "Comments",
    amount: "$33,110",
    percent: 50.7,
    series: 53.5,
    bg: "#FFC861",
    color: "text-secondary3",
  },
  {
    title: "Profile views",
    amount: "$33,110",
    percent: 50.7,
    series: 65.5,
    bg: "#5D69F4",
    color: "text-primary",
  },
];
const FaceBookStats = () => {
  return (
    <div className="col-span-12 xl:col-span-3 box mb-4 xxxl:mb-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Facebook Stats</p>
        <OptionsVertical />
      </div>
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        {fbStats.map(({ amount, percent, series, title, bg, color }) => (
          <div
            key={title}
            className="col-span-12 md:col-span-6 4xl:col-span-4 box bg-primary/5 dark:bg-bg3 overflow-hidden">
            <div className="flex justify-between items-center mb-6 pb-6 bb-dashed">
              <span className="font-medium">{title}</span>
              <div className="flex">
                <Image
                  src="/images/user-2.png"
                  width={32}
                  height={32}
                  className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                  alt="img"
                />
                <Image
                  src="/images/user-3.png"
                  width={32}
                  height={32}
                  className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                  alt="img"
                />
                <Image
                  src="/images/user-4.png"
                  width={32}
                  height={32}
                  className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                  alt="img"
                />
                <Image
                  src="/images/user-5.png"
                  width={32}
                  height={32}
                  className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                  alt="img"
                />
                <div className="border flex items-center dark:border-n500 justify-center text-n0 border-n0 rounded-full bg-primary w-8 h-8">
                  <IconPlus size={22} />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="grow shrink-0">
                <h4 className="h4 mb-4">{amount}</h4>
                <span className={`${color} flex items-center gap-1`}>
                  <IconArrowUpRight /> {percent} %
                </span>
              </div>
              <div className="-my-3 grow shrink-0 w-40 h-28 flex justify-end">
                <ProgressChart bg={bg} labels={series + "%"} series={series} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceBookStats;
