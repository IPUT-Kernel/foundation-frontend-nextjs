"use client";
import {
  IconArrowDownLeft,
  IconArrowUpRight,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { ApexOptions } from "apexcharts";
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
};

const StatBox = ({ box }: { box: StatBoxProps }) => {
  const { amount, icon, percent, title, bg = "#5D69F4" } = box;
  const chartData: ApexOptions = {
    chart: {
      height: "100%",
      type: "area",
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
        shade: "dark",
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
    <div className="col-span-12 md:col-span-6 border border-n30 dark:border-n500 overflow-x-hidden 4xl:col-span-3 bg-n0 rounded-2xl dark:bg-bg4">
      <div className="box border-none rounded-b-none pb-0">
        <div className="bb-dashed pb-6 mb-6 flex items-center justify-between">
          <p className="font-medium">{title}</p>
          <ThreeDots />
        </div>
        <div className="flex items-center gap-4 lg:gap-6 pb-6 bb-dashed">
          <span className="p-4 inline-flex rounded-2xl bg-primary/5 dark:bg-bg3 text-primary">
            {icon}
          </span>
          <div>
            <h4 className="h4 mb-4">{amount}</h4>
            <div className="flex items-center gap-3">
              <span
                className={`flex text-sm items-center gap-1 ${
                  percent < 30 && "text-secondary2"
                } ${percent > 80 && "text-primary"} ${
                  percent > 30 && percent < 50 && "text-secondary1"
                }`}>
                {percent < 30 && <IconArrowDownLeft />}{" "}
                {percent > 80 && <IconArrowUpRight />}{" "}
                {percent > 30 && percent < 50 && <IconArrowsLeftRight />}
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
