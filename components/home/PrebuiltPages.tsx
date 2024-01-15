"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { demoData } from "./demodata";

const PrebuiltPages = ({ sliceNum }: { sliceNum?: number }) => {
  const [currentItems, setCurrentItems] = useState(demoData);
  const [activeCategory, setActiveCategory] = useState("all");
  const categorySet = new Set(demoData.map((item) => item.category));
  const categories = ["all", ...Array.from(categorySet)].sort();
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    category == "all"
      ? setCurrentItems(demoData)
      : setCurrentItems(demoData.filter((item) => item.category == category));
  };
  const path = usePathname();
  return (
    <section
      id="pages"
      className={`py-14 xxl:py-28 bg-n0 dark:bg-bg4 ${
        path == "/demos" && "pt-32 xxl:pt-40"
      }`}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-14">
          <h5 className="h5 text-primary font-semibold mb-2 lg:mb-4">
            Prebuilt Pages
          </h5>
          <h2 className="h2 mb-4 lg:mb-6">94+ Amazing Demos</h2>
          <p className="text-sm md:text-base">
            Dashboi ships with 94+ prebuilt pages, including dashboard and app
            examples, as well as collections like lists, grids, profile and
            personal pages and many other authentication and utility pages.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 xxl:gap-6">
          <div className="max-md:hidden md:col-span-4 lg:col-span-3 xxl:col-span-2">
            <div className="flex flex-col sticky top-20 xxl:top-32 gap-1 xxl:gap-2 bg-primary/5 px-3 py-4 rounded-xl border border-n30 dark:border-n500">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 lg:px-6 py-2.5 xxl:py-3 rounded-xl duration-300 text-start text-sm lg:text-base capitalize font-medium ${
                    activeCategory == category && "bg-primary text-n0"
                  }`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9 xxl:col-span-10 grid grid-cols-2 gap-x-4 xxl:gap-x-6">
            {currentItems
              .slice(0, sliceNum)
              .map(({ id, img, title, desc, url }) => (
                <Link
                  href={url}
                  key={id}
                  className="col-span-2 lg:col-span-1 group after:inset-0 after:duration-500 block rounded-xl relative after:absolute after:w-full after:h-[94%] after:rounded-xl hover:after:bg-primary/20">
                  <span className="md:px-10 text-sm lg:text-base px-5 py-2.5 xl:py-3.5 rounded-[32px] duration-300 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 bg-bg3 text-n0 font-semibold cursor-pointer absolute top-1/3 min-[450px]:top-5/12 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
                    View Demo
                  </span>
                  <Image
                    src={img}
                    alt="img"
                    className="rounded-xl border border-n30 dark:border-n500"
                  />
                  <div className="max-w-[90%] -translate-y-1/2 bg-n0 dark:bg-bg4 mx-auto rounded-xl border border-n30 dark:border-n500 py-4 px-6 xl:px-8">
                    <h6 className="h6 mb-1 font-semibold">{title}</h6>
                    <p className="text-xs">{desc}</p>
                  </div>
                </Link>
              ))}
            {path == "/" && (
              <div className="flex justify-center col-span-2">
                <Link href="/demos" className="btn-outline">
                  View all 94 Demos <IconArrowUpRight />{" "}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrebuiltPages;
