import ListViewOne from "@/components/list/ListViewOne";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const ListOnePage = () => {
  return (
    <>
      <Banner
        title="List View Style 01"
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
      <ListViewOne />
    </>
  );
};

export default ListOnePage;
