"use client";
import { options } from "@/public/data/timesDropdown";
import useWindowSize from "@/utils/useWindowSize";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const browers = [
  {
    icon: "/images/chrome.png",
    percent: "36.87%",
  },
  {
    icon: "/images/firefox.png",
    percent: "9.68%",
  },
  {
    icon: "/images/edge.png",
    percent: "3.25%",
  },
  {
    icon: "/images/opera.png",
    percent: "45.87%",
  },
];
const Browser = () => {
  const [selected, setSelected] = useState(options[0]);
  const { windowSize } = useWindowSize();
  const { theme } = useTheme();
  const series = [
    {
      name: "Browser Sessions",
      data: [80, 50, 30, 40, 60, 20],
    },
  ];
  const chartData: ApexOptions = {
    xaxis: {
      categories: ["Chrome", "Firefox", "Safari", "Opera", "Edge", "Explorer"],
      labels: {
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#5D69F4"],
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: theme == "light" ? "#DFE0E4" : "#404A60",
          connectorColors: theme == "light" ? "#DFE0E4" : "#404A60",
          strokeWidth: "2px",
          fill: {
            colors:
              theme == "light"
                ? ["#F7F7FE", "#ffffff"]
                : ["#131920", "#1B232D"],
          },
        },
      },
    },
  };
  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Sessions by Browser</p>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm">Sort By : </p>
          <Dropdown
            items={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
      <div className="overflow-x-hidden">
        <ApexChart
          height={windowSize! > 600 ? 400 : 250}
          type="radar"
          width={"100%"}
          options={chartData}
          series={series}
        />
        <div className="flex flex-wrap justify-center gap-5">
          {browers.map(({ icon, percent }) => (
            <div key={percent} className="flex items-center gap-2">
              <Image width={24} height={24} src={icon} alt="browser icon" />
              <p>{percent}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browser;
