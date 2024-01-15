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
    img: `/images/users/user-${faker.helpers.arrayElement([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ])}.png`,
    designation: faker.person.jobTitle(),
  };
});

const UserGridContentThree = () => {
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
            className="box shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)] border-none p-3 col-span-12 md:col-span-6 xl:col-span-4">
            <div className="bg-primary/5 box dark:bg-bg3 rounded-2xl h-full p-3">
              <div className="bg-secondary3dark flex justify-center rounded-xl relative w-full">
                <Image
                  width={448}
                  height={600}
                  src={img}
                  className="rounded-xl"
                  alt="img"
                />
                <div className="p-1 absolute right-8 -bottom-4 border border-n0 dark:border-bg4 bg-primary rounded-full text-n0">
                  <IconCheck size={28} />
                </div>
              </div>
              <div className=" flex flex-col items-center justify-center  p-4 md:p-6 xl:p-8">
                <Link href="#" className="text-center">
                  <h4 className="h4 mb-3">{name}</h4>
                  <p className="mb-4 lg:mb-6">{designation}</p>
                </Link>
                {/* Social icons */}
                <div className="flex justify-center bb-dashed pb-6 mb-6 w-full">
                  <SocialLinks />
                </div>
                {/* follow buttons */}
                <div className="flex gap-3 xxxl:gap-6 justify-center w-full">
                  <Link href="#" className="btn md:px-3 xxxl:px-6">
                    <IconCirclePlus /> <span>Follow</span>
                  </Link>
                  <Link href="#" className="btn-outline md:px-3 xxxl:px-6">
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

export default UserGridContentThree;
