import OptionsVertical from "../shared/OptionsVertical";
const funnelData = [
  {
    title: "Created",
    amount: 19626,
    percent: "99%",
    width: "w-[99%]",
  },
  {
    title: "For Buy",
    amount: 2266,
    percent: "88%",
    width: "w-[88%]",
  },
  {
    title: "For Sell",
    amount: 1425,
    percent: "78%",
    width: "w-[78%]",
  },
  {
    title: "Contact Sent",
    amount: 585,
    percent: "66%",
    width: "w-[66%]",
  },
  {
    title: "Contact Won",
    amount: 99,
    percent: "44%",
    width: "w-[44%]",
  },
  {
    title: "Processing",
    amount: 66,
    percent: "40%",
    width: "w-[40%]",
  },
  {
    title: "Pending",
    amount: 31,
    percent: "32%",
    width: "w-[32%]",
  },
  {
    title: "Canceling",
    amount: 19,
    percent: "19%",
    width: "w-[19%]",
  },
];
const StorageFunnel = () => {
  return (
    <div className="col-span-12 lg:col-span-5 xl:col-span-4 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Deal Storage Funnel</p>
        <OptionsVertical />
      </div>
      <div className="flex flex-col gap-3">
        {funnelData.map(({ amount, percent, title, width }) => (
          <div key={title} className="flex gap-4">
            <div className="grow flex bg-primary/5 dark:bg-bg3 rounded-lg">
              <span className="text-xs sm:text-sm font-medium inline-block px-2 4xl:px-6 py-2 xxxl:py-3 grow">
                {title}
              </span>
              <div className="w-1/2 min-[350px]:w-7/12 flex justify-end">
                <span
                  className={`rounded-lg text-xs bg-primary block px-1 sm:px-3 py-2 xxxl:py-3 text-n0 ${width} sm:text-sm font-semibold`}>
                  {amount}
                </span>
              </div>
            </div>
            <span className="py-2 xxxl:py-3 px-2 4xl:px-6 bg-primary/5 dark:bg-bg3 text-primary inline-block rounded-lg text-xs sm:text-sm font-semibold">
              {percent}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorageFunnel;
