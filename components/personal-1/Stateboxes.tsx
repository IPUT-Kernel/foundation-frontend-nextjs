import {
  IconCalendarPlus,
  IconChartBar,
  IconChartHistogram,
  IconTimeline,
  IconUsers,
} from "@tabler/icons-react";
const stateData = [
  {
    title: "All Earnings",
    percent: 70.7,
    width: "w-[70.7%]",
    amount: "$65,110",
    icon: <IconChartHistogram size={32} />,
  },
  {
    title: "Total Users",
    percent: 66.7,
    width: "w-[66.7%]",
    amount: "32.7k",
    icon: <IconUsers size={32} />,
  },
  {
    title: "Sessions",
    percent: 10.7,
    width: "w-[29.4%]",
    amount: "29.4%",
    icon: <IconCalendarPlus size={32} />,
  },
  {
    title: "Monthly Sales",
    percent: 40.7,
    width: "w-[40.7%]",
    amount: "$33,110",
    icon: <IconChartBar size={32} />,
  },
];
const Stateboxes = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      {stateData.map(({ amount, icon, percent, title, width }) => (
        <div
          key={title}
          className="p-3 bg-n0 rounded-2xl dark:bg-bg4 sm:p-4 xxl:p-6 xxxl:px-8 col-span-12 sm:col-span-6 xl:col-span-3 xxl:col-span-4 xxxl:col-span-3 border dark:border-n500">
          <div className="flex gap-4 xxxl:gap-6 items-center">
            <span className="p-3 inline-flex rounded-2xl bg-primary/5 dark:bg-bg3 text-primary">
              {icon}
            </span>
            <div>
              <p className="mb-3">{title}</p>
              <h4 className="h4 font-semibold">{amount}</h4>
            </div>
          </div>
          <div className="w-full bg-primary/5 dark:bg-bg3 rounded-sm h-1 mt-5 lg:mt-7 mb-4">
            <div className={`bg-primary h-1 ${width} rounded-sm`}></div>
          </div>
          <p className="flex items-center gap-2">
            <span
              className={`flex items-center gap-2 ${
                percent < 20 ? "text-secondary2" : "text-primary"
              }`}>
              <IconTimeline />
              {percent}%
            </span>{" "}
            Since Last Month
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stateboxes;
