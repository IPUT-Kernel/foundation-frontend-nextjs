"use client";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const rules = [
  {
    title: "React",
    icon: "/images/roles/react.png",
  },
  {
    title: "HTML",
    icon: "/images/roles/html.png",
  },
  {
    title: "css",
    icon: "/images/roles/css.png",
  },
  {
    title: "Javascript",
    icon: "/images/roles/js.png",
  },
  {
    title: "Typescript",
    icon: "/images/roles/typescript.png",
  },
  {
    title: "Angular",
    icon: "/images/roles/angular.png",
  },
  {
    title: "JQuery",
    icon: "/images/roles/jquery.png",
  },
  {
    title: "SASS/SCSS",
    icon: "/images/roles/sass.png",
  },
  {
    title: "Bootstrap",
    icon: "/images/roles/bootstrap.png",
  },
  {
    title: "Python",
    icon: "/images/roles/python.png",
  },
  {
    title: "Node.js",
    icon: "/images/roles/node.png",
  },
  {
    title: "Ruby",
    icon: "/images/roles/ruby.png",
  },
  {
    title: "Java",
    icon: "/images/roles/java.png",
  },
  {
    title: "C#",
    icon: "/images/roles/csharp.png",
  },
  {
    title: "PHP",
    icon: "/images/roles/php.png",
  },
  {
    title: "Go",
    icon: "/images/roles/go.png",
  },
  {
    title: "Perl",
    icon: "/images/roles/pearl.png",
  },
  {
    title: "Dart",
    icon: "/images/roles/dart.png",
  },
];
const RoleSelection = () => {
  const [selected, setSelected] = useState(rules[0].title);
  return (
    <div>
      <div className="max-w-lg mx-auto text-center mb-10 lg:mb-[60px]">
        <h2 className="h2 mb-6">Choose a profile</h2>
        <p>Pick one of the following roles based on your skills</p>
      </div>
      <div className="grid grid-cols-12 xl:grid-cols-10 4xl:grid-cols-12 gap-4 xxxl:gap-6">
        {rules.map(({ title, icon }) => (
          <div
            key={title}
            onClick={() => setSelected(title)}
            className={`col-span-12 min-[480px]:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 box p-4 cursor-pointer ${
              selected == title && "border-primary dark:border-primary"
            }`}>
            <div className="rounded-2xl bg-primary/5 dark:bg-bg3 p-8 flex items-center flex-col relative">
              {selected == title && (
                <IconCircleCheckFilled className="text-primary absolute -top-2 -right-2" />
              )}
              <div className="rounded-full w-16 h-16 mb-3 p-2 inline-block border border-n30 dark:border-n500 bg-n0 dark:bg-bg3 text-primary">
                <Image src={icon} width={60} height={60} alt="icon" />
              </div>
              <h5 className="text-xl font-medium text-center">{title}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-sm flex justify-center items-center mt-7 gap-5 lg:mt-10">
        <button className="btn">Choose Profile</button>
        <Link href="">Read More</Link>
      </div>
    </div>
  );
};

export default RoleSelection;
