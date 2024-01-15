import FlexListOne from "@/components/flex/FlexListOne";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const FlexOnePage = () => {
  return (
    <>
      <Banner
        title="Flex List Style 01"
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
      <FlexListOne />
    </>
  );
};

export default FlexOnePage;
