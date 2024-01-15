import Chat from "@/components/messaging/Chat";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const MessagingPage = () => {
  return (
    <>
      <Banner
        title="Messaging"
        links={
          <Link href="#" className="btn">
            Add User
          </Link>
        }
      />
      <Chat />
    </>
  );
};

export default MessagingPage;
