"use client";
import { options } from "@/public/data/timesDropdown";
import {
  IconChecklist,
  IconFilePower,
  IconFiles,
  IconInfoCircle,
  IconMathAvg,
  IconTrack,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
const projects = [
  {
    title: "Project Discussion",
    desc: "6 Person",
    icon: <IconFiles />,
  },
  {
    title: "In Progress",
    desc: "16 Projects",
    icon: <IconFilePower />,
  },
  {
    title: "Completed Projects",
    desc: "24",
    icon: <IconChecklist />,
  },
  {
    title: "Delivery Projects",
    desc: "20",
    icon: <IconTrack />,
  },
  {
    title: "Employee",
    desc: "500+",
    icon: <IconUsers />,
  },
  {
    title: "Salary Avg",
    desc: "44k",
    icon: <IconMathAvg />,
  },
];
const ProjectsSummery = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Projects Summery</p>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm">Sort By : </p>
          <Dropdown
            items={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {projects.map(({ title, desc, icon }) => (
          <div key={title} className="flex items-center justify-between">
            <Link href="#" className="flex items-center gap-4">
              <span
                className={`p-3 inline-flex rounded-xl bg-primary/5 dark:bg-bg3 text-primary`}>
                {icon}
              </span>
              <div>
                <p className="text-base sm:text-lg md:text-xl font-medium mb-2">
                  {title}
                </p>
                <span className="text-sm">{desc}</span>
              </div>
            </Link>
            <button title="Project description">
              <IconInfoCircle />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSummery;
