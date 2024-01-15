"use client";
import { options } from "@/public/data/timesDropdown";
import { useLayout } from "@/utils/LayoutContext";
import useWindowSize from "@/utils/useWindowSize";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const WeeklyTransactions = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme } = useTheme();
  const { windowSize } = useWindowSize();
  const { dir } = useLayout();

  const chartData: ApexOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: "donut",
    },
    fill: {
      colors: ["#5D69F4", "#00998B", "#FFC861", "#FF6161", "#775DD0"],
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              color: theme == "light" ? "#404A60" : "#EBECEF",
              fontSize: "16px",
              offsetY: 2,
            },
            total: {
              show: true,
              label: "Bank",
              fontSize: "24px",
              color: theme == "light" ? "#404A60" : "#EBECEF",
              formatter: () => "Transactions",
            },
          },
        },
      },
    },
    legend: {
      position: windowSize! > 992 ? "right" : "bottom",
      offsetY: windowSize! > 992 ? 20 : 0,
      itemMargin: {
        vertical: 8,
      },
      horizontalAlign: "center",
      labels: {
        colors: theme == "light" ? "#404A60" : "#EBECEF",
      },
      markers: {
        width: 8,
        height: 8,
        offsetX: dir == "rtl" ? 5 : -5,
      },
    },
    stroke: {
      colors: theme == "dark" ? ["#343E56"] : ["#EBECEF"],
    },
    labels: ["Completed", "In Progress", "Yet to Start", "Pending", "Canceled"],
  };
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-5 4xl:col-span-4 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Weekly Transactions</p>
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
        height={400}
        width={"100%"}
        series={chartData.series}
        options={chartData}
        type="donut"
      />
    </div>
  );
};

export default WeeklyTransactions;
