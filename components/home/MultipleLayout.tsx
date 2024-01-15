"use client";
import Horizontal from "@/public/images/home/horizontal.png";
import Hovered from "@/public/images/home/hovered.png";
import TwoColumn from "@/public/images/home/two-column.png";
import Vertical from "@/public/images/home/vertical.png";
import Image from "next/image";
import { useRef, useState } from "react";
import { Transition } from "react-transition-group";

const duration = 500;

const defaultStyle: React.CSSProperties = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
};
interface TransitionStyles {
  entering: React.CSSProperties;
  entered: React.CSSProperties;
  exiting: React.CSSProperties;
  exited: React.CSSProperties;
}
const transitionStyles: TransitionStyles = {
  entering: { opacity: 1, transform: "translateY(0)" },
  entered: { opacity: 1, transform: "translateY(0)" },
  exiting: { opacity: 0, transform: "translateY(30px)" },
  exited: { opacity: 0, transform: "translateY(30px)" },
};

const layouts = [
  {
    id: 1,
    title: "Vertical layout",
    img: Vertical,
    desc: "Enhance your workflow with Dashboi's Vertical Sidebar layout. Placed on the left side, this sidebar ensures efficient navigation, allowing quick access to key features. By optimizing screen space, Dashboi's SidebarLeft provides a focused and streamlined experience, ideal for productivity-driven applications.",
  },
  {
    id: 2,
    title: "Hovered layout",
    img: Hovered,
    desc: "Step into a new realm of dashboard navigation with Dashboi's Horizontal layout. This unique design places the sidebar horizontally at the top, offering a panoramic view and efficient menu access. Enjoy a broad perspective for your projects while seamlessly switching between dashboards and components.",
  },
  {
    id: 3,
    title: "Two Column layout",
    img: TwoColumn,
    desc: "Strike a harmonious balance between organization and content presentation with Dashboi's Two Column Sidebar layout. This design divides the screen into two columns, dedicating space for the sidebar on one side and allowing ample room for your main content. Achieve a well-organized workspace that enhances the overall user experience.",
  },
  {
    id: 4,
    title: "Horizontal layout",
    img: Horizontal,
    desc: "Immerse yourself in the modern elegance of Dashboi's Hovered layout. This innovative design optimizes screen real estate by revealing the sidebar only on hover, providing a sleek and clutter-free interface. Enjoy a contemporary and intuitive user experience that seamlessly combines functionality with a polished aesthetic.",
  },
];

const MultipleLayout = () => {
  const [activeTab, setActiveTab] = useState(layouts[0].id);
  const nodeRef = useRef(null);
  return (
    <section id="layouts" className="py-14 xxl:py-28 bg-n0 dark:bg-bg4">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h5 className="h5 text-primary font-semibold mb-2 lg:mb-4">
            Multiple layouts
          </h5>
          <h2 className="h2 mb-4 lg:mb-6">Master layout options</h2>
          <p className="text-sm md:text-base">
            Using the Nextjs Layouts concept, we have been able to create three
            different layouts that you can use in your project.
          </p>
        </div>
        <div className="flex flex-wrap justify-center max-w-max mx-auto rounded-xl bg-primary/5 dark:bg-bg3 p-3 mb-10 lg:mb-14">
          {layouts.map(({ id, title }) => (
            <button
              onClick={() => setActiveTab(id)}
              className={`${
                activeTab == id ? "bg-primary text-n0" : ""
              } px-6 py-3 rounded-xl font-semibold`}
              key={id}>
              {title}
            </button>
          ))}
        </div>
        <div>
          {layouts.map(({ id, img, desc, title }) => (
            <Transition
              nodeRef={nodeRef}
              in={activeTab == id}
              timeout={duration}
              key={id}>
              {(state) => (
                <div
                  ref={nodeRef}
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state as keyof TransitionStyles],
                  }}>
                  {id === activeTab && (
                    <div className="border border-n30 dark:border-n500 rounded-2xl">
                      <Image
                        width={1296}
                        height={643}
                        src={img}
                        className="rounded-t-2xl"
                        alt="layout img"
                      />
                      <div className="border-t border-n30 dark:border-n500 p-5 lg:p-8 gap-3">
                        <h4 className="h4 mb-4">{title}</h4>
                        <p className="text-sm md:text-base">{desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Transition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultipleLayout;
