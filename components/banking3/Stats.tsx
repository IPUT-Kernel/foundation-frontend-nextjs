import {
  IconChartBar,
  IconChartHistogram,
  IconVolume,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import StatBox from "./StatBox";
const stats = [
  {
    title: "Market Cap",
    amount: "$929,992k",
    percent: 29.7,
    icon: <IconChartHistogram size={32} />,
  },
  {
    title: "Volume 24h",
    amount: "$929,992k",
    percent: 90.7,
    icon: <IconVolume size={32} />,
  },
  {
    title: "Low/high 24h",
    amount: "$929,992k",
    percent: 40.7,
    icon: <IconChartBar size={32} />,
  },
];
const Stats = () => {
  return (
    <>
      {stats.map((state) => (
        <StatBox box={state} key={state.title} />
      ))}
      <div className="col-span-12 md:col-span-6 xl:col-span-6 4xl:col-span-3 box">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 lg:w-auto lg:h-auto">
            <Image
              src="/images/bitcoin.png"
              className="rounded-2xl"
              width={72}
              height={72}
              alt="img"
            />
          </div>
          <div>
            <h4 className="h4 mb-3">Bitcoin</h4>
            <p>BTC</p>
          </div>
        </div>
        <p className="text-sm mb-6">
          Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act
          as money and a form of payment outside the control of any one person,
          group, or entity...
        </p>
        <div className="flex items-center gap-3 4xl:gap-5">
          <Link href="#" className="btn-outline px-3 4xl:px-5 py-2.5">
            Compare
          </Link>
          <Link href="#" className="btn  px-3 4xl:px-5 py-2.5">
            Buy BTC
          </Link>
        </div>
      </div>
    </>
  );
};

export default Stats;
