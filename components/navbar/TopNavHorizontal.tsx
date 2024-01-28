import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import HorizontalLayout from "./HorizontalLayout";
import ModeSwitcher from "./ModeSwitcher";
import Profile from "./Profile";
import Search from "./Search";

import logoIcon from "@/public/images/logoicon.png";

const TopNavHorizontal = ({
  setSidebar,
  sidebarIsOpen,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}) => {
  return (
    <nav className="bg-[#F7F7FE] dark:bg-bg3 shadow-md w-full mx-auto fixed z-40">
      <div
        className={`px-3 py-3 duration-300 navbar-top z-30 max-w-[1700px] w-full mx-auto md:py-4 xl:py-6 gap-3 flex justify-between items-center`}>
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              width={174}
              height={38}
              src="/images/logoicon.png"
              alt="logo"
              className="hidden lg:block"
            />
          </Link>
          <button onClick={() => setSidebar(false)} className="xxl:hidden">
            <IconX />
          </button>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 xxl:gap-6">
          <Search />
          <ModeSwitcher isWhite={true} />
          <Profile />
        </div>
      </div>
      <HorizontalLayout />
    </nav>
  );
};

export default TopNavHorizontal;
