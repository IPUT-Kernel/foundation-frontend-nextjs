import ListViewFour from "@/components/list/ListViewFour";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const ListFourPage = () => {
  return (
    <>
      <Banner
        title="List View Style 04"
        links={
          <Link href="#" className="btn">
            Add More
          </Link>
        }
      />
      <ListViewFour />
    </>
  );
};

export default ListFourPage;
