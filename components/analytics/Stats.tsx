import {
  IconArrowUpRight,
  IconChartHistogram,
  IconUsers,
} from "@tabler/icons-react";
const stats = [
  {
    title: "All Earings",
    amount: "$65,110",
    icon: <IconChartHistogram size={32} />,
    color: "text-primary",
    percent: "40.7",
  },
  {
    title: "Total Users",
    amount: "32.7k",
    icon: <IconUsers size={32} />,
    color: "text-secondary1",
    percent: "20.7",
  },
  {
    title: "Session",
    amount: "29.4%",
    icon: <IconChartHistogram size={32} />,
    color: "text-secondary2",
    percent: "-7.77",
  },
];
const Stats = () => {
  return (
    <div className="box md:divide-x grid grid-cols-6 divide-primary/20 mb-4 xxxl:mb-6 gap-5">
      {stats.map(({ amount, color, icon, percent, title }) => (
        <div
          className="col-span-6 sm:col-span-3 md:col-span-2 md:px-6 first:pl-0 last:pr-0"
          key={title}>
          <div className="">
            <p className="bb-dashed font-medium pb-6 mb-6">{title}</p>
            <div className="flex gap-4 xxl:gap-6 items-center">
              <span className="p-4 inline-flex rounded-2xl bg-primary/5 dark:bg-bg3 text-primary">
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
        </div>
      ))}
    </div>
  );
};

export default Stats;
