import MarketChart from "@/components/analytics/MarketChart";
import ProjectsChart from "@/components/analytics/ProjectsChart";
import RecentTickets from "@/components/analytics/RecentTickets";
import RevenueHistory from "@/components/analytics/RevnueHistory";
import SalesForeCast from "@/components/analytics/SalesForeCast";
import Stats from "@/components/analytics/Stats";
import SummeryChart from "@/components/analytics/SummeryChart";
import Banner from "@/components/shared/Banner";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";

const AnalyticsPage = () => {
  return (
    <>
      <Banner
        title="Analytics dashboard"
        links={
          <Link href="#" className="btn">
            <IconDownload size={20} /> Project Reports
          </Link>
        }
      />
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Stats />
          <ProjectsChart />
          <MarketChart />
          <RevenueHistory />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <SummeryChart />
          <RecentTickets />
          <SalesForeCast />
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;
