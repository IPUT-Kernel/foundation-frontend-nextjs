import Banner from "@/components/shared/Banner";
import ServiceStatus from "@/components/utility/ServiceStatus";
import Link from "next/link";

const ServiceStatusPage = () => {
  return (
    <>
      <Banner
        title="Service Status"
        links={
          <Link href="#" className="btn">
            Manage Service
          </Link>
        }
      />
      <ServiceStatus />
    </>
  );
};

export default ServiceStatusPage;
