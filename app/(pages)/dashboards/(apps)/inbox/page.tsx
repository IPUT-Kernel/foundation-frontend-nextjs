import InboxContent from "@/components/inbox/InboxContent";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const InboxPage = () => {
  return (
    <>
      <Banner
        title="Inbox"
        links={
          <Link href="#" className="btn">
            Recycle Mail
          </Link>
        }
      />
      <InboxContent />
    </>
  );
};

export default InboxPage;
