"use client";
import useDropdown from "@/utils/useDropdown";
import { IconChevronDown, IconWorld } from "@tabler/icons-react";
import { useState } from "react";
const languages = ["English", "Arabic", "Bangla", "Spanish"];
const SwitchLanguage = ({ isWhite }: { isWhite?: boolean }) => {
  const [selected, setSelected] = useState(languages[0]);
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={toggleOpen}
        className={`flex gap-1 p-2 sm:p-3 rounded-full ${
          isWhite
            ? "bg-n0 dark:bg-bg4 border border-n30 dark:border-n500"
            : "bg-primary/5 dark:bg-bg3"
        }`}>
        <IconWorld />
        <IconChevronDown size={22} />
      </button>
      <div
        className={`bg-n0 border dark:border-n500 ltr:origin-top-right rtl:origin-top-left dark:bg-n800 rounded-md ltr:right-0 rtl:left-0 shadow-lg absolute top-full duration-300 ${
          open ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"
        }`}>
        <ul className="flex flex-col w-32 bg-n0 p-1 rounded-md dark:bg-bg4">
          {languages.map((lang) => (
            <li
              key={lang}
              onClick={() => {
                setSelected(lang);
                toggleOpen();
              }}
              className={`px-4 block py-2 rounded-md cursor-pointer duration-300 hover:text-primary ${
                selected == lang && "bg-primary text-n0 hover:!text-n0"
              }`}>
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SwitchLanguage;
