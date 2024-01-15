import {
  IconArticle,
  IconThumbUp,
  IconUserCircle,
  IconUsers,
} from "@tabler/icons-react";
import OptionsVertical from "../shared/OptionsVertical";
import SocialLinks from "../shared/SocialLinks";
const biodataStats = [
  {
    amount: "239k",
    title: "Followers",
    color: "text-primary",
    icon: <IconUsers size={32} />,
  },
  {
    amount: "345k",
    title: "Following",
    color: "text-secondary1",
    icon: <IconUserCircle size={32} />,
  },
  {
    amount: "679k",
    title: "Like",
    color: "text-secondary2",
    icon: <IconThumbUp size={32} />,
  },
  {
    amount: "500",
    title: "Post",
    color: "text-secondary3",
    icon: <IconArticle size={32} />,
  },
];

const Biodata = () => {
  return (
    <div className="mb-4 xxxl:mb-6 p-3 box">
      <div className="box bg-primary/5 dark:bg-bg3">
        <div className="flex justify-between items-center bb-dashed mb-6 pb-6">
          <p>Bio Data</p>
          <OptionsVertical />
        </div>
        <div className="grid grid-cols-2 gap-6">
          {biodataStats.map(({ amount, color, icon, title }) => (
            <div
              key={title}
              className="col-span-2 min-[480px]:col-span-1 flex items-center gap-4 lg:gap-6">
              <div
                className={`p-2 rounded-lg bg-n0 dark:bg-bg4 ${color} shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]`}>
                {icon}
              </div>
              <div>
                <h5 className={`h5 ${color} mb-1`}>{amount}</h5>
                <span className="text-sm">{title}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm my-6 xl:mb-6 mt-8 bb-dashed mb-6 pb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Biodata;
