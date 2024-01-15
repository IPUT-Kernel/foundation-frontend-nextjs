"use client";
import { sidebarData } from "@/public/data/sidebarData";
import useWindowSize from "@/utils/useWindowSize";
import { IconChevronRight, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "nextjs13-progress";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import AnimateHeight from "react-animate-height";

const SidebarHovered = ({
  setSidebar,
  sidebarIsOpen,
}: {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebarIsOpen: boolean;
}) => {
  const [activeMenu, setActiveMenu] = useState("");
  const path = usePathname();
  const { windowSize } = useWindowSize();

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const currentWindowSize = window.innerWidth;

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        if (currentWindowSize < 1400) {
          setSidebar(false);
        }
      }
    },
    [setSidebar]
  );

  useEffect(() => {
    sidebarData.map(({ items }) =>
      items.map(({ submenus, name }) =>
        submenus.map(({ url }) => (url == path ? setActiveMenu(name) : ""))
      )
    );
  }, [path]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const isActive = (submenus: any[]) => {
    return submenus.some(({ url }) => path == url);
  };
  return (
    <aside
      className={`xxl:w-20 group max-xxl:w-[320px] hover:xxl:w-[336px] z-[21] ${
        sidebarIsOpen
          ? "translate-x-0 visible"
          : "ltr:-translate-x-full rtl:translate-x-full invisible"
      } duration-300 fixed ltr:left-0 rtl:right-0 shadow-lg h-full bg-n0 dark:bg-bg4 top-0`}
      ref={sidebarRef}>
      <div className={`p-4 group-hover:lg:p-6 group-hover:xxl:p-[30px]`}>
        <div className="flex justify-between xxl:justify-center group-hover:justify-between items-center">
          <Link href="/">
            <Image
              width={174}
              height={38}
              src="/images/logo-with-text.png"
              alt="logo"
              className="xxl:hidden group-hover:xxl:block"
            />
            <Image
              width={36}
              height={36}
              src="/images/logoicon.png"
              alt="logo"
              className="hidden xxl:block group-hover:hidden"
            />
          </Link>
          <button onClick={() => setSidebar(false)} className="xxl:hidden">
            <IconX />
          </button>
        </div>
      </div>
      <div className="overflow-y-auto fixed right-0 left-0 h-full sidebar-hovered">
        <div className="px-4 group-hover:lg:px-6 group-hover:xxl:px-8 pb-24">
          {sidebarData.map(({ id, items, title }) => (
            <React.Fragment key={id}>
              <p className="text-xs font-semibold py-3 group-hover:xxl:py-6 border-t-2 border-dashed border-primary/20">
                <span className="hidden group-hover:block">{title}</span>
              </p>
              <ul className="mb-5 flex flex-col gap-2 ">
                {items.map(
                  ({ id, icon, name, submenus }) =>
                    submenus && (
                      <li
                        key={id}
                        className={`relative ${
                          activeMenu == name &&
                          "bg-primary/5 dark:bg-bg3 rounded-xl xxl:rounded-full group-hover:rounded-xl"
                        }`}>
                        <button
                          onClick={() =>
                            setActiveMenu((p) => (p == name ? "" : name))
                          }
                          className={`max-lg:px-4 max-xxl:px-6 max-xxl:w-full max-xxl:py-3 group-hover:w-full group/btn xxl:bg-primary/5 group-hover:bg-n0 dark:group-hover:bg-bg4 group-hover:border-none xxl:border xxl:border-n30 xxl:dark:border-n500 flex max-xxl:justify-between group-hover:justify-between xxl:h-12 justify-center xxl:w-12 items-center group-hover:lg:px-6 py-2 group-hover:lg:py-3 max-xxl:rounded-2xl xxl:rounded-full group-hover:rounded-2xl hover:!bg-primary hover:text-n0 ${
                            activeMenu == name && "!bg-primary text-n0"
                          } ${path == name && "!bg-primary text-n0"} ${
                            isActive(submenus) && "!bg-primary text-n0"
                          }`}>
                          <span className="flex items-center max-xl:gap-2 group-hover:gap-2">
                            <span
                              className={`text-primary group-hover/btn:text-n0  ${
                                activeMenu == name && " !text-n0"
                              } ${isActive(submenus) && " !text-n0"}`}>
                              {icon}
                            </span>
                            <span className="font-medium xxl:hidden group-hover:block">
                              {name}
                            </span>
                          </span>
                          <IconChevronRight
                            className={`xxl:hidden rtl:rotate-180 group-hover:block ${
                              activeMenu == name &&
                              "ltr:rotate-90 rtl:rotate-90"
                            }`}
                          />
                        </button>
                        <AnimateHeight height={activeMenu == name ? "auto" : 0}>
                          <ul
                            className={`px-4 xxl:px-5 py-3 xxl:hidden group-hover:block`}>
                            {submenus.map(({ title, url }) => (
                              <li
                                onClick={() => {
                                  setActiveMenu(name);
                                  windowSize! < 1400 &&
                                    setSidebar(!sidebarIsOpen);
                                }}
                                key={title}>
                                <Link
                                  className={`font-medium block text-sm lg:text-base py-2 md:py-3 px-6 ${
                                    path == url && "text-primary"
                                  }`}
                                  href={url}>
                                  <span className="pr-1">•</span> {title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AnimateHeight>
                      </li>
                    )
                )}
              </ul>
            </React.Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarHovered;
