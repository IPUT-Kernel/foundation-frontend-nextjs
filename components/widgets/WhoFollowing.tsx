import Image from "next/image";
import Link from "next/link";
import OptionsVertical from "../shared/OptionsVertical";
const suggested = [
  {
    img: "/images/user.png",
    name: "Ralph Edwards",
    email: "info@gmail.com",
  },
  {
    img: "/images/user-2.png",
    name: "Marvin McKinney",
    email: "info@gmail.com",
  },
  {
    img: "/images/user-3.png",
    name: "Cody Fisher",
    email: "info@gmail.com",
  },
  {
    img: "/images/user-4.png",
    name: "Jacob Jones",
    email: "info@gmail.com",
  },
  {
    img: "/images/user-5.png",
    name: "James Cook",
    email: "info@gmail.com",
  },
  {
    img: "/images/user-6.png",
    name: "Edward Rock",
    email: "info@gmail.com",
  },
];
const WhoFollowing = () => {
  return (
    <div className="box mb-4 xxxl:mb-6">
      <div className="flex justify-between items-center bb-dashed pb-6 mb-6">
        <p className="font-medium">Who is following you</p>
        <OptionsVertical />
      </div>
      <div className="flex justify-between p-4 lg:p-6 bg-primary/5 dark:bg-bg3">
        <p className="font-semibold text-lg">Suggested</p>
        <Link href="#" className="font-semibold text-lg">
          Click Here
        </Link>
      </div>
      <div className="flex flex-col">
        {suggested.map(({ email, img, name }) => (
          <div
            key={name}
            className="flex items-center justify-between px-2 sm:px-4 xl:px-6 py-2 xl:py-4 even:bg-primary/5 dark:even:bg-bg3">
            <Link href="#" className="flex items-center gap-3 sm:gap-4">
              <Image
                src={img}
                width={40}
                height={40}
                className="rounded-full"
                alt="img"
              />
              <div>
                <p className="text-sm font-semibold mb-1">{name}</p>
                <span className="text-xs">{email}</span>
              </div>
            </Link>
            <Link
              href="#"
              className="btn shadow-none text-primary border border-n30 bg-primary/5 dark:bg-bg3 dark:border-n500">
              Follow
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoFollowing;
