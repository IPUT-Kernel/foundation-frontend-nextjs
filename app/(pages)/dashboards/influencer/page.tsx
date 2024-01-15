import Influencer from "@/components/influencer/Influencer";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const InfluencerPage = () => {
  return (
    <>
      <Banner
        title="Influencer"
        links={
          <Link href="#" className="btn">
            Add Account
          </Link>
        }
      />
      <Influencer />
    </>
  );
};

export default InfluencerPage;
