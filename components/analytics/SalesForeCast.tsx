"use client";
import useWindowSize from "@/utils/useWindowSize";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import OptionsVertical from "../shared/OptionsVertical";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const series = [
  {
    name: "Website Blog",
    type: "bar",
    data: [37, 12, 18],
  },
];

const SalesForeCast = () => {
  const { theme } = useTheme();
  const { windowSize } = useWindowSize();
  const options: ApexOptions = {
    chart: {
      width: "100%",
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"],
      },
    },
    labels: ["Goal", "Pending Forecast", "Revenue"],
    xaxis: {
      labels: {
        show: false,
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        color: theme == "dark" ? "#404A60" : "#EBECEF",
      },
    },
    yaxis: [
      {
        labels: {
          style: {
            colors: theme == "light" ? "#404A60" : "#EBECEF",
          },
        },
      },
      {
        opposite: true,
      },
    ],
    plotOptions: {
      bar: {
        dataLabels: {
          position: "center",
        },
      },
    },

    fill: {
      opacity: 1,
    },
    colors: ["#838CF6"],
    grid: {
      borderColor: theme == "dark" ? "#404A60" : "#EBECEF",
    },
  };
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="box">
        <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
          <p className="font-medium">Sales Forecast</p>
          <OptionsVertical />
        </div>
        <ReactApexChart
          height={windowSize! > 768 ? 400 : 250}
          width={"100%"}
          options={options}
          series={series}
          type="bar"
        />
        <p className="text-center bb-dashed mb-5 pb-5">
          Total Forecasted Value
        </p>
        <ul className="flex justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-primary/60"></span> Goal
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-primary/80"></span> Pending
            Forecast
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-primary/60"></span> Revenue
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SalesForeCast;
