import useDropdown from "@/utils/useDropdown";
import {
  IconArchive,
  IconDotsVertical,
  IconInfoOctagon,
  IconMailOpened,
  IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";

const Options = ({
  checked,
  deleteSelected,
}: {
  checked?: boolean;
  deleteSelected: () => void;
}) => {
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div ref={ref} className="relative">
      <button onClick={toggleOpen} className="flex items-center">
        <IconDotsVertical />
      </button>
      <div
        className={`absolute  ltr:origin-top-left rtl:origin-top-right ${
          open ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"
        } top-full ltr:-right-16 ltr:md:left-0 rtl:-left-16 rtl:right-0 z-[3] flex-col w-40 bg-n0 rounded-md py-2 dark:bg-bg4 border min-w-[220px] border-n30 dark:border-n500`}>
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-2 hover:bg-primary/10 duration-300 border-b border-30 dark:border-n500">
          <IconMailOpened size={22} />
          <span>Mark all as read</span>
        </Link>
        {checked ? (
          <>
            <button
              onClick={deleteSelected}
              className="flex items-center w-full gap-3 px-4 py-2 hover:bg-primary/10 duration-300 border-b border-30 dark:border-n500">
              <IconTrash size={22} />
              <span>Delete</span>
            </button>
            <button className="flex items-center w-full gap-3 px-4 py-2 hover:bg-primary/10 duration-300 border-b border-30 dark:border-n500">
              <IconArchive size={22} />
              <span>Archive</span>
            </button>
            <button className="flex items-center w-full gap-3 px-4 py-2 hover:bg-primary/10 duration-300 border-b border-30 dark:border-n500">
              <IconInfoOctagon size={22} />
              <span>Report spam</span>
            </button>
          </>
        ) : (
          <p className="italic px-4 py-3 text-sm">
            Select messages to see more actions
          </p>
        )}
      </div>
    </div>
  );
};

export default Options;
