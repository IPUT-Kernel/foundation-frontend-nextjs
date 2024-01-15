import ListViewThree from "@/components/list/ListViewThree";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const ListThreePage = () => {
  return (
    <>
      <Banner
        title="List View Style 03"
        links={
          <Link href="#" className="btn">
            Inactive Projects
          </Link>
        }
      />
      <ListViewThree />
    </>
  );
};

export default ListThreePage;
