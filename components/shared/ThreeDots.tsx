"use client";
import useDropdown from "@/utils/useDropdown";
import { IconDots } from "@tabler/icons-react";
import Link from "next/link";
const options = [
  {
    title: "Edit",
    url: "#",
  },
  {
    title: "Delete",
    url: "#",
  },
  {
    title: "Share",
    url: "#",
  },
];
const ThreeDots = () => {
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div ref={ref} className="relative">
      <IconDots onClick={toggleOpen} className="cursor-pointer" />
      <ul
        className={`${
          open ? "visible opacity-100" : "invisible opacity-0"
        } absolute top-full ltr:right-0 rtl:left-0 border dark:border-n500 min-w-max bg-n0 z-[3] dark:bg-bg3 p-1.5 rounded-md`}>
        {options.map(({ title, url }) => (
          <li key={title}>
            <Link
              href={url}
              className="py-1.5 hover:bg-primary rounded-md hover:text-n30 duration-300 block px-3">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreeDots;
