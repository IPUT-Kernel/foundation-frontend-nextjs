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
const series = [
  {
    name: "Total Projects",
    type: "bar",
    data: [40, 50, 44, 31, 22, 43, 20, 35, 22, 32, 30, 16],
  },
  {
    name: "Projects View",
    type: "bar",
    data: [30, 28, 30, 32, 26, 30, 27, 36, 32, 46, 30, 27],
  },
  {
    name: "Projects Sale",
    type: "bar",
    data: [5, 8, 6, 12, 14, 8, 7, 6, 8, 10, 10, 5],
  },
];

const CompanyOverview = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme } = useTheme();
  const { windowSize } = useWindowSize();
  const { dir } = useLayout();

  const chartData: ApexOptions = {
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
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth:
          windowSize! < 400
            ? "5"
            : windowSize! < 800
            ? "6"
            : windowSize! < 1600
            ? "8"
            : "9",
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
    yaxis: [
      {
        min: 0,
        max: 120,
        labels: {
          show: false,
        },
      },
      {
        seriesName: "Total Projects",
        min: 0,
        max: 50,
        show: false,
      },
      {
        seriesName: "Projects View",
        min: 0,
        max: 50,
        show: false,
      },
      {
        seriesName: "Projects Sale",
        min: 0,
        max: 50,
        axisBorder: {
          show: false,
        },
        labels: {
          offsetX: dir == "rtl" ? -40 : -30,
          show: true,
          style: {
            colors: theme == "light" ? "#404A60" : "#EBECEF",
          },
        },
      },
    ],
    colors: ["#4680FF", "#00998B", "#FFC861"],
    fill: {
      colors: ["#4680FF", "#00998B", "#FFC861"],
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
    grid: {
      borderColor: theme == "dark" ? "#404A60" : "#EBECEF",
      padding: {
        left: -20,
      },
    },
  };
  return (
    <div className="box col-span-12 lg:col-span-6 overflow-x-hidden">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Company Overview</p>
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
        options={chartData}
        series={series}
        type="bar"
      />
    </div>
  );
};

export default CompanyOverview;
