import ProgressChart from "../sales/ProgressChart";
import ProgressBarSingle from "../shared/ProgressBarSingle";
const stats = [
  {
    title: "Total Deposits",
    amount: "$65,110",
    border: "border-primary",
    bg: "#5D69F4",
    series: 83.5,
  },
  {
    title: "Loan Processed",
    amount: "$65,110",
    border: "border-secondary1",
    bg: "#00998B",
    series: 70.4,
  },
  {
    title: "Transactions",
    amount: "$65,110",
    border: "border-[#C78200]",
    bg: "#C78200",
    series: 43.5,
  },
  {
    title: "Investment Growth",
    amount: "$65,110",
    border: "border-secondary2",
    bg: "#FF6161",
    series: 23.1,
  },
];
const MyBalance = () => {
  return (
    <div className="col-span-12 xl:col-span-8 xxxl:col-span-6 box">
      <p className="font-medium mb-4">My Balance</p>
      <h2 className="h2 mb-8">$9565,110</h2>
      <ProgressBarSingle bg="bg-primary" width={70} />
      <div className="my-8 py-8 border-y border-primary/20 border-dashed grid gap-2 sm:gap-4 grid-cols-3">
        <div className="col-span-1 max-[400px]:col-span-3 max-[400px]:flex justify-between">
          <p className="text-sm md:text-base font-medium mb-3">Card Header</p>
          <h5 className="h5 font-semibold">$65,110</h5>
        </div>
        <div className="col-span-1 max-[400px]:col-span-3 max-[400px]:flex justify-between">
          <p className="text-sm md:text-base font-medium mb-3">Valid Thru</p>
          <h5 className="h5 font-semibold">$65,110</h5>
        </div>
        <div className="col-span-1 max-[400px]:col-span-3">
          <h5 className="h5 font-semibold">.... .... .... 1234</h5>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 xl:gap-6">
        {stats.map(({ amount, bg, border, series, title }) => (
          <div
            key={title}
            className={`col-span-2 flex items-center sm:col-span-1 border rounded-2xl border-dashed ${border}  pr-4 py-4`}>
            <div className="shrink-0">
              <ProgressChart labels={series + "%"} series={series} bg={bg} />
            </div>
            <div className="grow">
              <p className="font-medium mb-3">{title}</p>
              <h4 className="h4">{amount}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBalance;
