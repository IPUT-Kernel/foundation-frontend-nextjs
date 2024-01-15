import Banner from "@/components/shared/Banner";
import Promotion from "@/components/utility/Promotion";
import Link from "next/link";

const PromotionPage = () => {
  return (
    <>
      <Banner
        title="Promotion"
        links={
          <Link href="#" className="btn">
            More Promotions
          </Link>
        }
      />
      <Promotion />
    </>
  );
};

export default PromotionPage;
