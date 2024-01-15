import {
  IconArrowBarToRight,
  IconArrowUpRight,
  IconMessageDots,
  IconNotes,
  IconThumbUp,
} from "@tabler/icons-react";

const stats = [
  {
    title: "Articles",
    icon: <IconNotes size={32} />,
    amount: "210",
    percent: "28.7",
    color: "text-primary",
    bg: "bg-primary/5 dark:bg-bg3",
  },
  {
    title: "Readers",
    icon: <IconArrowBarToRight size={32} />,
    amount: "2.3k",
    percent: "28.7",
    color: "text-secondary1",
    bg: "bg-secondary1/5",
  },
  {
    title: "Likes",
    icon: <IconThumbUp size={32} />,
    amount: "3.5k",
    percent: "28.7",
    color: "text-secondary3",
    bg: "bg-secondary3/5",
  },
  {
    title: "Comments",
    icon: <IconMessageDots size={32} />,
    amount: "552+",
    percent: "28.7",
    color: "text-secondary2",
    bg: "bg-secondary2/5",
  },
];
const Stats = () => {
  return (
    <div className="box grid grid-cols-12 mb-4 xxxl:mb-6 gap-4 xxxl:gap-6">
      {stats.map(({ amount, bg, color, icon, percent, title }) => (
        <div
          key={title}
          className="col-span-12 min-[480px]:col-span-6 md:col-span-3">
          <p className="font-medium bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
            {title}
          </p>
          <div className="flex items-center gap-3 xxxl:gap-4">
            <span className={`p-4 inline-flex rounded-2xl ${bg} ${color}`}>
              {icon}
            </span>
            <div>
              <h4 className="h4 mb-4">{amount}</h4>
              <span className={`${color} flex gap-1 items-center`}>
                <IconArrowUpRight size={22} /> {percent}%
              </span>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
