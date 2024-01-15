"use client";

import { IconCheck, IconPhone, IconVideo } from "@tabler/icons-react";
import Image from "next/image";
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
    <div className="box col-span-2 md:col-span-1 xl:col-span-2">
      <div className="flex gap-6 mb-6 bb-dashed pb-6">
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
        <div className="flex flex-col gap-6">
          {teams.map(({ name, designation, img }) => (
            <div key={name} className="flex items-center justify-between">
              <div className="flex gap-2 xxl:gap-4 items-center">
                <Image
                  width={54}
                  height={54}
                  className="rounded-full"
                  src={img}
                  alt="img"
                />
                <div>
                  <p className="text-base sm:text-xl font-medium mb-2">
                    {name}
                  </p>
                  <p className="text-sm">{designation}</p>
                </div>
              </div>
              <div className="rounded-[32px] bg-primary/5 dark:bg-bg3 px-3 sm:px-4 xxl:px-8 py-3 md:py-4 flex items-center gap-2 sm:gap-3">
                <button>
                  <IconPhone size={20} />
                </button>
                <button>
                  <IconVideo size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {tasks.map(({ desc, title }) => (
            <div
              key={title}
              className="flex gap-3 lg:gap-4 xxl:gap-6 items-center">
              <div className="bg-primary/5 dark:bg-bg3 p-2 text-primary border border-n30 dark:border-n500 rounded-full ">
                <IconCheck size={30} />
              </div>
              <div>
                <p className="text-base md:text-lg lg:text-xl mb-2">{title}</p>
                <p className="text-sm md:text-base">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
