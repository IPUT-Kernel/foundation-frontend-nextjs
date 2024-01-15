import FlexListTwo from "@/components/flex/FlexListTwo";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const FlexTwoPage = () => {
  return (
    <>
      <Banner
        title="Flex List Style 02"
        links={
          <div className="flex gap-4 xl:gap-6">
            <Link href="#" className="btn-outline">
              Manage
            </Link>
            <Link href="#" className="btn">
              Add User
            </Link>
          </div>
        }
      />
      <FlexListTwo />
    </>
  );
};

export default FlexTwoPage;
