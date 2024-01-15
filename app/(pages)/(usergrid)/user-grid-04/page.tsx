import Banner from "@/components/shared/Banner";
import UserGridContentFour from "@/components/usergrid/UserGridContentFour";
import Link from "next/link";

const UserGridFour = () => {
  return (
    <>
      <Banner
        title="User Grid Style 04"
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
      <UserGridContentFour />
    </>
  );
};

export default UserGridFour;
