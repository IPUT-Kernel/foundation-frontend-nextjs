import BalanceChart from "@/components/personal-3/BalanceChart";
import GreetingCard from "@/components/personal-3/GreetingCard";
import Projects from "@/components/personal-3/Projects";
import RevenueChart from "@/components/personal-3/RevenueChart";
import Stats from "@/components/personal-3/Stats";
import Status from "@/components/personal-3/Status";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const Personal2Page = () => {
  return (
    <>
      <Banner
        links={
          <Link href="#" className="btn">
            Stock Projects
          </Link>
        }
      />
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <BalanceChart />
        <GreetingCard />
        <Stats />
        <RevenueChart />
        <Status />
        <Projects />
      </div>
    </>
  );
};

export default Personal2Page;
