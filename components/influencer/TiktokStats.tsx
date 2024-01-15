import {
  IconChartBar,
  IconMessageDots,
  IconNotes,
  IconThumbUp,
  IconUserCircle,
  IconUsers,
} from "@tabler/icons-react";
import OptionsVertical from "../shared/OptionsVertical";
import StatBox from "./StatBox";
const tiktokPostStats = [
  {
    icon: <IconNotes size={40} />,
    title: "Content Posts",
    amount: "196",
    percent: 40.7,
    color: "text-primary",
    bg: "#5D69F4",
  },
  {
    icon: <IconUsers size={40} />,
    title: "Followers",
    amount: "33.5k",
    percent: 40.7,
    color: "text-secondary1",
    bg: "#00998B",
  },
  {
    icon: <IconUserCircle size={40} />,
    title: "Following",
    amount: "291",
    percent: 40.7,
    color: "text-secondary3",
    bg: "#FFC861",
  },
  {
    icon: <IconThumbUp size={40} />,
    title: "Likes (30 days)",
    amount: "329.7k",
    percent: 40.7,
    color: "text-primary",
    bg: "#5D69F4",
  },
  {
    icon: <IconMessageDots size={40} />,
    title: "Comments",
    amount: "7.2k",
    percent: 40.7,
    color: "text-secondary1",
    bg: "#00998B",
  },
  {
    icon: <IconChartBar size={40} />,
    title: "Profile views",
    amount: "32.7k",
    percent: 66.7,
    color: "text-secondary3",
    bg: "#FFC861",
  },
];
const TiktokStats = () => {
  return (
    <div className="box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Tiktok Stats</p>
        <OptionsVertical />
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {tiktokPostStats.map((item) => (
          <StatBox key={item.title} box={item} />
        ))}
      </div>
    </div>
  );
};

export default TiktokStats;
