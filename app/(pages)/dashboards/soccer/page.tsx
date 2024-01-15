import Banner from "@/components/shared/Banner";
import PageContect from "@/components/soccer/PageContect";
import Link from "next/link";

const HealthPage = () => {
  return (
    <>
      <Banner
        title="Soccer"
        links={
          <Link href="#" className="btn">
            View Schedules
          </Link>
        }
      />
      <PageContect />
    </>
  );
};

export default HealthPage;
