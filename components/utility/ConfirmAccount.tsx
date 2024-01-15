import confirmImg from "@/public/images/confirm-account.png";
import Image from "next/image";
import Link from "next/link";

const ConfirmAccount = () => {
  return (
    <div className="flex items-center justify-center py-10 md:py-20 lg:py-28">
      <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto">
        <Image src={confirmImg} alt="confirm illustration" className="mb-14" />
        <h2 className="h2 mb-6">Confirm your account</h2>
        <p className="mb-8 lg:mb-10">
          Hi Henwik, we&apos;re glad to have you on board! Please confirm your
          account to continue using our app.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="btn">
            Confirm
          </Link>
          <Link href="#" className="btn-outline">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAccount;
