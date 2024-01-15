import Banner from "@/components/personal-1/Banner";
import Browser from "@/components/personal-1/Browser";
import Overview from "@/components/personal-1/Overview";
import Projects from "@/components/personal-1/Projects";
import RevenueChart from "@/components/personal-1/RevenueChart";
import Stateboxes from "@/components/personal-1/Stateboxes";

export default function Home() {
  return (
    <main className="duration-300">
      <Banner />
      {/* State boxes */}
      <Stateboxes />
      {/* revenue chart and projects oversview */}
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6 mt-4 lg:mt-6">
        <div className="col-span-12 lg:col-span-6">
          <RevenueChart />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Overview />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Projects />
        </div>
        <Browser />
      </div>
    </main>
  );
}
