import {
  IconArrowUpRight,
  IconChartBar,
  IconMessageDots,
  IconNotes,
  IconThumbUp,
  IconUserCircle,
  IconUsers,
} from "@tabler/icons-react";
import OptionsVertical from "../shared/OptionsVertical";
const instagramPostStats = [
  {
    icon: <IconNotes size={40} />,
    title: "Content Posts",
    amount: "196",
    percent: 66.7,
    color: "text-primary",
    bg: "#5D69F4",
  },
  {
    icon: <IconUsers size={40} />,
    title: "Followers",
    amount: "33.5k",
    percent: 66.7,
    color: "text-secondary3",
    bg: "#C78200",
  },
  {
    icon: <IconUserCircle size={40} />,
    title: "Following",
    amount: "291",
    percent: 66.7,
    color: "text-secondary1",
    bg: "#00998B",
  },
  {
    icon: <IconThumbUp size={40} />,
    title: "Likes (30 days)",
    amount: "329.7k",
    percent: 66.7,
    color: "text-secondary3",
    bg: "#C78200",
  },
  {
    icon: <IconMessageDots size={40} />,
    title: "Comments",
    amount: "7.2k",
    percent: 66.7,
    color: "text-secondary1",
    bg: "#00998B",
  },
  {
    icon: <IconChartBar size={40} />,
    title: "Profile views",
    amount: "32.7k",
    percent: 66.7,
    color: "text-primary",
    bg: "#5D69F4",
  },
];
const TwitterStats = () => {
  return (
    <div className="col-span-12 xl:col-span-3 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Twitter Stats</p>
        <OptionsVertical />
      </div>
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        {instagramPostStats.map(
          ({ amount, bg, color, icon, percent, title }) => (
            <div
              key={title}
              className="col-span-12 md:col-span-6 xxxl:col-span-4 box bg-primary/5 dark:bg-bg3">
              <p className="font-medium bb-dashed mb-6 pb-6">{title}</p>
              <div className="flex items-center gap-4 xxxl:gap-6">
                <span
                  className={`p-2 inline-flex rounded-xl bg-n0 dark:bg-bg4 ${color}`}>
                  {icon}
                </span>
                <div>
                  <h4 className="h4 mb-4">{amount}</h4>
                  <span className={`${color} flex items-center gap-1`}>
                    <IconArrowUpRight /> {percent}%
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TwitterStats;
