import BalanceChart from "@/components/charts/BalanceChart";
import BTCPriceChart from "@/components/charts/BtcPriceChart";
import CompanyOverview from "@/components/charts/CompanyOverview";
import MarketChart from "@/components/charts/MarketChart";
import OverallCondition from "@/components/charts/OverallCondition";
import Oxygenation from "@/components/charts/Oxygenation";
import ProfitOverview from "@/components/charts/ProfitOverview";
import RevenueChart from "@/components/charts/RevenueChart";
import RevenueChart2 from "@/components/charts/RevenueChart2";
import RevenueOverview from "@/components/charts/RevenueOverview";
import SalesForecast from "@/components/charts/SalesForecast";
import SalesOverview from "@/components/charts/SalesOverview";
import SalesStatistics from "@/components/charts/SalesStatistics";
import ShowcaseInfo from "@/components/charts/ShowcaseInfo";
import Transactions from "@/components/charts/Transactions";
import Transactions1 from "@/components/charts/Transactions1";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const ApexchartsPage = () => {
  return (
    <div>
      <Banner
        title="Apex Charts"
        links={
          <Link href="#" className="btn">
            Add More Chart
          </Link>
        }
      />
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <RevenueChart />
        <SalesOverview />
        <ProfitOverview />
        <BTCPriceChart />
        <CompanyOverview />
        <Oxygenation />
        <BalanceChart />
        <RevenueOverview />
        <SalesStatistics />
        <Transactions1 />
        <MarketChart />
        <Transactions />
        <SalesForecast />
        <RevenueChart2 />
        <OverallCondition />
        <ShowcaseInfo />
      </div>
    </div>
  );
};

export default ApexchartsPage;
