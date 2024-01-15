"use client";
import useTable from "@/utils/useTable";
import { faker } from "@faker-js/faker";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import Pagination from "../shared/Pagination";

export const tilesData = Array.from({ length: 80 }).map((_, i) => {
  return {
    id: i + 1,
    name: faker.word.words({ count: 3 }),
    img: `/images/files/${faker.helpers.arrayElement([
      "gif-big",
      "html-big",
      "wma-big",
      "html-big",
      "mp4-big",
    ])}.png`,
    size: `${faker.number.float({ max: 9, min: 2, precision: 0.1 })}MB`,
    version: "1.2.0",
  };
});

const TileGridTwo = () => {
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
  } = useTable(tilesData, 27);

  return (
    <>
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        {tableData.map(({ id, img, name, size, version }) => (
          <div
            key={id}
            className="col-span-12 md:col-span-6 xl:col-span-4 box p-2 sm:p-3 xl:p-6 flex justify-between items-center">
            <div className="flex gap-2 sm:gap-3 lg:gap-5 items-center">
              <Image
                src={img}
                width={60}
                height={60}
                className="rounded-lg lg:rounded-2xl w-10 h-10 lg:w-14 lg:h-14"
                alt="img"
              />
              <div>
                <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-2">
                  {name}
                </p>
                <span className="flex text-sm items-center gap-2">
                  <span>{size}</span>
                  <span className="text-xs">•</span>
                  <span>{version}</span>
                </span>
              </div>
            </div>
            <button className="bg-primary/5 dark:bg-bg3 rounded-full p-2 md:p-3 border border-n30 dark:border-n500">
              <IconDownload />
            </button>
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

export default TileGridTwo;
