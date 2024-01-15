"use client";
import useTable from "@/utils/useTable";
import { faker } from "@faker-js/faker";
import {
  IconArrowUpRight,
  IconClock,
  IconInbox,
  IconPaperclip,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../shared/Pagination";

const tilesData = Array.from({ length: 70 }).map((_, i) => {
  return {
    id: i + 1,
    name: faker.helpers.arrayElement([
      "Chocolate Cake",
      "Vanilla Cake",
      "Red Velvet Cake",
      "Carrot Cake",
      "Lemon Cake",
      "Marble Cake",
      "Chocolate Cake",
      "Strawberry Cake",
    ]),
    img: `/images/cakes/cake-${faker.helpers.arrayElement([
      1, 2, 3, 4, 5, 6, 7, 8,
    ])}.png`,
    type: "Cakes",
    time: faker.helpers.arrayElement(["1h 20m", "2h 10m", "3h 30m"]),
    attachment: faker.helpers.rangeToNumber({ max: 9, min: 2 }),
  };
});

const TileGridThree = () => {
  const {
    currentPage,
    deleteItem,
    paginate,
    search,
    sortData,
    tableData,
    totalPages,
    nextPage,
    prevPage,
    startIndex,
    endIndex,
    totalData,
  } = useTable(tilesData, 18);

  return (
    <>
      <div className="grid grid-cols-12 gap-4 4xl:gap-6">
        {tableData.map(({ id, img, name, attachment, time, type }) => (
          <div
            key={id}
            className="box p-0 sm:p-3 min-[1900px]:p-4 col-span-12 md:col-span-6 xxxl:col-span-4">
            <div className="box p-3 md:p-4 bg-primary/5 dark:bg-bg3 4xl:p-6 flex gap-2 justify-between items-center">
              <div className="flex gap-3 4xl:gap-5">
                <Image
                  src={img}
                  width={60}
                  height={60}
                  className="rounded-2xl w-10 h-10 lg:w-14 lg:h-14"
                  alt="img"
                />
                <div>
                  <Link
                    href="#"
                    className="font-medium text-base block lg:text-lg 4xl:text-xl mb-2">
                    {name}
                  </Link>
                  <div className="flex text-xs sm:text-sm flex-wrap items-center gap-3 lg:gap-4 xxl:gap-6">
                    <span className="flex items-center gap-1">
                      <IconInbox size={18} /> {type}
                    </span>
                    <span className="flex items-center gap-1">
                      <IconClock size={18} /> {time}
                    </span>
                    <span className="flex items-center gap-1">
                      <IconPaperclip size={18} /> {attachment}
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="bg-n0 dark:bg-bg4 rounded-full p-2 4xl:p-3 border border-n30 dark:border-n500">
                <IconArrowUpRight />
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

export default TileGridThree;
