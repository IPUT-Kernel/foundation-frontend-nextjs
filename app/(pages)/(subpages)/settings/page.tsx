import Banner from "@/components/shared/Banner";
import Settings from "@/components/subpages/Settings";
import Link from "next/link";

const SettingsPage = () => {
  return (
    <>
      <Banner
        title="Settings"
        links={
          <Link href="#" className="btn">
            Manage Settings
          </Link>
        }
      />
      <Settings />
    </>
  );
};

export default SettingsPage;
