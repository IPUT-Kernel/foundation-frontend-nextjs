"use client";
import useDropdown from "@/utils/useDropdown";
import { IconDotsVertical } from "@tabler/icons-react";
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
const OptionsVertical = ({ fromBottom }: { fromBottom?: boolean }) => {
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div className="relative top-0 " ref={ref}>
      <IconDotsVertical onClick={toggleOpen} className="cursor-pointer" />
      <ul
        className={`${open ? "block" : "hidden"} absolute ${
          fromBottom ? "bottom-0" : "top-0"
        } ltr:right-5 rtl:left-5 border z-[18] dark:border-n500 min-w-[120px] p-1.5 rounded-md bg-n0 dark:bg-bg4`}>
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

export default OptionsVertical;
