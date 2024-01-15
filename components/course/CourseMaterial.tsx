import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import OptionsVertical from "../shared/OptionsVertical";

const materials = [
  {
    title: "Holtz - Complete Anatomy",
    size: "94.7 MB",
    time: "uploaded 2 days ago",
  },
  {
    title: "Assessing doses Pt. 2",
    size: "79 KB",
    time: "uploaded 1 weeks ago",
  },
  {
    title: "Written exam template",
    size: "42 KB",
    time: "uploaded 2 days ago",
  },
  {
    title: "Holy Quran",
    size: "97 KB",
    time: "uploaded 1 days ago",
  },
  {
    title: "English 2nd Part",
    size: "4.7 MB",
    time: "uploaded 2 days ago",
  },
  {
    title: "Calculus Calculation",
    size: "97 KB",
    time: "uploaded 2 weeks ago",
  },
  {
    title: "UI/UX Design",
    size: "97 KB",
    time: "uploaded 2 weeks ago",
  },
];
const CourseMaterial = () => {
  return (
    <div className="col-span-12 lg:col-span-5 box mt-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Download Course Materials</p>
        <OptionsVertical />
      </div>
      <div className="flex flex-col gap-6">
        {materials.map(({ size, time, title }) => (
          <div key={title} className="flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-4 xl:gap-6">
              <div className="w-10 h-10 md:w-14 md:h-14">
                <Image
                  src="/images/pdf.png"
                  width={54}
                  height={54}
                  className="rounded-lg"
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm md:text-base xl:text-xl font-medium mb-2">
                  {title}
                </p>
                <p className="flex text-xs md:text-sm xl:text-base items-center flex-wrap gap-1">
                  <span>{size}</span>
                  <span className="max-md:hidden">•</span>
                  <span>{time}</span>
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="p-2 md:p-3 rounded-xl bg-primary/5 dark:bg-bg3">
              <IconDownload />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseMaterial;
