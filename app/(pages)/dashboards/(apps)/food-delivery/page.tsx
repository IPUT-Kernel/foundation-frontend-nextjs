import PageContent from "@/components/foodDelivery/PageContent";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const FoodDeliveryPage = () => {
  return (
    <>
      <Banner
        title="Food Delivery"
        links={
          <Link href="#" className="btn">
            Quick Order
          </Link>
        }
      />
      <PageContent />
    </>
  );
};

export default FoodDeliveryPage;
