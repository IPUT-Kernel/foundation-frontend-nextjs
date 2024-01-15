"use client";
import useTable from "@/utils/useTable";
import { faker } from "@faker-js/faker";
import { IconCirclePlus, IconMessageDots } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../shared/Pagination";
import SocialLinks from "../shared/SocialLinks";

const users = Array.from({ length: 38 }).map((_, i) => {
  return {
    id: i + 1,
    name: faker.person.fullName(),
    img: `/images/users/user-${faker.helpers.arrayElement([
      2, 3, 4, 5, 6, 7, 8, 9,
    ])}.png`,
    designation: faker.person.jobTitle(),
  };
});

const UserGridContentFour = () => {
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
        {tableData.map(({ id, name, designation, img }) => (
          <div
            key={id}
            className="box p-2 xxxl:p-3 col-span-12 sm:col-span-6 md:col-span-12 min-[1150px]:col-span-6">
            <div className="bg-primary/5 dark:bg-bg3 flex items-start flex-col md:flex-row rounded-2xl h-full gap-3 xxxl:gap-6 4xl:gap-8 p-2 xxxl:p-3">
              <div className="rounded-xl max-md:w-full shrink-0 bg-secondary3dark">
                <Image
                  width={268}
                  height={240}
                  className="rounded-2xl max-md:w-full"
                  src={img}
                  alt="img"
                />
              </div>
              <div className="grow pt-3">
                <Link href="#">
                  <h4 className="h4 mb-3">{name}</h4>
                  <p className="mb-4 lg:mb-6">{designation}</p>
                </Link>
                {/* Social icons */}
                <div className="flex bb-dashed pb-5 mb-5 w-full">
                  <SocialLinks />
                </div>
                {/* follow buttons */}
                <div className="flex gap-2 4xl:gap-6 justify-start">
                  <Link
                    href="#"
                    className="btn md:px-2 4xl:px-6 xxxl:px-4 xxxl:py-3 py-2">
                    <IconCirclePlus /> <span>Follow</span>
                  </Link>
                  <Link
                    href="#"
                    className="btn-outline md:px-2 4xl:px-6 xxxl:px-4 xxxl:py-3 py-2">
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

export default UserGridContentFour;
