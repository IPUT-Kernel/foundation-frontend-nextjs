import Image from "next/image";
import Link from "next/link";

const GreetingCard = () => {
  return (
    <div className="col-span-12 lg:col-span-4 box">
      <h4 className="text-2xl font-medium mb-4">Hi, Hawkins</h4>
      <p className="mb-6">
        You have 6 interviews to conduct during this week. Your current progress
        is great. Check your schedule and don&nbsp;t miss any activity.
      </p>
      <div className="flex items-center gap-4 mb-6 xxl:mb-8">
        <Image width={38} height={52} src="/images/award.png" alt="icon" />
        <div>
          <p className="text-sm mb-1">Your Progress</p>
          <p className="font-medium">Outstanding</p>
        </div>
      </div>
      <Link href="#" className="btn flex justify-center bg-primary">
        View Schedule
      </Link>
    </div>
  );
};

export default GreetingCard;
