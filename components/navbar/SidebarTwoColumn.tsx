"use client";
import { sidebarData } from "@/public/data/sidebarData";
import useWindowSize from "@/utils/useWindowSize";
import { IconX } from "@tabler/icons-react";
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

const SidebarTwoColumn = ({
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
  const isActive = (submenus: any[]) => {
    return submenus.some(({ url }) => path == url);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <aside
      className={`w-[280px] xxxl:w-[360px] z-[21] bg-n0 dark:bg-bg3 ${
        sidebarIsOpen
          ? "translate-x-0 visible"
          : "ltr:-translate-x-full rtl:translate-x-full invisible"
      } duration-300 sidebar fixed ltr:left-0 rtl:right-0 h-full top-0`}
      ref={sidebarRef}>
      <div className="flex">
        <div className="h-screen shrink-0 bg-primary/5 dark:bg-bg3">
          <div className="p-4 xxxl:p-6 ">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="rounded-full p-2 inline-block border-n30 dark:border-n500 bg-n0 dark:bg-bg3">
                <Image
                  width={36}
                  height={36}
                  src="/images/logoicon.png"
                  className="w-full"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="overflow-y-auto fixed h-full sidebar-hovered">
            <div className="px-4 xxxl:px-6 pb-20">
              {sidebarData.map(({ id, items, title }) => (
                <React.Fragment key={id}>
                  {/* <p className="text-xs font-semibold py-4 lg:py-6 border-t-2 border-dashed border-primary/20">
                {title}
              </p> */}
                  <ul className="mb-5 flex flex-col gap-4 xxxl:gap-6 border-t-2 border-dashed border-primary/20 pt-4 lg:pt-6">
                    {items.map(
                      ({ id, icon, name, submenus }) =>
                        submenus && (
                          <li
                            key={id}
                            className={`inline-block rounded-xl duration-300`}>
                            <button
                              onClick={() => setActiveMenu(name)}
                              className={`group p-3 rounded-full hover:bg-primary bg-n0 border border-n30 dark:bg-bg3 dark:border-n500 hover:text-n0 duration-300 ${
                                activeMenu == name &&
                                "bg-primary text-n0 dark:bg-primary"
                              } ${
                                path == name &&
                                "bg-primary text-n0 dark:bg-primary"
                              } ${
                                isActive(submenus) &&
                                "bg-primary text-n0 dark:bg-primary"
                              }`}>
                              <span
                                className={`text-primary group-hover:text-n0 ${
                                  activeMenu == name && " !text-n0"
                                } ${isActive(submenus) && " !text-n0"}`}>
                                {icon}
                              </span>
                            </button>
                          </li>
                        )
                    )}
                  </ul>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="relative grow h-screen bg-n0 dark:bg-bg4">
          <div className="sticky top-0 bg-n0 dark:bg-bg4 w-full">
            <button
              onClick={() => setSidebar(false)}
              className="xxl:hidden absolute top-3 right-3 z-20">
              <IconX />
            </button>
            {sidebarData.map(({ items, id }) => (
              <div key={id}>
                {items.map(({ id, name, submenus }) => (
                  <div key={id}>
                    {activeMenu == name && (
                      <ul className="pt-4 max-xxl:pt-10">
                        {submenus.map(({ title, url }) => (
                          <li
                            onClick={() => {
                              setActiveMenu(name);
                              windowSize! < 1400 && setSidebar(!sidebarIsOpen);
                            }}
                            key={title}>
                            <Link
                              className={`font-medium text-sm lg:text-base block hover:text-primary duration-300 py-2 md:py-3 px-2.5 xxxl:px-6 ${
                                path == url && "text-primary"
                              }`}
                              href={url}>
                              <span className="pr-1">•</span> {title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarTwoColumn;
