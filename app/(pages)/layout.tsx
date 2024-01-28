"use client";
import SidebarHovered from "@/components/navbar/SidebarHovered";
import SidebarTwoColumn from "@/components/navbar/SidebarTwoColumn";
import SidebarVertical from "@/components/navbar/SidebarVertical";
import TopNav from "@/components/navbar/TopNav";
import TopNavHorizontal from "@/components/navbar/TopNavHorizontal";
import Customizer from "@/components/shared/Customizer";
import Footer from "@/components/shared/Footer";
import { useLayout } from "@/utils/LayoutContext";
import useWindowSize from "@/utils/useWindowSize";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { layout } = useLayout();
  const { windowSize } = useWindowSize();
  useEffect(() => {
    if (window.innerWidth > 1400) {
      setSidebarIsOpen(true);
    } else {
      setSidebarIsOpen(false);
    }
    const handleResize = () => {
      if (window.innerWidth < 1400) {
        setSidebarIsOpen(false);
      } else {
        setSidebarIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Navbar top  */}
      {layout == "Horizontal" && windowSize! > 1400 && (
        <TopNavHorizontal
          setSidebar={setSidebarIsOpen}
          sidebarIsOpen={sidebarIsOpen}
        />
      )}
      {layout == "Horizontal" && windowSize! < 1400 && (
        <TopNav setSidebar={setSidebarIsOpen} sidebarIsOpen={sidebarIsOpen} />
      )}
      {layout != "Horizontal" && (
        <TopNav setSidebar={setSidebarIsOpen} sidebarIsOpen={sidebarIsOpen} />
      )}

      {/* Sidebar */}
      {layout == "Vertical" && (
        <SidebarVertical
          sidebarIsOpen={sidebarIsOpen}
          setSidebar={setSidebarIsOpen}
        />
      )}
      {layout == "Horizontal" && windowSize! < 1400 && (
        <SidebarVertical
          sidebarIsOpen={sidebarIsOpen}
          setSidebar={setSidebarIsOpen}
        />
      )}
      {layout == "Two Column" && (
        <SidebarTwoColumn
          sidebarIsOpen={sidebarIsOpen}
          setSidebar={setSidebarIsOpen}
        />
      )}
      {layout == "Hovered" && (
        <SidebarHovered
          sidebarIsOpen={sidebarIsOpen}
          setSidebar={setSidebarIsOpen}
        />
      )}
      {/* {layout == "Horizontal" && <HorizontalLayout />} */}

      {/* main content  */}
      <div
        className={`pt-[72px] md:pt-20 xl:pt-[98px] transition-all duration-500 bg-primary/5 dark:bg-bg3  ${
          sidebarIsOpen &&
          layout == "Vertical" &&
          "ltr:xxl:ml-[280px] ltr:xxxl:ml-[336px] rtl:xxl:mr-[280px] rtl:xxxl:mr-[336px]"
        } ${
          sidebarIsOpen &&
          layout == "Two Column" &&
          "ltr:xxl:ml-[280px] ltr:xxxl:ml-[360px] rtl:xxl:mr-[280px] rtl:xxxl:mr-[360px]"
        } ${
          sidebarIsOpen && layout == "Hovered" && "ltr:xxl:ml-20 rtl:xxl:mr-20"
        } ${layout == "Horizontal" && windowSize! > 1400 && "!pt-[172px]"}`}>
        <div
          className={`px-3 sm:px-4 xxxl:px-6 py-6 lg:py-8 duration-300 ${
            layout == "Horizontal" && "max-w-[1700px] mx-auto xxl:px-3"
          }`}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
