import Banner from "@/components/shared/Banner";
import TableListOne from "@/components/table/TableListOne";
import Link from "next/link";

const TableOnePage = () => {
  return (
    <>
      <Banner
        title="Table List Style 01"
        links={
          <Link href="#" className="btn">
            Add New
          </Link>
        }
      />
      <TableListOne />
    </>
  );
};

export default TableOnePage;
