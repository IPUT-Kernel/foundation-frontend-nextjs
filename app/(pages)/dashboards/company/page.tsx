import CompanyHistory from "@/components/company/CompanyHistory";
import CompanyOverview from "@/components/company/CompanyOverview";
import CompanyProfile from "@/components/company/CompanyProfile";
import ProfitOverview from "@/components/company/ProfitOverview";
import ProjectsSummery from "@/components/company/ProjectsSummery";
import Stats from "@/components/company/Stats";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const CompanyBoardPage = () => {
  return (
    <>
      <Banner
        title="Company board"
        links={
          <Link href="#" className="btn">
            Invite Users
          </Link>
        }
      />
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <Stats />
        <div className="col-span-12 xl:col-span-8">
          <CompanyOverview />
          <ProfitOverview />
          <CompanyHistory />
        </div>
        <div className="col-span-12 xl:col-span-4 grid grid-cols-2 gap-4 xxxl:gap-6">
          <CompanyProfile />
          <ProjectsSummery />
        </div>
      </div>
    </>
  );
};

export default CompanyBoardPage;
