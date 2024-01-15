import FlightList from "@/components/flights/FlightList";
import Hero from "@/components/flights/Hero";
import RightCol from "@/components/flights/RightCol";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const FlightsPage = () => {
  return (
    <>
      <Banner
        title="Flights Booking"
        links={
          <Link href="#" className="btn">
            Recent Bookings
          </Link>
        }
      />
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <Hero />
        <FlightList />
        <RightCol />
      </div>
    </>
  );
};

export default FlightsPage;
