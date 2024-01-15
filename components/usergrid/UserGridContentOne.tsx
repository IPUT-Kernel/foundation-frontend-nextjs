"use client";
import useTable from "@/utils/useTable";
import { faker } from "@faker-js/faker";
import {
  IconCheck,
  IconCirclePlus,
  IconMessageDots,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../shared/Pagination";
import SocialLinks from "../shared/SocialLinks";

const users = Array.from({ length: 42 }).map((_, i) => {
  return {
    id: i + 1,
    name: faker.person.fullName(),
    img: `/images/user-big-${faker.helpers.arrayElement([
      2, 3, 4, 5, 6, 7, 8, 9,
    ])}.png`,
    designation: faker.person.jobTitle(),
  };
});

const UserGridContentOne = () => {
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
  } = useTable(users, 9);
  return (
    <>
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        {tableData.map(({ id, name, designation, img }) => (
          <div
            key={id}
            className="box p-2 sm:p-3 xxxl:p-6 col-span-12 min-[650px]:col-span-6 lg:col-span-4">
            <div className="bg-primary/5 dark:bg-bg3 flex flex-col items-center justify-center rounded-2xl h-full py-5 px-4 xl:py-8 xl:px-6">
              <div className="p-3 bg-n0 dark:bg-bg4 rounded-full relative">
                <Image
                  width={120}
                  height={120}
                  className="rounded-full"
                  src={img}
                  alt="img"
                />
                <div className="p-1 absolute right-2 border border-n0 dark:border-bg4 bottom-10 bg-primary rounded-full text-n0">
                  <IconCheck size={18} />
                </div>
              </div>
              <Link href="#" className="text-center">
                <h4 className="mt-6 lg:mt-8 h4 mb-3">{name}</h4>
                <p className="mb-4 lg:mb-6">{designation}</p>
              </Link>
              {/* Social icons */}
              <div className="flex justify-center bb-dashed pb-6 mb-6 w-full">
                <SocialLinks />
              </div>
              {/* follow buttons */}
              <div className="flex gap-3  xxxl:gap-6 justify-center w-full">
                <Link
                  href="#"
                  className="btn px-3 xxxl:px-5  border border-primary font-semibold flex justify-center w-full">
                  <IconCirclePlus /> <span>Follow</span>
                </Link>
                <Link
                  href="#"
                  className="btn-outline  px-3 xxxl:px-5 flex justify-center w-full">
                  <IconMessageDots /> <span>Message</span>
                </Link>
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

export default UserGridContentOne;
