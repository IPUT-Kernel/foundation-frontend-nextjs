import dynamic from "next/dynamic";
import SalesForeCast from "../analytics/SalesForeCast";
import Overview from "../personal-1/Overview";
import Calendar2 from "../personal-2/Calendar";
import Status from "../personal-3/Status";
import EmailSettings from "./EmailSettings";
import Followers from "./Followers";
import Gallery from "./Gallery";
import PopularTag from "./PopularTag";
import SearchBar from "./SearchBar";
import WhoFollowing from "./WhoFollowing";
const LiveUsers = dynamic(() => import("@/components/widgets/LiveUsers"), {
  ssr: false,
});
const UiWidgets = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div className="col-span-12 min-[640px]:col-span-6 xl:col-span-4">
        <div className="flex items-center pr-1 box mb-4 xxxl:mb-6 p-4 xxxl:p-6 relative after:bg-[url(/images/welcome.png)] after:bg-no-repeat after:bg-right-bottom after:bg-contain after:absolute after:w-full after:h-full after:scale-x-[-1]">
          <div>
            <h2 className="h2 mb-4 leading-tight">
              Welcome <br /> back, <br /> Hawkins
            </h2>
            <p>
              <span className="text-primary">DashBoi</span> Dashboard
            </p>
          </div>
        </div>
        <div className="mb-4 xxxl:mb-6">
          <Overview />
        </div>
        <SalesForeCast />
      </div>
      <div className="col-span-12 min-[640px]:col-span-6 xl:col-span-4">
        <WhoFollowing />
        <EmailSettings />
        <PopularTag />
      </div>
      <div className="col-span-12 min-[640px]:col-span-6 xl:col-span-4">
        <SearchBar />
        <Calendar2 />
        <Followers />
        <Gallery />
      </div>
      <div className="col-span-12 min-[640px]:col-span-6 xl:col-span-12 grid grid-cols-12 gap-4 xxxl:gap-6">
        <LiveUsers />
        <div className="col-span-12 xl:col-span-6 min-h-full">
          <Status />
        </div>
      </div>
    </div>
  );
};

export default UiWidgets;
