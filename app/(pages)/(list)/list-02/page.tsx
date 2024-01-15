import ListViewTwo from "@/components/list/ListViewTwo";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const ListTwoPage = () => {
  return (
    <>
      <Banner
        title="List View Style 02"
        links={
          <Link href="#" className="btn">
            Add Project
          </Link>
        }
      />
      <ListViewTwo />
    </>
  );
};

export default ListTwoPage;
