import Banner from "@/components/shared/Banner";
import TileGridTwo from "@/components/tilegrid/TileGridTwo";
import Link from "next/link";

const TileTwoPage = () => {
  return (
    <>
      <Banner
        title="Tile Grid Style 02"
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
      <TileGridTwo />
    </>
  );
};

export default TileTwoPage;
