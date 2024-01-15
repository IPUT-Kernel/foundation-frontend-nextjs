import PageContent1 from "@/components/maps/PageContentMap1";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const MapStyle1Page = () => {
  return (
    <>
      <Banner
        title="Map Style 01"
        links={
          <Link href="#" className="btn">
            Add Location
          </Link>
        }
      />
      <PageContent1 />
    </>
  );
};

export default MapStyle1Page;
