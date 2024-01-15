import MyCards from "@/components/banking2/MyCards";
import TransactionHistory from "@/components/banking2/TransactionHistory";
import Transactions from "@/components/banking2/Transactions";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const BankingPage2 = () => {
  return (
    <>
      <Banner
        title="Banking Style 02"
        links={
          <Link href="#" className="btn">
            Fund Transfer
          </Link>
        }
      />
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <MyCards />
        <Transactions />
        <TransactionHistory />
      </div>
    </>
  );
};

export default BankingPage2;
