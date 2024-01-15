import {
  IconDroplet,
  IconDropletPlus,
  IconHeartbeat,
  IconScaleOutline,
} from "@tabler/icons-react";
const stats = [
  {
    amount: "224/80",
    subtitle: "Min/Max",
    title: "Blood quality",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.",
    icon: <IconDroplet size={32} />,
  },
  {
    amount: "120",
    subtitle: "Bpm",
    title: "Heart rate",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.",
    icon: <IconHeartbeat size={32} />,
  },
  {
    amount: "12/14",
    subtitle: "Units",
    title: "Blood quality",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.",
    icon: <IconDropletPlus size={32} />,
  },
  {
    amount: "62.7",
    subtitle: "Lbs",
    title: "Weight",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur.",
    icon: <IconScaleOutline size={32} />,
  },
];
const Stats = () => {
  return (
    <div className="box grid grid-cols-2 gap-4 xxxl:gap-6 xl:px-6 col-span-12 xl:col-span-6">
      {stats.map(({ title, amount, desc, icon, subtitle }) => (
        <div
          key={amount}
          className="col-span-2 md:col-span-1 box bg-primary/5 dark:bg-bg3">
          <div className="bb-dashed pb-4 mb-4 lg:mb-6 lg:pb-6 flex justify-between items-center">
            <div>
              <h4 className="h4 mb-3">{amount}</h4>
              <p>{subtitle}</p>
            </div>
            <span className="bg-n0 text-primary dark:bg-bg4 p-3 rounded-xl">
              {icon}
            </span>
          </div>
          <p className="font-medium mb-2">{title}</p>
          <p className="text-xs">{desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
