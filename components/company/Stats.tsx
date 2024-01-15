import {
  IconArrowUpRight,
  IconCurrencyBitcoin,
  IconFiles,
  IconTicket,
  IconUsers,
} from "@tabler/icons-react";

const stats = [
  {
    title: "New Users",
    amount: "44.6k",
    icon: <IconUsers size={36} />,
    percent: 40.7,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Daily Income",
    amount: "$5,110",
    icon: <IconCurrencyBitcoin size={36} />,
    percent: 40.7,
    color: "text-secondary1",
    bg: "bg-secondary1/10",
  },
  {
    title: "Completed Projects",
    amount: "25k",
    icon: <IconFiles size={36} />,
    percent: 40.7,
    color: "text-secondary2",
    bg: "bg-secondary2/10",
  },
  {
    title: "Active Tickets",
    amount: "42",
    icon: <IconTicket size={36} />,
    percent: 40.7,
    color: "text-secondary3",
    bg: "bg-secondary3/10",
  },
];

const Stats = () => {
  return (
    <>
      {stats.map(({ title, amount, icon, percent, bg, color }) => (
        <div
          key={title}
          className="col-span-12 min-[680px]:col-span-6 xl:col-span-3 box">
          <p className="font-medium mb-4 pb-4 xxxl:mb-6 xxxl:pb-6 bb-dashed">
            {title}
          </p>
          <div className="flex gap-3 xxxl:gap-6 items-center">
            <span
              className={`p-3 xxxl:p-4 inline-flex rounded-2xl ${bg} ${color}`}>
              {icon}
            </span>
            <div>
              <h4 className="h4 mb-2 md:mb-4">{amount}</h4>
              <span className={`flex flex-wrap items-center gap-2`}>
                <span className={`${color} flex`}>
                  <IconArrowUpRight size={22} /> {percent}%
                </span>{" "}
                <span>Since last month</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Stats;
