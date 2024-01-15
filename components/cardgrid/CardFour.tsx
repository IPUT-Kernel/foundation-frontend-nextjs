"use client";
import { faker } from "@faker-js/faker";
import { IconPencil } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { timeAgo } from "../../utils/timeAgo";
import useTable from "../../utils/useTable";
import Pagination from "../shared/Pagination";

const blogs = Array.from({ length: 35 }).map((_, i) => {
  return {
    id: i + 1,
    name: faker.person.firstName(),
    tag: "Productivity",
    img: `/images/gridfour/img-${faker.helpers.arrayElement([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ])}.png`,
    title: faker.word.words({ count: 8 }),
    author: faker.person.fullName(),
    authorImg: `/images/user-${faker.helpers.arrayElement([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ])}.png`,
    time: faker.date.past({ refDate: new Date() }),
  };
});

const CardFour = () => {
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
  } = useTable(blogs, 9);
  return (
    <>
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        {tableData.map(({ id, author, authorImg, img, time, title, tag }) => (
          <div
            key={id}
            className="box col-span-12 md:col-span-6 xl:col-span-4 p-3">
            <div className="flex flex-col items-center justify-center rounded-2xl h-full">
              <div>
                <Image
                  width={472}
                  height={306}
                  className="rounded-xl"
                  src={img}
                  alt="img"
                />
              </div>
              <div className="mt-6 lg:mt-8 md:px-3 xxxl:px-5 pb-3 lg:pb-5">
                <span className="text-sm px-5 py-2 inline-block rounded-3xl bg-primary/5 dark:bg-bg3 text-primary font-semibold">
                  {tag}
                </span>
                <Link
                  href="#"
                  className="mt-4 h4 bb-dashed block pb-4 mb-4 lg:mb-6 lg:pb-6">
                  {title}
                </Link>
                <div className="flex justify-between gap-1 items-center">
                  <div className="flex gap-2 xxxl:gap-4 items-center">
                    <div className="w-8 h-8 sm:w-11 sm:h-11">
                      <Image
                        src={authorImg}
                        className="rounded-full"
                        width={44}
                        height={44}
                        alt="author"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base md:font-semibold mb-1">
                        {author}
                      </p>
                      <span className="text-xs">{timeAgo(time)}</span>
                    </div>
                  </div>
                  <Link href="#" className="btn-outline">
                    <IconPencil size={18} /> <span>Edit</span>
                  </Link>
                </div>
              </div>
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

export default CardFour;
