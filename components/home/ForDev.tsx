import component from "@/public/images/home/component.png";
import customize from "@/public/images/home/customize.png";
import endapp from "@/public/images/home/endapp.png";
import starter from "@/public/images/home/starter.png";
import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";

const features = [
  {
    title: "Starter App",
    icon: starter,
    desc: "Dashboi ships with a clean starter project where you can start writing your own code and content",
  },
  {
    title: "Customization",
    icon: customize,
    desc: "Dashboi is built with Tailwind CSS and Smart UI. You can customize every single",
  },
  {
    title: "Component",
    icon: component,
    desc: "Dashboi ships with a lot of UI components, from the smallest parts required to build ",
  },
  {
    title: "End App",
    icon: endapp,
    desc: "Dashboi ships with a clean End project where you can start writing your own code and content",
  },
];
const ForDev = () => {
  return (
    <section className="bg-[url(/images/home/smartui-bg.png)] bg-cover bg-no-repeat py-14 xxl:py-28 bg-primary/5 dark:bg-bg3">
      <div className="container grid grid-cols-2 gap-4 xl:gap-6 items-center">
        <div className="col-span-2 lg:col-span-1">
          <h5 className="h5 text-primary font-semibold mb-2 lg:mb-4">
            Made for developers
          </h5>
          <h2 className="h2 mb-4 lg:mb-6">A layered experience</h2>
          <p className="mb-10 lg:mb-14 text-sm md:text-base">
            Dashboi is built on top on the Next Layout concept. Layouts can be
            seen as groups of components and composables that are related to
            each other. They help create a consistent experience and a
            maintainable codebase.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2 md:gap-4 text-sm md:text-base">
              <IconCircleCheck className="text-primary" size={20} /> Change
              colors in seconds
            </li>
            <li className="flex items-center gap-2 md:gap-4 text-sm md:text-base">
              <IconCircleCheck className="text-primary" size={20} /> Choose the
              font family of your choice
            </li>
            <li className="flex items-center gap-2 md:gap-4 text-sm md:text-base">
              <IconCircleCheck className="text-primary" size={20} /> Mix and
              match components as you need
            </li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-4 xxl:gap-6">
          {features.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="col-span-2 sm:col-span-1 box p-5 xl:p-8 flex flex-col items-center text-center">
              <div className="p-4 bg-primary/5 rounded-xl mb-6 lg:mb-8 box">
                <Image src={icon} alt="img" />
              </div>
              <h4 className="h4 mb-4">{title}</h4>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForDev;
