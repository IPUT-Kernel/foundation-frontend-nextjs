import Hobbies from "@/components/hobbies/Hobbies";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const HobbyPage = () => {
  return (
    <>
      <Banner
        title="Hobbies"
        links={
          <Link href="#" className="btn">
            View All
          </Link>
        }
      />
      <Hobbies />
    </>
  );
};

export default HobbyPage;
