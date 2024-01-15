import Banner from "@/components/shared/Banner";
import ConfirmAccount from "@/components/utility/ConfirmAccount";
import Link from "next/link";

const ConfirmAccountPage = () => {
  return (
    <>
      <Banner
        title="Confirm Account"
        links={
          <Link href="#" className="btn">
            Add Account
          </Link>
        }
      />
      <ConfirmAccount />
    </>
  );
};

export default ConfirmAccountPage;
