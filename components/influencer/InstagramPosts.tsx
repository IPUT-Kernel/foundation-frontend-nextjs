import {
  IconChartBar,
  IconMessageDots,
  IconNotes,
  IconThumbUp,
  IconUserCircle,
  IconUsers,
} from "@tabler/icons-react";
import OptionsVertical from "../shared/OptionsVertical";
import InstagramStateCard from "./InstagramStateCard";
const instagramPostStats = [
  {
    icon: <IconNotes size={18} />,
    title: "Content Posts",
    amount: "196",
    percent: 66.7,
    color: "text-primary",
    bg: "#5D69F4",
  },
  {
    icon: <IconUsers size={18} />,
    title: "Followers",
    amount: "33.5k",
    percent: 66.7,
    color: "text-secondary3",
    bg: "#C78200",
  },
  {
    icon: <IconUserCircle size={18} />,
    title: "Following",
    amount: "291",
    percent: 66.7,
    color: "text-secondary1",
    bg: "#00998B",
  },
  {
    icon: <IconThumbUp size={18} />,
    title: "Likes (30 days)",
    amount: "329.7k",
    percent: 66.7,
    color: "text-secondary3",
    bg: "#C78200",
  },
  {
    icon: <IconMessageDots size={18} />,
    title: "Comments",
    amount: "7.2k",
    percent: 66.7,
    color: "text-secondary1",
    bg: "#00998B",
  },
  {
    icon: <IconChartBar size={18} />,
    title: "Profile views",
    amount: "32.7k",
    percent: 66.7,
    color: "text-primary",
    bg: "#5D69F4",
  },
];
const InstagramPosts = () => {
  return (
    <div className="col-span-12 xl:col-span-3 box mb-4 xxxl:mb-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Instagram Stats</p>
        <OptionsVertical />
      </div>
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        {instagramPostStats.map((item) => (
          <InstagramStateCard key={item.title} cardData={item} />
        ))}
      </div>
    </div>
  );
};

export default InstagramPosts;
