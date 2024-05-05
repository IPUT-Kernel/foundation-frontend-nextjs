"use client";
import logoIcon from "@/public/images/logoicon.png";
import logoIconDark from "@/public/images/logoicondark.png";
import { IconArrowUpRight, IconMenu2, IconSearch } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent, useLayoutEffect, useRef, useState } from "react";
import ModeSwitcher from "../navbar/ModeSwitcher";
import { demoData } from "./demodata";
import { useTheme } from "next-themes";
type ResultType = {
  id: number;
  title: string;
  img: StaticImageData;
  desc: string;
  category: string;
  url: string;
};
const Navbar = () => {
  const { theme } = useTheme();
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
        title.toLowerCase().includes(searchTerm) || desc.toLowerCase().includes(searchTerm)
    );
    setSearchResult(result);
    console.log(searchResult);
  };
  const path = usePathname();
  return (
    <div
      className={`fixed top-0 w-full max-lg:bg-n0 dark:max-lg:bg-bg4 max-lg:shadow-lg z-10 ${
        scrolled && "bg-n0 dark:bg-bg3 shadow-lg"
      }`}
    >
      <nav
        className={`container top-0 flex duration-500 justify-between items-center gap-2 py-3 md:py-4 lg:py-6 xxl:py-8 ${
          scrolled && "lg:py-4 xxl:!py-5"
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-4 xl:gap-6">
          <Link href="/" className="shrink-0">
            <div className="flex items-center gap-3">
              <Image
                width={50}
                height={38}
                src={theme == "dark" ? logoIconDark : logoIcon}
                className="max-xxl:hidden"
                alt="logo"
              />

              <h1>IPUT-Kernel</h1>
            </div>
            <Image src={logoIcon} width={50} className="xxl:hidden" alt="logo" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ul
            className={`lg:flex z-20 items-center gap-6 absolute top-full lg:static ${
              menuOpen
                ? "bg-n0 dark:bg-bg4 w-full left-0 right-0 p-4 flex text-start translate-x-0 justify-start max-lg:flex-col"
                : "max-lg:hidden max-lg:-translate-x-full"
            }`}
          >
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
