import ProjectsOverview from "@/components/sales/ProjectsOverview";
import RevenueOverview from "@/components/sales/RevenueOverview";
import SalesStatistics from "@/components/sales/SalesStatistics";
import ShowcaseInfo from "@/components/sales/ShowcaseInfo";
import States from "@/components/sales/States";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const SalesPage = () => {
  return (
    <>
      <Banner
        title="Sales dashboard"
        links={
          <div className="flex gap-4 xl:gap-6">
            <Link href="#" className="btn-outline">
              View Reports
            </Link>
            <Link href="#" className="btn">
              Transactions
            </Link>
          </div>
        }
      />
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <States />
        <SalesStatistics />
        <ShowcaseInfo />
        <ProjectsOverview />
        <RevenueOverview />
      </div>
    </>
  );
};

export default SalesPage;
