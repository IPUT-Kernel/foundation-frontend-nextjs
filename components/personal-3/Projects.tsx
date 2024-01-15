"use client";
import { options } from "@/public/data/timesDropdown";
import useTable from "@/utils/useTable";
import { faker } from "@faker-js/faker";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";

type ProjectType = {
  title: string;
  percent: number;
  lead: {
    name: string;
    img: string;
  };
  status: string;
};

const projects: ProjectType[] = Array.from({ length: 8 }).map((_, i) => {
  return {
    title: faker.lorem.word(),
    percent: faker.number.int({ max: 100, min: 10 }),
    lead: {
      name: faker.person.firstName(),
      img: `/images/user-${i + 1}.png`,
    },
    status: faker.helpers.arrayElement(["Complete", "Inprogress", "Pending"]),
  };
});

const Projects = () => {
  const [selected, setSelected] = useState(options[0]);

  const { tableData, sortData } = useTable(projects);

  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Projects Overview</p>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm">Sort By : </p>
          <Dropdown
            items={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
              <th
                onClick={() => sortData("title")}
                className="py-3 font-semibold px-4 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Project Name <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("lead.name" as keyof ProjectType)}
                className="py-3 font-semibold px-4 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Project Lead <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("percent")}
                className="py-3 font-semibold px-4 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Progress <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("status")}
                className="py-3 font-semibold px-4 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Status <IconSelector size={18} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ lead, percent, status, title }) => (
              <tr key={title}>
                <td className="px-4 py-2">{title}</td>
                <td className="px-4 py-2">
                  <span className="flex items-center gap-3">
                    <Image
                      className="rounded-full"
                      src={lead.img}
                      width={32}
                      height={32}
                      alt="lead img"
                    />{" "}
                    {lead.name}{" "}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className="flex items-center gap-2">
                    {percent}%{" "}
                    <span className="block h-1 w-20 rounded-sm bg-primary/10">
                      <span
                        style={{ width: `${percent}%` }}
                        className="block h-1 rounded-sm bg-primary"></span>
                    </span>
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${
                      status == "Complete" &&
                      "bg-primary/10 dark:bg-bg3 text-primary"
                    } ${
                      status == "Inprogress" &&
                      "bg-secondary1/10 dark:bg-bg3 text-secondary1"
                    } ${
                      status == "Pending" &&
                      "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                    }`}>
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
