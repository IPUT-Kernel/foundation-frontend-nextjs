"use client";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";
import { timeAgo } from "../../utils/timeAgo";
import useTable from "../../utils/useTable";
import OptionsVertical from "../shared/OptionsVertical";
import Pagination from "../shared/Pagination";

const projects = Array.from({ length: 43 }).map((_, i) => {
  return {
    id: i + 1,
    title: faker.helpers.arrayElement([
      "UI/UX Design Projects",
      "Web Disign Projects",
      "App Development Projects",
      "Front end development",
      "Backend Development",
      "Laravel Development Projects",
      "Python Gaming Projects",
      "NodeJS Website",
      "Machine Learning Projects",
    ]),
    img: `/images/projects/project-${faker.helpers.arrayElement([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ])}.png`,
    date: faker.date.past(),
  };
});

const CardTwo = () => {
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
        {tableData.map(({ id, title, img, date }) => (
          <div
            key={id}
            className="col-span-12 md:col-span-6 xl:col-span-4 box p-3">
            <div className="">
              <Image
                src={img}
                width={472}
                height={306}
                className="rounded-xl"
                alt="user img"
              />
            </div>
            <div className="mt-6 lg:mt-8 flex justify-between items-center pb-4 mb-4 md:mb-6 md:pb-6 bb-dashed px-2 sm:px-4 xl:px-6">
              <Link href="#">
                <h4 className="h4 mb-2 md:mb-3">{title}</h4>
                <span>{timeAgo(date)}</span>
              </Link>
              <OptionsVertical />
            </div>
            <div className="flex justify-center gap-4 lg:gap-6 pb-3 md:pb-5 px-2 sm:px-4 xl:px-6">
              <Link href="#" className="btn md:py-3 w-full flex justify-center">
                Tasks
              </Link>
              <Link
                href="#"
                className="btn-outline md:py-3 w-full flex justify-center">
                Activity
              </Link>
            </div>
          </div>
        ))}
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

export default CardTwo;
