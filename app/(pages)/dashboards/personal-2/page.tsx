import Calendar2 from "@/components/personal-2/Calendar";
import MyTask from "@/components/personal-2/MyTask";
import SalesOverview from "@/components/personal-2/SalesOverview";
import Stats from "@/components/personal-2/Stats";
import Banner from "@/components/shared/Banner";
import dynamic from "next/dynamic";
import Link from "next/link";
const LiveUsers = dynamic(() => import("@/components/personal-2/LiveUsers"), {
  ssr: false,
});
const Personal2Page = () => {
  return (
    <>
      <Banner
        links={
          <Link href="#" className="btn">
            Project Analytics
          </Link>
        }
      />
      <Stats />
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <SalesOverview />
        <Calendar2 />
        <MyTask />
        <LiveUsers />
      </div>
    </>
  );
};

export default Personal2Page;
