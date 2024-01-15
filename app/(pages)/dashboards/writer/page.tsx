import Banner from "@/components/shared/Banner";
import WriterPageContent from "@/components/writer/WriterPageContent";
import Link from "next/link";

const HealthPage = () => {
  return (
    <>
      <Banner
        title="Writer"
        links={
          <Link href="#" className="btn">
            Add Article
          </Link>
        }
      />
      <WriterPageContent />
    </>
  );
};

export default HealthPage;
