import Banner from "@/components/shared/Banner";
import TileGridOne from "@/components/tilegrid/TileGridOne";
import Link from "next/link";

const TileOnePage = () => {
  return (
    <>
      <Banner
        title="Tile Grid Style 01"
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
      <TileGridOne />
    </>
  );
};

export default TileOnePage;
