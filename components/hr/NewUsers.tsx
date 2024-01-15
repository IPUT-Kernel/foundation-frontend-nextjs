import { IconCheck, IconCirclePlus, IconMessage } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import SocialLinks from "../shared/SocialLinks";
import Calendar2 from "./Calender";
import Team from "./Team";

const users = [
  {
    name: "Wade Warren",
    designation: "UI/UX designer",
    img: "/images/user-big-1.png",
  },
  {
    name: "Paula Irving",
    designation: "Ethical Hacker",
    img: "/images/user-big-2.png",
  },
  {
    name: "Diana Prince",
    designation: "UI/UX designer",
    img: "/images/user-big-3.png",
  },
  {
    name: "Karen Starr",
    designation: "Project Manager",
    img: "/images/user-big-4.png",
  },
];
const NewUsers = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6 mt-4 xxxl:mt-6 xxxl:mb-6">
      <div className="col-span-12 xl:col-span-8 4xl:col-span-6">
        <div className="box">
          <div className="flex items-center justify-between bb-dashed pb-6 mb-6">
            <p className="font-medium">New Users</p>
            <Link href="#" className="btn-outline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 xxxl:gap-6">
            {users.map(({ name, img, designation }) => (
              <div
                className="col-span-2 min-[640px]:col-span-1 flex flex-col items-center text-center justify-center rounded-2xl bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 p-3 sm:p-4 lg:py-8 lg:px-4"
                key={name}>
                <div className="p-3 bg-n0 dark:bg-bg4 rounded-full relative">
                  <Image
                    width={120}
                    height={120}
                    className="rounded-full"
                    src={img}
                    alt="img"
                  />
                  <div className="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
                    <IconCheck size={18} />
                  </div>
                </div>
                <h4 className="mt-6 lg:mt-8 h4 mb-3">{name}</h4>
                <p className="mb-4 lg:mb-6">{designation}</p>
                {/* Social icons */}
                <div className="flex justify-center bb-dashed pb-6 mb-6">
                  <SocialLinks />
                </div>
                {/* follow buttons */}
                <div className="flex gap-3 flex-wrap justify-center">
                  <Link href="#" className="btn px-3 lg:px-6 py-1.5 lg:py-3">
                    <IconCirclePlus />
                    Follow
                  </Link>
                  <Link
                    href="#"
                    className="btn-outline py-1.5 px-3 lg:px-6 lg:py-3">
                    <IconMessage />
                    Message
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-4 4xl:col-span-6 grid grid-cols-2 gap-4 xxxl:gap-6 mb-4 xl:mb-0">
        <Team />
        <Calendar2 />{" "}
      </div>
    </div>
  );
};

export default NewUsers;
