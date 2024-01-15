import Banner from "@/components/shared/Banner";
import UserGridContentOne from "@/components/usergrid/UserGridContentOne";
import Link from "next/link";

const UserGridOne = () => {
  return (
    <>
      <Banner
        title="User Grid Style 01"
        links={
          <div className="flex gap-4 xl:gap-6">
            <Link href="#" className="btn-outline">
              Manage
            </Link>
            <Link href="#" className="btn">
              Add User
            </Link>
          </div>
        }
      />
      <UserGridContentOne />
    </>
  );
};

export default UserGridOne;
