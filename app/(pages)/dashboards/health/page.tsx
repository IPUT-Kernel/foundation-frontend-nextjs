import HealthPageContent from "@/components/health/HealthPageContent";
import Hero from "@/components/health/Hero";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const HealthPage = () => {
  return (
    <>
      <Banner
        title="Health"
        links={
          <Link href="#" className="btn">
            View Appointments
          </Link>
        }
      />
      <Hero />
      <HealthPageContent />
    </>
  );
};

export default HealthPage;
