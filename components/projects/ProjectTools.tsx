"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import OptionsVertical from "../shared/OptionsVertical";

const tools = [
  {
    name: "Figma",
    img: "/images/figma.png",
  },
  {
    name: "Sketch",
    img: "/images/sketch.png",
  },
  {
    name: "Photoshop",
    img: "/images/ps.png",
  },
  {
    name: "Illustrator",
    img: "/images/ai.png",
  },
  {
    name: "XD",
    img: "/images/xd.png",
  },
];
const ProjectTools = () => {
  return (
    <div className="col-span-12 xl:col-span-3 box mb-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Project Tools</p>
        <OptionsVertical />
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex flex-col">
          {tools.map(({ img, name }) => (
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
                  <span className="text-sm">Design Software</span>
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

export default ProjectTools;
