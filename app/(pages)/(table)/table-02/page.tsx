import Banner from "@/components/shared/Banner";
import TableListTwo from "@/components/table/TableListTwo";
import Link from "next/link";

const TableTwoPage = () => {
  return (
    <>
      <Banner
        title="Table List Style 02"
        links={
          <Link href="#" className="btn">
            Manage Products
          </Link>
        }
      />
      <TableListTwo />
    </>
  );
};

export default TableTwoPage;
