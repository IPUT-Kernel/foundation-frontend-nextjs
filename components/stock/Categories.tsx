import {
  IconBuildingEstate,
  IconCoins,
  IconDiamond,
  IconLeaf,
  IconListSearch,
  IconRocket,
  IconStethoscope,
} from "@tabler/icons-react";

import Link from "next/link";
const categories = [
  {
    icon: <IconLeaf size={32} />,
    title: "Energy",
    url: "#",
  },
  {
    icon: <IconBuildingEstate size={32} />,
    title: "Estate",
    url: "#",
  },
  {
    icon: <IconCoins size={32} />,
    title: "Finance",
    url: "#",
  },
  {
    icon: <IconDiamond size={32} />,
    title: "Diamonds",
    url: "#",
  },
  {
    icon: <IconListSearch size={32} />,
    title: "Research",
    url: "#",
  },
  {
    icon: <IconRocket size={32} />,
    title: "Technology",
    url: "#",
  },
  {
    icon: <IconStethoscope size={32} />,
    title: "Healthcare",
    url: "#",
  },
];
const Categories = () => {
  return (
    <div className="flex justify-start gap-4 xxxl:gap-6 mb-4 xxxl:mb-6 overflow-x-auto pb-2">
      {categories.map(({ title, icon, url }) => (
        <Link
          href={url}
          key={title}
          className="min-w-[195px] w-full p-6 xxl:p-8 border-[3px] flex flex-col items-center rounded-2xl border-n0 dark:border-n500 bg-primary/10">
          <div className="rounded-2xl bg-n0 dark:bg-bg3 p-3 text-primary mb-5">
            {icon}
          </div>
          <p className="text-base md:text-lg lg:text-xl font-medium">{title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
