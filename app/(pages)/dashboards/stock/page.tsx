import Banner from "@/components/shared/Banner";
import Categories from "@/components/stock/Categories";
import RecentOrders from "@/components/stock/RecentOrders";
import SalesForecast from "@/components/stock/SalesForecast";
import StorageFunnel from "@/components/stock/StorageFunnel";
import TrendingStocks from "@/components/stock/TrendingStocks";
import Link from "next/link";

const StockPage = () => {
  return (
    <>
      <Banner
        title="Stock dashboard"
        links={
          <Link href="#" className="btn">
            Recent Orders
          </Link>
        }
      />
      <Categories />
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <SalesForecast />
        <StorageFunnel />
        <RecentOrders />
        <TrendingStocks />
      </div>
    </>
  );
};

export default StockPage;
