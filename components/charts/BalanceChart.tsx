"use client";
import { options } from "@/public/data/timesDropdown";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const series = [
  {
    data: [11, 22, 15, 26, 23, 32, 21],
  },
  {
    data: [1, 14, 10, 31, 13, 35, 28],
  },
];

const BalanceChart = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme } = useTheme();

  const chartData: ApexOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      colors: ["#5D69F4", "#00998B"],
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      labels: {
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
    yaxis: {
      labels: {
        style: {
          colors: theme == "light" ? "#404A60" : "#EBECEF",
        },
        formatter: function (v) {
          return v + "k";
        },
      },
    },
    markers: {
      hover: {
        sizeOffset: 4,
      },
    },
    grid: {
      borderColor: theme == "dark" ? "#404A60" : "#EBECEF",
    },
  };
  return (
    <div className="col-span-12 lg:col-span-6 box overflow-x-hidden">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Balance Overview</p>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm">Sort By : </p>
          <Dropdown
            selected={selected}
            setSelected={setSelected}
            items={options}
          />
        </div>
      </div>
      <ReactApexChart
        height={250}
        width={"100%"}
        series={series}
        options={chartData}
        type="line"
      />
    </div>
  );
};

export default BalanceChart;
