"use client";
import useDropdown from "@/utils/useDropdown";
import { IconMapPin } from "@tabler/icons-react";
type dropdownProps = {
  items: string[];
  selected?: string;
  setSelected: (item: string) => void;
  width?: string;
};
const Location = ({ items, selected, setSelected, width }: dropdownProps) => {
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div className="relative" ref={ref}>
      <div
        onClick={toggleOpen}
        className={`border text-sm select-none cursor-pointer border-n40 dark:border-n500 flex gap-2 justify-between items-center rounded-[30px] bg-primary/5 dark:bg-bg3 px-6 py-3 ${
          width ? width : "min-w-[170px]"
        }`}>
        {selected} <IconMapPin size={20} />
      </div>
      <ul
        className={`absolute max-h-[200px] overflow-y-auto flex-col z-[3] ${
          width ? width : "min-w-[170px]"
        } top-full right-0 border bg-n0 dark:bg-bg4 p-2 rounded-md shadow-md border-n30 dark:border-n500 ${
          open ? "flex visible opacity-100" : "hidden invisible opacity-0"
        }`}>
        {items.map((item) => (
          <li
            onClick={() => {
              setSelected(item);
              toggleOpen();
            }}
            key={item}
            className={`px-4 py-2 cursor-pointer hover:text-primary rounded-md duration-300 ${
              selected == item && "bg-primary text-n0 hover:!text-n0"
            }`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
