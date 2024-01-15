import Banner from "@/components/shared/Banner";
import UserGridContentThree from "@/components/usergrid/UserGridContentThree";
import Link from "next/link";

const UserGridThree = () => {
  return (
    <>
      <Banner
        title="User Grid Style 03"
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
      <UserGridContentThree />
    </>
  );
};

export default UserGridThree;
