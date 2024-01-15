import Banner from "@/components/shared/Banner";
import TileGridThree from "@/components/tilegrid/TileGridThree";
import Link from "next/link";

const TileThreePage = () => {
  return (
    <>
      <Banner
        title="Tile Grid Style 03"
        links={
          <div className="flex gap-4 xl:gap-6">
            <Link href="#" className="btn-outline">
              Manage
            </Link>
            <Link href="#" className="btn">
              Upload
            </Link>
          </div>
        }
      />
      <TileGridThree />
    </>
  );
};

export default TileThreePage;
