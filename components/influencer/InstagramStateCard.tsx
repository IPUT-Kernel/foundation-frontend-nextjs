import { IconTimeline } from "@tabler/icons-react";
import StateChart from "../shared/StateChart";
import ThreeDots from "../shared/ThreeDots";
type CardProps = {
  title: string;
  icon: JSX.Element;
  amount: string;
  percent: number;
  color: string;
  bg: string;
};
const InstagramStateCard = ({ cardData }: { cardData: CardProps }) => {
  const { amount, bg, color, icon, percent, title } = cardData;
  return (
    <div className="col-span-12 md:col-span-6 4xl:col-span-4 overflow-hidden">
      <div className="box bg-primary/5 dark:bg-bg3">
        <div className="flex items-center justify-between bb-dashed mb-4 pb-4">
          <div className="flex items-center gap-3">
            <span
              className={`p-2 inline-flex rounded-xl bg-n0 dark:bg-bg4 ${color}`}>
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
              <IconTimeline /> {percent}%
            </span>
          </div>
          <StateChart height={60} color={bg} />
        </div>
      </div>
    </div>
  );
};

export default InstagramStateCard;
