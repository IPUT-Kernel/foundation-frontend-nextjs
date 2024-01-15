"use client";
import { IconTimeline } from "@tabler/icons-react";
import StateChart from "../shared/StateChart";
import ThreeDots from "../shared/ThreeDots";
type CardProps = {
  title: string;
  icon: JSX.Element;
  amount: string;
  percent: string;
  color: string;
  bg: string;
  chartbg: string;
};
const StateCard = ({ cardData }: { cardData: CardProps }) => {
  const { amount, bg, chartbg, color, icon, percent, title } = cardData;
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
      <div className="box p-3 md:p-4 xxxl:px-8 xxxl:py-6">
        <div className="flex items-center justify-between bb-dashed mb-4 pb-4">
          <div className="flex items-center gap-3">
            <span className={`p-2 inline-flex rounded-xl ${bg} ${color}`}>
              {icon}
            </span>
            <span className="font-medium">{title}</span>
          </div>
          <ThreeDots />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="h4 mb-3">{amount}</h4>
            <span className={`${color} flex items-center gap-2`}>
              <IconTimeline /> {percent}{" "}
            </span>
          </div>
          <StateChart height={60} color={chartbg} />
        </div>
      </div>
    </div>
  );
};

export default StateCard;
