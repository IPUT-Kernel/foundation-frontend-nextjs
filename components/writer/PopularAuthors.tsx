"use client";
import useTable from "@/utils/useTable";
import { IconArrowUpRight, IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import OptionsVertical from "../shared/OptionsVertical";
const authors = [
  {
    projects: "UI/UX Designer",
    articles: 53,
    lead: {
      name: "Dustin",
      img: "/images/user.png",
    },
    status: "Complete",
  },
  {
    projects: "Software Tester",
    articles: 53,
    lead: {
      name: "Dustin",
      img: "/images/user-2.png",
    },
    status: "In Progress",
  },
  {
    projects: "Team Leader",
    articles: 53,
    lead: {
      name: "Dustin",
      img: "/images/user-3.png",
    },
    status: "Complete",
  },
  {
    projects: "Software Developer",
    articles: 53,
    lead: {
      name: "Dustin",
      img: "/images/user-4.png",
    },
    status: "Cancel",
  },
  {
    projects: "Scrum Master",
    articles: 53,
    lead: {
      name: "Dustin",
      img: "/images/user-5.png",
    },
    status: "Cancel",
  },
  {
    projects: "Project Manager",
    articles: 53,
    lead: {
      name: "Dustin",
      img: "/images/user-6.png",
    },
    status: "Complete",
  },
  {
    projects: "Ethical Hacker",
    articles: 53,
    lead: {
      name: "Dwight",
      img: "/images/user-7.png",
    },
    status: "In Progress",
  },
  {
    projects: "Web Designer",
    articles: 53,
    lead: {
      name: "Dwight",
      img: "/images/user-2.png",
    },
    status: "Complete",
  },
];

const PopularAuthors = () => {
  const { tableData, sortData } = useTable(authors);
  return (
    <div className="box mb-4 xxxl:mb-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Popular Authors</p>
        <OptionsVertical />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
              <th
                onClick={() => sortData("name")}
                className="py-3 font-semibold px-4 text-start w-[20%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Name <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("articles.name")}
                className="py-3 font-semibold px-4 text-start w-[25%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Projects <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("articles")}
                className="py-3 font-semibold px-4 text-start w-[25%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Articles <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("status")}
                className="py-3 font-semibold px-4 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Status <IconSelector size={18} />
                </div>
              </th>
              <th className="py-3 font-semibold px-4 text-start">View</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ lead, status, articles, projects }) => (
              <tr key={projects} className="even:bg-primary/5 dark:even:bg-bg3">
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
                <td className="px-4 py-2">{projects}</td>
                <td className="px-4 py-2">{articles} articles</td>
                <td className="px-4 py-2">
                  <span
                    className={`block w-28 xxl:w-36 text-xs text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${
                      status == "Complete" &&
                      "bg-primary/10 dark:bg-bg3 text-primary"
                    } ${
                      status == "In Progress" &&
                      "bg-secondary1/10 dark:bg-bg3 text-secondary1"
                    } ${
                      status == "Cancel" &&
                      "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                    }`}>
                    {status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <Link href="#">
                    <IconArrowUpRight />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopularAuthors;
