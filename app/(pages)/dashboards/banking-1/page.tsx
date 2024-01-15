import MyBalance from "@/components/banking1/MyBalance";
import TransactionHistory from "@/components/banking1/TransactionHistory";
import Transactions from "@/components/banking1/Transactions";
import TransferInvoice from "@/components/banking1/TransferInvoice";
import WeeklyTransactions from "@/components/banking1/WeeklyTransactions";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const BankingPage1 = () => {
  return (
    <>
      <Banner
        title="Banking Style 01"
        links={
          <Link href="#" className="btn">
            Recent Transactions
          </Link>
        }
      />
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <MyBalance />
        <TransferInvoice />
        <Transactions />
        <WeeklyTransactions />
        <TransactionHistory />
      </div>
    </>
  );
};

export default BankingPage1;
