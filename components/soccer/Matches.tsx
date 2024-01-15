"use client";
import { useRef, useState } from "react";
import { Transition } from "react-transition-group";
import OptionsVertical from "../shared/OptionsVertical";
import AllMatch from "./AllMatch";
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

const tabData = [
  {
    id: 1,
    title: "All",
    content: <AllMatch />,
  },
  {
    id: 2,
    title: "Live",
    content: <AllMatch />,
  },
  {
    id: 3,
    title: "Finished",
    content: <AllMatch />,
  },
  {
    id: 4,
    title: "Scheduled",
    content: <AllMatch />,
  },
];

const Matches = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const nodeRef = useRef(null);
  return (
    <div className="col-span-12 lg:col-span-8 box">
      <div className="flex justify-between items-center bb-dashed mb-6 pb-6">
        <div className="flex flex-wrap gap-3 sm:gap-4 xxxl:gap-6">
          {tabData.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`md:min-w-[140px] py-2 sm:py-3 px-3 rounded-xl ${
                activeTab == id
                  ? "bg-primary text-n0"
                  : "bg-primary/10 dark:bg-bg3 text-n700 dark:text-n0"
              } `}>
              {title}
            </button>
          ))}
        </div>
        <OptionsVertical />
      </div>
      <div>
        {tabData.map(({ id, content }) => (
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
                {activeTab == id && content}
              </div>
            )}
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Matches;
