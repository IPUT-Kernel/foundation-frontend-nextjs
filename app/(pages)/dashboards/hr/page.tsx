import FeedSettings from "@/components/hr/FeedSetting";
import Hero from "@/components/hr/Hero";
import NewUsers from "@/components/hr/NewUsers";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const HrPage = () => {
  return (
    <>
      <Banner
        title="Human Resouces"
        links={
          <Link href="#" className="btn">
            Active Jobs
          </Link>
        }
      />
      <Hero />
      <NewUsers />
      <FeedSettings />
    </>
  );
};

export default HrPage;
