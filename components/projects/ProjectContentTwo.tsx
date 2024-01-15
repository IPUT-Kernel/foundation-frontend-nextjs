"use client";
import useTable from "@/utils/useTable";
import { IconMessageDots, IconThumbUp } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../shared/Pagination";
import { projects } from "./ProjectContentOne";

const ProjectContentTwo = () => {
  const {
    currentPage,
    paginate,
    tableData,
    totalPages,
    nextPage,
    prevPage,
    startIndex,
    endIndex,
    totalData,
  } = useTable(projects, 9);
  return (
    <>
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        {tableData.map(
          ({
            id,
            category,
            comments,
            companyImg,
            desc,
            img,
            likes,
            remainingTasks,
            title,
          }) => (
            <div
              key={id}
              className="col-span-12 md:col-span-6 xl:col-span-4 box p-3">
              <div className="p-4 md:p-6 xl:p-7">
                <Link
                  href="/project-details"
                  className="flex items-center gap-4 xxxl:gap-5 bb-dashed mb-6 pb-6">
                  <Image
                    src={companyImg}
                    width={60}
                    height={60}
                    className="rounded-full w-10 h-10 lg:w-14 lg:h-14"
                    alt="company icon"
                  />
                  <div>
                    <p className="text-base sm:text-lg lg:text-xl font-medium mb-2">
                      {title}
                    </p>
                    <div className="flex text-xs md:text-sm items-center gap-2">
                      <span>{category}</span>
                      <span className="text-xs">•</span>
                      <span>{desc}</span>
                    </div>
                  </div>
                </Link>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <IconThumbUp size={22} /> {likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <IconMessageDots size={22} /> {comments}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <Image
                      src="/images/html.png"
                      width={24}
                      height={24}
                      alt="icon"
                    />
                    <Image
                      src="/images/python.png"
                      width={24}
                      height={24}
                      alt="icon"
                    />
                    <Image
                      src="/images/android.png"
                      width={24}
                      height={24}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
              <div className="px-3 lg:px-6 xxxl:px-8 py-3 rounded-2xl bg-primary/5 dark:bg-bg3 flex justify-between items-center">
                <div className="flex">
                  <Image
                    src="/images/user-2.png"
                    width={24}
                    height={24}
                    className="border border-n0 dark:border-n500 -mr-2 rounded-full"
                    alt="img"
                  />
                  <Image
                    src="/images/user-3.png"
                    width={24}
                    height={24}
                    className="border border-n0 dark:border-n500 -mr-2 rounded-full"
                    alt="img"
                  />
                  <Image
                    src="/images/user-4.png"
                    width={24}
                    height={24}
                    className="border border-n0 dark:border-n500 -mr-2 rounded-full"
                    alt="img"
                  />
                  <Image
                    src="/images/user-5.png"
                    width={24}
                    height={24}
                    className="border border-n0 dark:border-n500 -mr-2 rounded-full"
                    alt="img"
                  />
                  <Image
                    src="/images/user-6.png"
                    width={24}
                    height={24}
                    className="border border-n0 dark:border-n500 -mr-2 rounded-full"
                    alt="img"
                  />
                </div>
                <span className="text-xs sm:text-sm md:text-base">
                  {remainingTasks} tasks remaining
                </span>
              </div>
            </div>
          )
        )}
      </div>
      <div className="mt-6 xl:mt-8">
        <Pagination
          endIndex={endIndex}
          total={totalData}
          totalPages={totalPages}
          currentPage={currentPage}
          goToPage={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          startIndex={startIndex}
        />
      </div>
    </>
  );
};

export default ProjectContentTwo;
