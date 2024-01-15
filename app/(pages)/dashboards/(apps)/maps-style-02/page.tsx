import PageContentMap2 from "@/components/maps/PageContentMap2";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const MapStyle1Page = () => {
  return (
    <>
      <Banner
        title="Map Style 02"
        links={
          <Link href="#" className="btn">
            Project Analytics
          </Link>
        }
      />
      <PageContentMap2 />
    </>
  );
};

export default MapStyle1Page;
