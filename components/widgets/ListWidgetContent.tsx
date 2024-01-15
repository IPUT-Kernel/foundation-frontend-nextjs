import PopularActivities from "./PopularActivities";
import PopularCoins from "./PopularCoins";
import ProjectsSummery from "./ProjectsSummery";
import RecentActivities from "./RecentActivities";
import TrendingNow from "./TrendingNow";
import TrendingStocks from "./TrendingStocks";

const ListWidgetContent = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <PopularActivities />
      <TrendingNow />
      <RecentActivities />
      <TrendingStocks />
      <ProjectsSummery />
      <PopularCoins />
    </div>
  );
};

export default ListWidgetContent;
