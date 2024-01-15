import Banner from "@/components/shared/Banner";
import TableListThree from "@/components/table/TableListThree";
import Link from "next/link";

const TableThreePage = () => {
  return (
    <>
      <Banner
        title="Table List Style 03"
        links={
          <Link href="#" className="btn">
            Manage Documents
          </Link>
        }
      />
      <TableListThree />
    </>
  );
};

export default TableThreePage;
