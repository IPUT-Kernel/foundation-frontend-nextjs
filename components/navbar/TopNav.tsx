import { useLayout } from "@/utils/LayoutContext";
import { IconMenu2, IconSearch } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";
import ModeSwitcher from "./ModeSwitcher";
import Notification from "./Notification";
import Profile from "./Profile";
import SelectLayout from "./SelectLayout";
import SwitchLanguage from "./SwitchLanguage";

const TopNav = ({
  setSidebar,
  sidebarIsOpen,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}) => {
  const { layout } = useLayout();
  return (
    <nav
      className={`px-4 xxl:px-6 py-3 shadow-sm duration-300 dark:border-b dark:border-n700 navbar-top z-20 ${
        sidebarIsOpen && layout == "Two Column"
          ? "w-full xxxl:w-[calc(100%-360px)] xxl:w-[calc(100%-280px)] ltr:xxxl:ml-[360px] ltr:xxl:ml-[280px] rtl:xxxl:mr-[360px] rtl:xxl:mr-[280px]"
          : "w-full"
      } ${
        sidebarIsOpen && layout == "Vertical"
          ? "w-full xxl:w-[calc(100%-280px)] xxxl:w-[calc(100%-336px)] ltr:xxl:ml-[280px] ltr:xxxl:ml-[336px] rtl:xxl:mr-[280px] rtl:xxxl:mr-[336px]"
          : "w-full"
      }  ${
        sidebarIsOpen && layout == "Hovered"
          ? "w-full xxl:w-[calc(100%-80px)] ltr:xxl:ml-[80px] rtl:xxl:mr-[80px] "
          : "w-full"
      }  md:py-4 xxl:py-6 gap-3 bg-n0 dark:bg-bg4 fixed flex justify-between items-center`}>
      <div className="flex grow md:gap-4 xxl:gap-6 items-center">
        <button onClick={() => setSidebar(!sidebarIsOpen)}>
          <IconMenu2 />
        </button>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-primary/5 dark:bg-bg3 hidden md:flex gap-3 rounded-[30px] border border-transparent focus-within:border-primary px-6 xxl:px-8 items-center justify-between max-w-[493px] w-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent py-2 md:py-2.5 xxl:py-3 focus:outline-none w-full"
          />
          <button>
            <IconSearch />
          </button>
        </form>
        <SelectLayout />
      </div>
      <div className="flex items-center gap-3 sm:gap-4 xxl:gap-6">
        <ModeSwitcher />
        <Notification />
        <SwitchLanguage />
        <Profile />
      </div>
    </nav>
  );
};

export default TopNav;
