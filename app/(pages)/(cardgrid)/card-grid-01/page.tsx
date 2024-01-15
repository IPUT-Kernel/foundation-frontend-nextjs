import CardOne from "@/components/cardgrid/CardOne";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const CardGridOnePage = () => {
  return (
    <>
      <Banner
        title="Card Grid Style 01"
        links={
          <Link href="#" className="btn">
            Manage Users
          </Link>
        }
      />
      <CardOne />
    </>
  );
};

export default CardGridOnePage;
