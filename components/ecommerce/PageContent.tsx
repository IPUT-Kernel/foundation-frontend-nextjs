import SalesForeCast from "../analytics/SalesForeCast";
import RevenueChart from "../personal-1/RevenueChart";
import SalesOverview from "../personal-2/SalesOverview";
import RecentOrders from "./RecentOrders";
import Stats from "./Stats";

const PageContent = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <Stats />
      <div className="col-span-12 xl:col-span-6">
        <RevenueChart />
      </div>
      <div className="col-span-12 xl:col-span-6">
        <SalesOverview />
      </div>
      <div className="col-span-12 md:col-span-7 lg:col-span-8">
        <RecentOrders />
      </div>
      <div className="col-span-12 md:col-span-5 lg:col-span-4">
        <SalesForeCast />
      </div>
    </div>
  );
};

export default PageContent;
