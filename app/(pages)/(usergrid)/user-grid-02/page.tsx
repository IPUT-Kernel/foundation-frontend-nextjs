import Banner from "@/components/shared/Banner";
import UserGridContentTwo from "@/components/usergrid/UserGridContentTwo";
import Link from "next/link";

const UserGridTwo = () => {
  return (
    <>
      <Banner
        title="User Grid Style 02"
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
      <UserGridContentTwo />
    </>
  );
};

export default UserGridTwo;
