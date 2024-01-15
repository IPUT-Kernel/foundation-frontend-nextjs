"use client";
import logo from "@/public/images/logo-with-text.png";
import logoIcon from "@/public/images/logoicon.png";
import { IconArrowUpRight, IconMenu2, IconSearch } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent, useLayoutEffect, useRef, useState } from "react";
import ModeSwitcher from "../navbar/ModeSwitcher";
import { demoData } from "./demodata";
type ResultType = {
  id: number;
  title: string;
  img: StaticImageData;
  desc: string;
  category: string;
  url: string;
};
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchResult, setSearchResult] = useState<ResultType[]>([]);

  useLayoutEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  // ... existing code ...

  useLayoutEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        // Clicked outside the search container, hide the results
        setSearchResult([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    if (!searchTerm.trim()) {
      setSearchResult([]);
      return;
    }
    const result = demoData.filter(
      ({ title, desc }) =>
        title.toLowerCase().includes(searchTerm) ||
        desc.toLowerCase().includes(searchTerm)
    );
    setSearchResult(result);
    console.log(searchResult);
  };
  const path = usePathname();
  return (
    <div
      className={`fixed top-0 w-full max-lg:bg-n0 dark:max-lg:bg-bg4 max-lg:shadow-lg z-10 ${
        scrolled && "bg-n0 dark:bg-bg3 shadow-lg"
      }`}>
      <nav
        className={`container top-0 flex duration-500 justify-between items-center gap-2 py-3 md:py-4 lg:py-6 xxl:py-8 ${
          scrolled && "lg:py-4 xxl:!py-5"
        }`}>
        <div className="flex items-center gap-2 sm:gap-4 xl:gap-6">
          <Link href="/" className="shrink-0">
            <Image
              width={174}
              height={38}
              src={logo}
              className="max-xxl:hidden"
              alt="logo"
            />
            <Image src={logoIcon} className="xxl:hidden" alt="logo" />
          </Link>
          <div className="relative" ref={searchContainerRef}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className={`bg-n0 dark:bg-bg4 shrink-0 ${
                scrolled ? "bg-primary/5 dark:bg-bg4" : "bg-n0 "
              } ${
                path == "/demos" && "bg-primary/5"
              }  flex gap-3 rounded-[30px] border max-md:border-n30 lg:border-transparent px-3 xl:px-5 xxl:px-6 items-center justify-between xxl:w-[336px]`}>
              <input
                type="text"
                placeholder="E.g. list, sales.."
                onFocus={handleSearch}
                onInput={handleSearch}
                className="bg-transparent py-2 xxl:py-3 focus:outline-none w-full"
              />
              <IconSearch />
            </form>
            {searchResult.length > 0 ? (
              <div
                className={`absolute top-[110%] left-0 max-h-[350px] overflow-y-auto right-0 p-1 rounded-lg flex flex-col bg-n0 dark:bg-bg4`}>
                {searchResult.map(({ id, desc, title, url }) => (
                  <Link
                    key={id}
                    href={url}
                    className="flex flex-col gap-1 p-2 hover:bg-primary/5 dark:hover:bg-bg3 rounded-lg duration-300">
                    <p className="font-medium text-sm xl:text-base">{title}</p>
                    <span className="text-xs">{desc}</span>
                  </Link>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <ul
          className={`lg:flex z-20 items-center gap-4 absolute top-full lg:static ${
            menuOpen
              ? "bg-n0 dark:bg-bg4 w-full left-0 right-0 p-4 flex text-start translate-x-0 justify-start max-lg:flex-col"
              : "max-lg:hidden max-lg:-translate-x-full"
          }`}>
          <li>
            <Link href="#pages">Prebuilt Pages</Link>
          </li>
          <li>
            <Link href="#layouts">Layouts</Link>
          </li>
          <li>
            <Link href="#faqs">Faqs</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <ModeSwitcher isBlue={true} />
          <Link className="btn max-md:hidden" href="#">
            Buy Dashboi <IconArrowUpRight />
          </Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          <IconMenu2 />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
