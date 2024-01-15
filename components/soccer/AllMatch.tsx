import Image from "next/image";
import OptionsVertical from "../shared/OptionsVertical";
const matchesData = [
  {
    time: "12:01 pm",
    match: {
      team1: {
        icon: "/images/liverpool.png",
        name: "Liverpool",
      },
      team2: {
        icon: "/images/ac-milan.png",
        name: "AC Milan",
      },
      result: "5 : 2",
    },
    venue: "Old Trafford",
    fromBottom: false,
  },
  {
    time: "07:59 pm",
    match: {
      team1: {
        icon: "/images/manchester.png",
        name: "Manchester City",
      },
      team2: {
        icon: "/images/juventus.png",
        name: "AC Milan",
      },
      result: "3 : 2",
    },
    venue: "Anfield",
    fromBottom: false,
  },
  {
    time: "02:34 pm",
    match: {
      team1: {
        icon: "/images/manchester-united.png",
        name: "Manchester United",
      },
      team2: {
        icon: "/images/dortmund.png",
        name: "Borussia Dortmund",
      },
      result: "0 : 2",
    },
    venue: "Anfield",
    fromBottom: false,
  },
  {
    time: "05:49 pm",
    match: {
      team1: {
        icon: "/images/chelsea.png",
        name: "Chelsea",
      },
      team2: {
        icon: "/images/bayern.png",
        name: "Bayern Munich",
      },
      result: "4 : 1",
    },
    venue: "San Siro",
    fromBottom: false,
  },
  {
    time: "10:41 pm",
    match: {
      team1: {
        icon: "/images/arsenal.png",
        name: "Arsenal",
      },
      team2: {
        icon: "/images/sevilla.png",
        name: "Sevilla",
      },
      result: "1 : 2",
    },
    venue: "Anfield",
    fromBottom: false,
  },
  {
    time: "04:15 pm",
    match: {
      team1: {
        icon: "/images/barcelona.png",
        name: "FC Barcelona",
      },
      team2: {
        icon: "/images/atletico.png",
        name: "Atletico Madrid",
      },
      result: "2 : 4",
    },
    venue: "Maracana",
    fromBottom: false,
  },
  {
    time: "10:32 pm",
    match: {
      team1: {
        icon: "/images/real-madrid.png",
        name: "Real Madrid",
      },
      team2: {
        icon: "/images/barcelona.png",
        name: "FC Barcelona",
      },
      result: "1 : 5",
    },
    venue: "Celtic Park",
    fromBottom: false,
  },
  {
    time: "01:55 pm",
    match: {
      team1: {
        icon: "/images/atletico.png",
        name: "Atletico Madrid",
      },
      team2: {
        icon: "/images/real-madrid.png",
        name: "Real Madrid",
      },
      result: "3 : 2",
    },
    venue: "Mestella",
    fromBottom: false,
  },
  {
    time: "12:23 pm",
    match: {
      team1: {
        icon: "/images/sevilla.png",
        name: "Sevilla",
      },
      team2: {
        icon: "/images/arsenal.png",
        name: "Arsenal",
      },
      result: "1 : 5",
    },
    venue: "San Siro",
    fromBottom: false,
  },
  {
    time: "01:08 pm",
    match: {
      team1: {
        icon: "/images/bayern.png",
        name: "Beyern Munich",
      },
      team2: {
        icon: "/images/chelsea.png",
        name: "Chelsea",
      },
      result: "3 : 2",
    },
    venue: "Anfield",
    fromBottom: false,
  },
  {
    time: "11:49 pm",
    match: {
      team1: {
        icon: "/images/dortmund.png",
        name: "Borussia Dortmund",
      },
      team2: {
        icon: "/images/manchester-united.png",
        name: "Manchester Unitd",
      },
      result: "1 : 5",
    },
    venue: "Camp Nou",
    fromBottom: false,
  },
  {
    time: "07:38 pm",
    match: {
      team1: {
        icon: "/images/leipzig.png",
        name: "RP Leipzig",
      },
      team2: {
        icon: "/images/manchester.png",
        name: "Manchester City",
      },
      result: "3 : 2",
    },
    venue: "Mestalla",
    fromBottom: false,
  },
  {
    time: "07:13 pm",
    match: {
      team1: {
        icon: "/images/juventus.png",
        name: "Juventus",
      },
      team2: {
        icon: "/images/leipzig.png",
        name: "RP Leipzig",
      },
      result: "1 : 5",
    },
    venue: "San Siro",
    fromBottom: true,
  },
  {
    time: "01:09 pm",
    match: {
      team1: {
        icon: "/images/ac-milan.png",
        name: "AC Milan",
      },
      team2: {
        icon: "/images/liverpool.png",
        name: "Liverpool",
      },
      result: "3 : 2",
    },
    venue: "Camp Nou",
    fromBottom: true,
  },
];
const AllMatch = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full whitespace-nowrap">
        <thead>
          <tr className="bg-primary/5 dark:bg-bg3">
            <th className="py-3 px-2 text-start">Time</th>
            <th></th>
            <th className="py-3 px-2 text-center">Match</th>
            <th></th>
            <th className="py-3 px-2 text-start">Venue</th>
            <th className="py-3 px-2 text-center">Details</th>
          </tr>
        </thead>
        <tbody>
          {matchesData.map(({ match, time, venue, fromBottom }) => (
            <tr key={time} className="even:bg-primary/5 dark:even:bg-bg3">
              <td className="py-3 px-2">
                <span className="flex items-center gap-3">
                  <span className="text-secondary2">•</span>
                  <span>{time}</span>
                </span>
              </td>
              <td className="py-3 px-2">
                <span className="flex text-end justify-end gap-2 items-center">
                  <span>{match.team1.name}</span>
                  <Image
                    src={match.team1.icon}
                    width={32}
                    height={32}
                    alt="icon"
                  />
                </span>
              </td>
              <td className="py-3 px-12 text-center">
                <span>{match.result}</span>
              </td>
              <td className="py-3 px-2">
                <span className="flex text-end justify-start gap-2 items-center">
                  <Image
                    src={match.team2.icon}
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span>{match.team2.name}</span>
                </span>
              </td>
              <td className="py-3 px-2">{venue}</td>
              <td className="py-3 px-2">
                <div className=" flex justify-center">
                  <OptionsVertical fromBottom={fromBottom} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllMatch;
