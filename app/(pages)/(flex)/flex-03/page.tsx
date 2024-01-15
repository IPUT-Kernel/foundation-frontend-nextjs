import FlexListThree from "@/components/flex/FlexListThree";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const FlexThreePage = () => {
  return (
    <>
      <Banner
        title="Flex List Style 03"
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
      <FlexListThree />
    </>
  );
};

export default FlexThreePage;
