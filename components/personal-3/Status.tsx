"use client";
import { options } from "@/public/data/timesDropdown";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
import ProgressBar from "../shared/ProgressBar";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const progressData = [
  {
    id: 1,
    title: "Completed",
    bg: "bg-primary",
    width: "w-[90%]",
    percent: 90,
    color: "text-primary",
  },
  {
    id: 2,
    title: "Pending",
    bg: "bg-secondary1",
    width: "w-[70%]",
    percent: 70,
    color: "text-secondary1",
  },
  {
    id: 3,
    title: "Cancelled",
    bg: "bg-secondary2",
    width: "w-[60%]",
    percent: 60,
    color: "text-secondary2",
  },
];
const Status = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme } = useTheme();
  const chartData: ApexOptions = {
    series: [67],
    chart: {
      height: 350,
      type: "radialBar",
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: {
          background: theme == "light" ? "#DFE0E4" : "#404A60",
        },
        dataLabels: {
          name: {
            fontSize: "16px",
            color: "#5D69F4",
            offsetY: 120,
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: theme == "light" ? "#404a60" : "#dfe0e4",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },

    stroke: {
      dashArray: 4,
    },
    labels: ["Returning Customer"],
    fill: {
      colors: ["#5D69F4"],
      opacity: 1,
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 300,
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
    ],
  };

  return (
    <div className="col-span-12 lg:col-span-6 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-6 bb-dashed">
        <p className="font-medium">Project Status</p>
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
      <ProgressBar progressData={progressData} />
    </div>
  );
};

export default Status;
