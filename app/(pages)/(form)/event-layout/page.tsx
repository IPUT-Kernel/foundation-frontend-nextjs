import Event from "@/components/form/Event";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const EventFormPage = () => {
  return (
    <>
      <Banner
        title="Event"
        links={
          <Link href="#" className="btn">
            Manage Events
          </Link>
        }
      />
      <Event />
    </>
  );
};

export default EventFormPage;
