import BTCPriceChart from "@/components/banking3/BtcPriceChart";
import MyTeam from "@/components/banking3/MyTeam";
import PopularCoins from "@/components/banking3/PopularCoins";
import Stats from "@/components/banking3/Stats";
import TransactionHistory from "@/components/banking3/TransactionHistory";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const BankingPage3 = () => {
  return (
    <>
      <Banner
        title="Banking Style 03"
        links={
          <Link href="#" className="btn">
            Fund Transfer
          </Link>
        }
      />
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <Stats />
        <BTCPriceChart />
        <MyTeam />
        <TransactionHistory />
        <PopularCoins />
      </div>
    </>
  );
};

export default BankingPage3;
