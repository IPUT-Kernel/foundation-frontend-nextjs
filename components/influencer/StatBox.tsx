"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import ThreeDots from "../shared/ThreeDots";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
type StatBoxProps = {
  title: string;
  amount: string;
  percent: number;
  icon: JSX.Element;
  bg?: string;
  color: string;
};

const StatBox = ({ box }: { box: StatBoxProps }) => {
  const { amount, icon, percent, title, color, bg = "#5D69F4" } = box;
  const { theme } = useTheme();
  const chartData: ApexOptions = {
    chart: {
      height: "100%",
      type: "area",
      background: theme == "dark" ? "#1B232D" : "rgba(0,0,0,0)",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      curve: "straight",
    },
    series: [
      {
        name: "Series 1",
        data: [
          40, 32, 25, 32, 22, 34, 34, 19, 29, 35, 30, 40, 23, 33, 45, 32, 22,
          34, 34, 19, 29,
        ],
      },
    ],
    tooltip: {
      enabled: false,
    },
    colors: [bg],
    fill: {
      colors: [bg],
      opacity: 1,
      type: "gradient",
      gradient: {
        shade: theme == "dark" ? "dark" : "light",
        type: "vertical",
        shadeIntensity: 0.3,
        gradientToColors: undefined,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.1,
        stops: [0, 100, 100],
        colorStops: [],
      },
    },
    xaxis: {
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      tooltip: {
        enabled: false,
        // followCursor: true
      },
      labels: {
        show: false,
      },
    },
  };

  return (
    <div className="col-span-2 md:col-span-1 xl:col-span-2 border overflow-x-hidden border-n30 dark:border-n500 xxl:col-span-3 bg-primary/5 dark:bg-bg3 rounded-2xl">
      <div className="box bg-transparent border-none rounded-b-none pb-0">
        <div className="bb-dashed mb-4 pb-4 lg:pb-6 lg:mb-6 flex items-center justify-between">
          <p className="font-medium">{title}</p>
          <ThreeDots />
        </div>
        <div className="flex items-center gap-4 lg:gap-6 pb-4 lg:pb-6 bb-dashed">
          <span
            className={`p-4 inline-flex rounded-2xl bg-n0 dark:bg-bg4 ${color}`}>
            {icon}
          </span>
          <div>
            <h4 className="h4 mb-2 md:mb-4">{amount}</h4>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`flex items-center gap-1 ${color}`}>
                <IconArrowUpRight />
                {percent} %
              </span>
              <p className="text-sm">Since Last month</p>
            </div>
          </div>
        </div>
      </div>

      <ReactApexChart
        options={chartData}
        series={chartData.series}
        type="area"
        height={120}
        width={"100%"}
      />
    </div>
  );
};

export default StatBox;
