import CardFour from "@/components/cardgrid/CardFour";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const CardGridFourPage = () => {
  return (
    <>
      <Banner
        title="Card Grid Style 04"
        links={
          <Link href="#" className="btn">
            Manage Projects
          </Link>
        }
      />
      <CardFour />
    </>
  );
};

export default CardGridFourPage;
