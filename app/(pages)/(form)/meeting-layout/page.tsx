import Meeting from "@/components/form/Meeting";
import Banner from "@/components/shared/Banner";
import { IconUsers } from "@tabler/icons-react";
import Link from "next/link";

const MeetingFormPage = () => {
  return (
    <>
      <Banner
        title="Meeting"
        links={
          <Link href="#" className="btn">
            <IconUsers size={20} /> Invite Users
          </Link>
        }
      />
      <Meeting />
    </>
  );
};

export default MeetingFormPage;
