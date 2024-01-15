"use client";

import { IconCheck, IconPhone, IconVideo } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const teams = [
  {
    name: "Devon Lane",
    designation: "Software Tester",
    img: "/images/user-big-1.png",
  },
  {
    name: "Wade Warren",
    designation: "Ethical Hacker",
    img: "/images/user-big-2.png",
  },
  {
    name: "Cody Fisher",
    designation: "Software Tester",
    img: "/images/user-big-3.png",
  },
  {
    name: "Telegram",
    designation: "Scrum Master",
    img: "/images/user-big-4.png",
  },
  {
    name: "Theresa Webb",
    designation: "UI/UX Designer",
    img: "/images/user-big-1.png",
  },
  {
    name: "Ralf Edwards",
    designation: "Team Leader",
    img: "/images/user-big-2.png",
  },
];
const tasks = [
  {
    title: "Call Mr. Floyd Miles",
    desc: "Review the project initial wireframes",
  },
  {
    title: "Finish wireframes",
    desc: "Make all requested changes and publish",
  },
  {
    title: "Update timesheets",
    desc: "Update all the team timesheets",
  },
  {
    title: "Request payout",
    desc: "Send project invoice to client",
  },
  {
    title: "Approve components",
    desc: "Review complete design system",
  },
  {
    title: "Request Cancel",
    desc: "Send project Cancel Notice",
  },
];
const Team = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="box col-span-12 md:col-span-6 xl:col-span-4 box">
      <div className="flex gap-4 md:gap-6 mb-6 bb-dashed pb-6">
        <button
          onClick={() => setActive(1)}
          className={`w-full rounded-xl py-3 duration-300 ${
            active == 1
              ? "bg-primary text-n0 shadow-[0px_6px_30px_0px_rgba(93,105,244,0.40)]"
              : "bg-primary/5 dark:bg-bg3 "
          }`}>
          Team
        </button>
        <button
          onClick={() => setActive(2)}
          className={`w-full rounded-xl py-3 duration-300 ${
            active == 2
              ? "bg-primary text-n0 shadow-[0px_6px_30px_0px_rgba(93,105,244,0.40)]"
              : "bg-primary/5 dark:bg-bg3 "
          }`}>
          Tasks
        </button>
      </div>
      {active == 1 ? (
        <div className="flex flex-col gap-3 md:gap-6">
          {teams.map(({ name, designation, img }) => (
            <div key={name} className="flex items-center justify-between">
              <Link href="#" className="flex md:gap-4 gap-3 items-center">
                <div className="w-10 h-10 md:w-14 md:h-14">
                  <Image
                    className="rounded-full"
                    width={54}
                    height={54}
                    src={img}
                    alt="img"
                  />
                </div>
                <div>
                  <p className="text-base sm:text-lg md:text-xl font-medium mb-2">
                    {name}
                  </p>
                  <p className="text-xs md:text-sm">{designation}</p>
                </div>
              </Link>
              <div className="rounded-[32px] bg-primary/5 dark:bg-bg3 px-3 md:px-5 xxxl:px-8 py-2 sm:py-3 md:py-4 flex items-center gap-3">
                <button>
                  <IconPhone size={22} />
                </button>
                <button>
                  <IconVideo size={22} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 md:gap-6">
          {tasks.map(({ desc, title }) => (
            <Link
              href="#"
              key={title}
              className="flex gap-4 md:gap-6 items-center">
              <div className="bg-primary/5 dark:bg-bg3 p-1 md:p-2 text-primary border border-n30 dark:border-n500 rounded-full ">
                <IconCheck size={30} />
              </div>
              <div>
                <p className="text-base md:text-lg xl:text-xl mb-2">{title}</p>
                <p className="text-sm md:text-base">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
