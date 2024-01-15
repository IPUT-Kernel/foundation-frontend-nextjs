"use client";
import { options } from "@/public/data/timesDropdown";
import { useLayout } from "@/utils/LayoutContext";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const OverallCondition = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme } = useTheme();
  const { dir } = useLayout();

  const chartData: ApexOptions = {
    series: [
      {
        name: "Summer",
        type: "area",
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
      },
      {
        name: "Winter",
        type: "line",
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#5D69F4", "#FFC861"],
    fill: {
      type: "solid",
      opacity: [0.35, 1],
    },
    labels: [
      "Dec 01",
      "Dec 02",
      "Dec 03",
      "Dec 04",
      "Dec 05",
      "Dec 06",
      "Dec 07",
      "Dec 08",
      "Dec 09 ",
      "Dec 10",
      "Dec 11",
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
    xaxis: {
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
        offsetX: dir == "rtl" ? -30 : 0,
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 20,
      },
      offsetY: 8,
      markers: {
        height: 4,
        width: 4,
        offsetX: dir == "rtl" ? 5 : -5,
      },
      labels: {
        colors: theme == "light" ? "#404A60" : "#EBECEF",
      },
    },
    grid: {
      borderColor: theme == "dark" ? "#404A60" : "#EBECEF",
    },
  };
  return (
    <div className="col-span-12 lg:col-span-6 box overflow-x-hidden">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Overall Condition</p>
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
        height={330}
        width={"100%"}
        series={chartData.series}
        options={chartData}
        type="line"
      />
    </div>
  );
};

export default OverallCondition;
