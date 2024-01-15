import {
  IconBriefcase,
  IconChecklist,
  IconMessageDots,
  IconNotebook,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
const settings = [
  {
    title: "Profile",
    icon: <IconUsers size={40} />,
  },
  {
    title: "Setting",
    icon: <IconSettings size={40} />,
  },
  {
    title: "Messages",
    icon: <IconMessageDots size={40} />,
  },
  {
    title: "Tasks",
    icon: <IconChecklist size={40} />,
  },
  {
    title: "Services",
    icon: <IconNotebook size={40} />,
  },
  {
    title: "Projects",
    icon: <IconBriefcase size={40} />,
  },
];
const SettingsCard = () => {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 box p-4 md:p-6 grid grid-cols-2 gap-4 xxxl:gap-6">
      {settings.map(({ icon, title }) => (
        <Link
          href="#"
          key={title}
          className="col-span-1 box bg-primary/5 dark:bg-bg3 duration-300 hover:bg-primary hover:text-n0 p-5 lg:p-8 flex flex-col items-center justify-center gap-5">
          <div className="p-3 rounded-2xl bg-n0 dark:bg-bg4 text-primary shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]">
            {icon}
          </div>
          <p className="text-xl font-medium">{title}</p>
        </Link>
      ))}
    </div>
  );
};

export default SettingsCard;
