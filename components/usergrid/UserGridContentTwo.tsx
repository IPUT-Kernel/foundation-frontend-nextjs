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
const users = Array.from({ length: 38 }).map((_, i) => {
  return {
    id: i + 1,
    name: faker.person.fullName(),
    img: `/images/user-big-${faker.helpers.arrayElement([
      2, 3, 4, 5, 6, 7, 8, 9,
    ])}.png`,
    designation: faker.person.jobTitle(),
  };
});

const UserGridContentTwo = () => {
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
  } = useTable(users, 8);
  return (
    <>
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        {tableData.map(({ name, designation, img }) => (
          <div
            key={name}
            className="box p-2 sm:p-3 xxxl:p-6 col-span-12 lg:col-span-6">
            <div className="bg-primary/5 dark:bg-bg3 flex min-[480px]:items-start items-center p-3 flex-col min-[480px]:flex-row rounded-2xl h-full xl:p-6 gap-4 xxxl:gap-8 4xl:gap-12 xxxl:p-8">
              <div className="p-3 bg-n0 dark:bg-bg4 rounded-full relative shrink-0">
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
              <div className="grow max-[479px]:text-center">
                <Link href="#">
                  <h4 className="h4 mb-3">{name}</h4>
                  <p className="mb-4 lg:mb-6">{designation}</p>
                </Link>
                {/* Social icons */}
                <div className="flex max-[479px]:justify-center bb-dashed pb-6 mb-6 w-full">
                  <SocialLinks />
                </div>
                {/* follow buttons */}
                <div className="flex gap-3 xxxl:gap-6 justify-start">
                  <Link href="#" className="btn lg:px-4 xxxl:px-6 border">
                    <IconCirclePlus /> <span>Follow</span>
                  </Link>
                  <Link href="#" className="btn-outline lg:px-4 xxxl:px-6">
                    <IconMessageDots /> <span>Message</span>
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

export default UserGridContentTwo;
