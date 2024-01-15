"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import OptionsVertical from "../shared/OptionsVertical";

const stacks = [
  {
    name: "HTML5",
    img: "/images/html.png",
    desc: "Markup Language",
  },
  {
    name: "React",
    img: "/images/react.png",
    desc: "JS Library",
  },
  {
    name: "Laravel",
    img: "/images/laravel.png",
    desc: "Backend Framework",
  },
  {
    name: "Android",
    img: "/images/android.png",
    desc: "Mobile OS",
  },
  {
    name: "Python",
    img: "/images/python.png",
    desc: "Machine Learning",
  },
];
const ProjectStack = () => {
  return (
    <div className="col-span-12 xl:col-span-3 box mb-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Project Stack</p>
        <OptionsVertical />
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex flex-col">
          {stacks.map(({ img, name, desc }) => (
            <div
              key={name}
              className="odd:bg-primary/5 dark:bg-bg3 even:dark:bg-bg4 p-3 md:px-6 md:py-4 flex justify-between items-center rounded-2xl">
              <div className="flex items-center gap-4 md:gap-6">
                <Image
                  className="rounded-full"
                  src={img}
                  width={54}
                  height={54}
                  alt="img"
                />
                <div>
                  <p className="text-lg md:text-xl font-medium mb-2">{name}</p>
                  <span className="text-xs md:text-sm">{desc}</span>
                </div>
              </div>
              <Link
                href="#"
                className="p-2 md:p-3 rounded-full border border-n30 dark:border-n500 bg-n0 dark:bg-bg4">
                <IconArrowUpRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectStack;
