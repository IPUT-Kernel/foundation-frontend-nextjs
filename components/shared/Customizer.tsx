import { useLayout } from "@/utils/LayoutContext";
import cn from "@/utils/cn";
import { IconX } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { Dispatch, SetStateAction } from "react";
import { layoutList } from "../navbar/SelectLayout";
const directions = ["ltr", "rtl"];
const moods = ["light", "dark", "system"];
type customizerTypes = {
  customizerOpen: boolean;
  setCustomizerOpen: Dispatch<SetStateAction<boolean>>;
};
const Customizer = ({ customizerOpen, setCustomizerOpen }: customizerTypes) => {
  const { theme, setTheme } = useTheme();
  const { dir, changeDir, layout, changeLayout } = useLayout();

  return (
    <div
      onClick={() => setCustomizerOpen(false)}
      className={cn("z-[60] duration-500", {
        "fixed inset-0 bg-n900 bg-opacity-50": customizerOpen,
      })}>
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`w-[280px] xxxl:w-[336px] shadow-sm z-[52] ${
          customizerOpen
            ? "translate-x-0 visible"
            : "ltr:translate-x-full rtl:-translate-x-full invisible"
        } duration-300 sidebar fixed ltr:right-0 rtl:left-0 h-full bg-n0 dark:bg-bg4 top-0`}>
        <div className="p-4 flex justify-between items-center border-b border-n30 dark:border-n500">
          <div>
            <h5 className="h5 mb-2">Theme customizer</h5>
            <p className="text-sm">Customize & Preview in Real Time</p>
          </div>
          <button onClick={() => setCustomizerOpen(false)}>
            <IconX />
          </button>
        </div>
        <div className="p-4 border-b border-n30 dark:border-n500">
          <span className="mb-3 text-n60 block text-sm">Themeing</span>
          <h6 className="h6 mb-3">Mode</h6>
          <div className="flex gap-x-5 gap-y-3 flex-wrap">
            {moods.map((singleMood) => (
              <div key={singleMood} className="flex items-center">
                <input
                  onChange={() => setTheme(singleMood)}
                  className="relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] "
                  type="radio"
                  checked={theme == singleMood}
                  name="mood"
                  id={singleMood}
                />
                <label
                  className="inline-block hover:cursor-pointer ltr:pl-2 rtl:pr-2 capitalize"
                  htmlFor={singleMood}>
                  {singleMood}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-b border-n30 dark:border-n500">
          <span className="mb-3 text-n60 block text-sm">Layout</span>
          <h6 className="h6 mb-3">Direction</h6>
          <div className="flex gap-x-5 gap-y-3 flex-wrap mb-7">
            {directions.map((singleDir) => (
              <div key={singleDir} className="flex items-center">
                <input
                  onChange={() => changeDir(singleDir)}
                  className="relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] "
                  type="radio"
                  checked={dir == singleDir}
                  name="dir"
                  id={singleDir}
                />
                <label
                  className="inline-block hover:cursor-pointer ltr:pl-2 rtl:pr-2 capitalize"
                  htmlFor={singleDir}>
                  {singleDir}
                </label>
              </div>
            ))}
          </div>

          <h6 className="h6 mb-3">Sidebar</h6>
          <div className="flex gap-x-5 gap-y-3 flex-wrap">
            {layoutList.map((singleLayout) => (
              <div key={singleLayout} className="flex items-center">
                <input
                  onChange={() => changeLayout(singleLayout)}
                  className="relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] "
                  type="radio"
                  name="layout"
                  checked={layout == singleLayout}
                  id={singleLayout}
                />
                <label
                  className="inline-block hover:cursor-pointer ltr:pl-2 rtl:pr-2 capitalize"
                  htmlFor={singleLayout}>
                  {singleLayout}
                </label>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Customizer;
