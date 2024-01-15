import PageContent from "@/components/ecommerce/PageContent";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const EcommercePage = () => {
  return (
    <>
      <Banner
        title="Ecommerce"
        links={
          <div className="flex gap-4 xl:gap-6">
            <Link href="#" className="btn-outline">
              View Reports
            </Link>
            <Link href="#" className="btn">
              Manage Reports
            </Link>
          </div>
        }
      />
      <PageContent />
    </>
  );
};

export default EcommercePage;
