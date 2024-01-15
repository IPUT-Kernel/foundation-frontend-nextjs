"use client";
import { options } from "@/public/data/timesDropdown";
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconArrowsLeftRight,
  IconCalendarPlus,
  IconChartHistogram,
  IconPhoto,
  IconShoppingCart,
} from "@tabler/icons-react";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
const overviews = [
  {
    title: "Total Sale",
    percent: 69.6,
    number: "- 245",
    total: "3214",
    icon: <IconChartHistogram size={32} />,
  },
  {
    title: "Revenue",
    percent: 3.6,
    number: "+$210",
    total: "$6254",
    icon: <IconCalendarPlus size={32} />,
  },
  {
    title: "Abandon Cart",
    percent: 79.6,
    number: "- 245",
    total: "152",
    icon: <IconShoppingCart size={32} />,
  },
  {
    title: "Ads Spent",
    percent: 2.6,
    number: "- 26",
    total: "502k",
    icon: <IconPhoto size={32} />,
  },
];

const Overview = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Projects Overview</p>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm">Sort By : </p>
          <Dropdown
            selected={selected}
            setSelected={setSelected}
            items={options}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
        {overviews.map(({ icon, number, percent, title, total }) => (
          <div className="flex justify-between items-center" key={title}>
            <div className="flex gap-3 md:gap-4 lg:gap-6 items-center">
              <span className="p-3 inline-flex rounded-2xl bg-primary/5 dark:bg-bg3 text-primary">
                {icon}
              </span>
              <div>
                <p className="text-sm md:text-base mb-2 md:mb-3">{title}</p>
                <span className="text-lg md:text-xl font-medium">{total}</span>
              </div>
            </div>
            <div className="text-end">
              <p>{number}</p>
              <p
                className={`text-primary flex mt-3 items-center gap-1 ${
                  percent < 20 && "text-secondary2"
                } ${percent > 70 && "text-secondary3"}`}>
                {percent < 20 && <IconArrowDownRight size={18} />}
                {percent > 20 && percent < 70 && <IconArrowUpRight size={18} />}
                {percent > 70 && <IconArrowsLeftRight size={18} />}
                {percent}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
