"use client";
import {
  IconArticle,
  IconMicrophone,
  IconPhoto,
  IconSearch,
  IconVideo,
  IconX,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
import AllResult from "./AllResult";
import Images from "./Images";
import News from "./News";
import Videos from "./Videos";
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
    title: "All Results",
    icon: <IconSearch size={20} />,
    content: <AllResult />,
  },
  {
    id: 2,
    title: "Images",
    icon: <IconPhoto size={20} />,
    content: <Images />,
  },
  {
    id: 3,
    title: "News",
    icon: <IconArticle size={20} />,
    content: <News />,
  },
  {
    id: 4,
    title: "Videos",
    icon: <IconVideo size={20} />,
    content: <Videos />,
  },
];
const SearchResult = () => {
  const [activeTab, setActiveTab] = useState(1);
  const nodeRef = useRef(null);
  return (
    <div className="box xl:p-8">
      <form className="max-w-[770px] flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 md:gap-6 mb-4">
        <div className="rounded-[30px] bg-primary/5 dark:bg-bg3 px-6 md:px-8 py-2 lg:py-3 w-full flex border border-n40 dark:border-n500">
          <input
            type="text"
            defaultValue="Admin Dashboard"
            placeholder="Enter Search"
            className="w-full bg-transparent"
          />
          <button>
            <IconMicrophone size={20} />
          </button>
        </div>
        <button className="btn flex items-center gap-2">
          <IconSearch size={20} /> Search
        </button>
      </form>
      <p className="bb-dashed mb-6 pb-6 flex flex-wrap items-center gap-1">
        Showing results for &quot;
        <span className="text-primary">Admin Dashboard</span>&quot;{" "}
        <button>
          <IconX size={20} />
        </button>
      </p>
      <div className="bb-dashed pb-6">
        <div className="rounded-2xl min-[491px]:rounded-[30px] flex  flex-wrap gap-4 bg-primary/5 dark:bg-bg3 py-4 px-6 lg:px-8 border border-n30 dark:border-n600">
          {tabData.map(({ id, icon, title }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 font-medium ${
                id == activeTab && "text-primary"
              }`}>
              {icon} <span>{title}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        {tabData.map(({ id, content }) => (
          <div key={id}>{activeTab == id && content}</div>
          // <Transition
          //   nodeRef={nodeRef}
          //   in={activeTab == id}
          //   timeout={duration}
          //   key={id}>
          //   {(state) => (
          //     <div
          //       ref={nodeRef}
          //       style={{
          //         ...defaultStyle,
          //         ...transitionStyles[state as keyof TransitionStyles],
          //       }}>
          //       {activeTab == id && content}
          //     </div>
          //   )}
          // </Transition>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
