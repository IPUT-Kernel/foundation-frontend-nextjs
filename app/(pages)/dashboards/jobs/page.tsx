import Jobs from "@/components/jobs/Jobs";
import SearchBar from "@/components/jobs/SearchBar";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const CoursePage = () => {
  return (
    <>
      <Banner
        title="Jobs Dashboard"
        links={
          <Link href="#" className="btn">
            Create Alert
          </Link>
        }
      />
      <SearchBar />
      <Jobs />
    </>
  );
};

export default CoursePage;
