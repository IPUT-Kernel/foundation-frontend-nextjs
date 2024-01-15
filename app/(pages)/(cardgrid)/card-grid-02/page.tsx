import CardTwo from "@/components/cardgrid/CardTwo";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const CardGridTwoPage = () => {
  return (
    <>
      <Banner
        title="Card Grid Style 02"
        links={
          <Link href="#" className="btn">
            New Activity
          </Link>
        }
      />
      <CardTwo />
    </>
  );
};

export default CardGridTwoPage;
