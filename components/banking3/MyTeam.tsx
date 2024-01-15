"use client";
import { IconPhoneCall } from "@tabler/icons-react";
import Image from "next/image";
import OptionsVertical from "../shared/OptionsVertical";

const teams = [
  {
    name: "Arlene",
    img: "/images/user.png",
    contact: "880234123412",
  },
  {
    name: "Gloria",
    img: "/images/user-2.png",
    contact: "880234123412",
  },
  {
    name: "Aubrey",
    img: "/images/user-3.png",
    contact: "880234123412",
  },
  {
    name: "Regina",
    img: "/images/user-4.png",
    contact: "880234123412",
  },
  {
    name: "Gladys",
    img: "/images/user-5.png",
    contact: "880234123412",
  },
  {
    name: "Courtney",
    img: "/images/user-6.png",
    contact: "880234123412",
  },
];
const MyTeam = () => {
  return (
    <div className="col-span-12 lg:col-span-4 xxl:col-span-3 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">My Team</p>
        <OptionsVertical />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
              <th className="py-3 font-semibold px-4 text-start">Name</th>
              <th className="py-3 font-semibold px-4 text-center">Contact</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(({ contact, img, name }) => (
              <tr key={name} className="even:bg-primary/5 dark:even:bg-bg3">
                <td className="py-3 px-4">
                  <span className="flex items-center gap-2">
                    <Image
                      className="rounded-full"
                      src={img}
                      width={32}
                      height={32}
                      alt="img"
                    />
                    <p>{name}</p>
                  </span>
                </td>
                <td className="py-3 px-4 flex justify-center">
                  <a href={`tel:${contact}`}>
                    <IconPhoneCall />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTeam;
