import {
  IconCalendarPlus,
  IconChartBar,
  IconChartHistogram,
  IconShoppingBag,
  IconTimeline,
} from "@tabler/icons-react";
import Image from "next/image";
const states = [
  {
    amount: "$24,300",
    icon: <IconChartHistogram size={32} />,
    title: "Total Earnings",
    color: "text-primary",
    bg: "bg-primary/20",
    percent: "40.7",
  },
  {
    amount: "$18,700",
    icon: <IconChartBar size={32} />,
    title: "Total Revenue",
    color: "text-secondary1",
    bg: "bg-secondary1/20",
    percent: "+8.65",
  },
  {
    amount: "29.4%",
    icon: <IconCalendarPlus size={32} />,
    title: "Session",
    color: "text-secondary3",
    bg: "bg-secondary3/20",
    percent: "17.65",
  },
  {
    amount: "88+",
    icon: <IconShoppingBag size={32} />,
    title: "Pending Orders",
    color: "text-secondary2",
    bg: "bg-secondary2/20",
    percent: "-4.25",
  },
];
const Stats = () => {
  return (
    <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4 xxxl:gap-6">
      {states.map(({ amount, bg, color, icon, percent, title }) => (
        <div key={title} className="col-span-2 md:col-span-1 box">
          <div className="flex justify-between items-center bb-dashed mb-6 pb-6">
            <div>
              <h4 className="h4 mb-3">{amount}</h4>
              <p className="font-medium">{title}</p>
            </div>
            <div className={`${color} ${bg} p-3 rounded-xl`}>{icon}</div>
          </div>
          <div className="flex justify-between items-center">
            <span className={`${color} flex items-center gap-2`}>
              <IconTimeline /> {percent}%
            </span>
            <div className="flex">
              <Image
                src="/images/user-2.png"
                width={32}
                height={32}
                className="border-2 border-n0 dark:border-n500 -mr-3 rounded-full"
                alt="img"
              />
              <Image
                src="/images/user-3.png"
                width={32}
                height={32}
                className="border-2 border-n0 dark:border-n500 -mr-3 rounded-full"
                alt="img"
              />
              <Image
                src="/images/user-4.png"
                width={32}
                height={32}
                className="border-2 border-n0 dark:border-n500 -mr-3 rounded-full"
                alt="img"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
