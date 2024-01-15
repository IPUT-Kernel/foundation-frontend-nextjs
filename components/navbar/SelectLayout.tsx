"use client";
import { useLayout } from "@/utils/LayoutContext";
import useDropdown from "@/utils/useDropdown";
import { IconChevronDown, IconLayoutSidebar } from "@tabler/icons-react";

export const layoutList = ["Vertical", "Two Column", "Hovered", "Horizontal"];

const SelectLayout = ({ isWhite }: { isWhite?: boolean }) => {
  const { open, ref, toggleOpen } = useDropdown();
  const { layout, changeLayout } = useLayout();
  return (
    <div
      ref={ref}
      className="relative xxl:min-w-[272px] min-w-[250px] hidden lg:block">
      <div
        onClick={toggleOpen}
        className={` ${
          isWhite
            ? "bg-n0 dark:bg-bg4 border border-n30 dark:border-n500"
            : "bg-primary/5 dark:bg-bg3"
        } cursor-pointer w-full rounded-[30px] py-3 flex items-center justify-between gap-2 px-4 xxl:px-6`}>
        <span className="flex items-center gap-2 select-none">
          <IconLayoutSidebar className="text-primary" />
          {layout}
        </span>
        <IconChevronDown
          className={`shrink-0 ${open && "rotate-180"} duration-300`}
        />
      </div>
      <ul
        className={`absolute top-full bg-n0 dark:bg-n800 duration-300 origin-top shadow-md rounded-lg z-20 left-0 p-2 w-full ${
          open ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"
        }`}>
        {layoutList.map((item) => (
          <li
            onClick={() => {
              changeLayout(item);
              toggleOpen();
            }}
            className={`p-2 block select-none rounded-md hover:text-primary cursor-pointer duration-300 ${
              layout == item ? "bg-primary text-n0 hover:!text-n0" : ""
            }`}
            key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectLayout;
