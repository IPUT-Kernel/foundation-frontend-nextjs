import CardThree from "@/components/cardgrid/CardThree";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const CardGridThreePage = () => {
  return (
    <>
      <Banner
        title="Card Grid Style 03"
        links={
          <Link href="#" className="btn">
            Manage Tasks
          </Link>
        }
      />
      <CardThree />
    </>
  );
};

export default CardGridThreePage;
