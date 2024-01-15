import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import OptionsVertical from "../shared/OptionsVertical";
const projects = [
  {
    title: "EPL",
    country: "England",
    icon: "/images/leagues/epl.png",
  },
  {
    title: "La Liga",
    country: "Spain",
    icon: "/images/leagues/la-liga.png",
  },
  {
    title: "Bundesliga",
    country: "Germany",
    icon: "/images/leagues/bundesliga.png",
  },
  {
    title: "Serie A",
    country: "Italy",
    icon: "/images/leagues/serie.png",
  },
  {
    title: "Ligue 1",
    country: "France",
    icon: "/images/leagues/ligue1.png",
  },
  {
    title: "MLS",
    country: "United States and Canada",
    icon: "/images/leagues/mls.png",
  },
  {
    title: "Premeira Liga",
    country: "Portugal",
    icon: "/images/leagues/premeira-liga.png",
  },
  {
    title: "Eredivisie",
    country: "Dutch league",
    icon: "/images/leagues/eredivisie.png",
  },
  {
    title: "Scottish Premiership",
    country: "Scotland",
    icon: "/images/leagues/scottish.png",
  },
  {
    title: "Brasileirao",
    country: "Brazil",
    icon: "/images/leagues/brasileirao.png",
  },
];
const AvailableLeague = () => {
  return (
    <div className="col-span-12 lg:col-span-4">
      <div className="box">
        <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
          <p className="font-medium">Available Leagues</p>
          <OptionsVertical />
        </div>
        <div className="flex flex-col gap-6">
          {projects.map(({ title, icon, country }) => (
            <Link
              href="#"
              key={title}
              className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div
                  className={`md:w-[54px] md:h-[54px] shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-n0 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.12)] text-primary`}>
                  <Image src={icon} width={36} height={36} alt="icon" />
                </div>
                <div>
                  <p className="text-base sm:text-xl font-medium sm:mb-2">
                    {title}
                  </p>
                  <span className="text-xs sm:text-sm">{country}</span>
                </div>
              </div>
              <button className="md:w-14 md:h-14 w-10 h-10 flex shrink-0 items-center justify-center rounded-full bg-primary/5 dark:bg-bg3 text-primary group-hover:bg-primary group-hover:text-n0 duration-300">
                <IconArrowUpRight />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableLeague;
