import {
  IconBriefcase,
  IconCreditCard,
  IconHome2,
  IconLock,
  IconMessageDots,
  IconNotebook,
  IconSettingsBolt,
  IconShieldLock,
  IconUpload,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
const settingsData = [
  {
    title: "Institution",
    icon: <IconHome2 size={32} />,
  },
  {
    title: "Team",
    icon: <IconUsers size={32} />,
  },
  {
    title: "Projects",
    icon: <IconBriefcase size={32} />,
  },
  {
    title: "Permissions",
    icon: <IconLock size={32} />,
  },
  {
    title: "Documents",
    icon: <IconNotebook size={32} />,
  },
  {
    title: "Upload",
    icon: <IconUpload size={32} />,
  },
  {
    title: "Billing",
    icon: <IconCreditCard size={32} />,
  },
  {
    title: "Messaging",
    icon: <IconMessageDots size={32} />,
  },
  {
    title: "Safety",
    icon: <IconShieldLock size={32} />,
  },
  {
    title: "General Settings",
    icon: <IconSettingsBolt size={32} />,
  },
];
const Settings = () => {
  return (
    <div className="min-h-[65vh]">
      <div className="box p-3 md:p-4 xl:p-6 grid grid-cols-12 gap-4 xxxl:gap-6 xl:grid-cols-10">
        {settingsData.map(({ icon, title }) => (
          <Link
            href="#"
            key={title}
            className="col-span-12 min-[400px]:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 box p-8 bg-primary/5 dark:bg-bg3 hover:bg-primary hover:text-n0 duration-300 flex flex-col items-center justify-center gap-5 text-center">
            <div className="rounded-2xl p-3 text-primary bg-n0 dark:bg-bg4 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]">
              {icon}
            </div>
            <span className="text-xl font-medium">{title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Settings;
