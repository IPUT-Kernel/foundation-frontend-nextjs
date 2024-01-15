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

const SummeryChart = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme } = useTheme();
  let chartData: ApexOptions = {
    series: [44, 55, 67, 83],
    chart: {
      height: 413,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        track: {
          background: theme == "dark" ? "#343E56" : "#EBECEF",
        },
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
            color: theme == "light" ? "#404A60" : "#EBECEF",
          },
          total: {
            show: true,
            label: "Total",
            color: theme == "light" ? "#404A60" : "#EBECEF",
            formatter: function (w: string) {
              return "9845";
            },
          },
        },
      },
    },
    legend: {
      show: false,
      position: "bottom",
    },
    colors: ["#5D69F4", "#00998B", "#FFC861", "#FF6161"],
    labels: ["Application", "Components", "Widgets", "Revenue"],
    responsive: [
      {
        breakpoint: 1820,
        options: {
          chart: {
            height: 340,
          },
        },
      },
      {
        breakpoint: 1600,
        options: {
          chart: {
            height: 308,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 350,
          },
        },
      },
      {
        breakpoint: 570,
        options: {
          chart: {
            height: 250,
          },
        },
      },
      {
        breakpoint: 400,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
  };
  return (
    <div className="col-span-12 lg:col-span-6 box mb-4 xxxl:mb-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Projects Summery</p>
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
        height={300}
        width={"100%"}
        series={chartData.series}
        options={chartData}
        type="radialBar"
      />
      <div className="flex items-center justify-around">
        <div className="flex flex-col text-center">
          <p className="font-medium">8953</p>
          <span>Completed</span>
        </div>
        <div className="flex flex-col text-center">
          <p className="font-medium">2345</p>
          <span>In Progress</span>
        </div>
      </div>
    </div>
  );
};

export default SummeryChart;
