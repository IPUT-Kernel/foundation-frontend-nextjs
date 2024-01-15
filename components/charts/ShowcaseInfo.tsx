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

const ShowcaseInfo = () => {
  const [selected, setSelected] = useState(options[0]);
  const { theme } = useTheme();
  const { dir } = useLayout();

  const chartData: ApexOptions = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
      height: 355,
      type: "polarArea",
    },
    colors: [
      "#5D69F4",
      "#00998B",
      "#FFC861",
      "#FF6161",
      "#8169D3",
      "#5D69F4",
      "#00998B",
      "#FFC861",
      "#FF6161",
    ],
    labels: [
      "Application",
      "Widgets",
      "Input Forms",
      "Components",
      "Pages",
      "Earning List",
      "Total Sale",
      "Revenue",
      "Ads Spent",
    ],
    stroke: {
      colors: theme == "dark" ? ["#343E56"] : ["#EBECEF"],
      width: 2,
    },
    fill: {
      opacity: 1,
    },
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
    ],
    dataLabels: {
      enabled: true,
      style: {
        colors: theme != "dark" ? ["#343E56"] : ["#EBECEF"],
        fontSize: "12px",
      },
      textAnchor: "middle",

      background: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 1,
          strokeColor: theme == "dark" ? "#343E56" : "#EBECEF",
        },
        spokes: {
          strokeWidth: 1,
          connectorColors: theme == "dark" ? "#343E56" : "#EBECEF",
        },
      },
    },
    legend: {
      offsetX: dir == "rtl" ? -10 : 10,
      offsetY: 10,
      itemMargin: {
        vertical: 4,
      },
      horizontalAlign: "center",
      labels: {
        colors: theme == "light" ? "#404A60" : "#EBECEF",
      },
      markers: {
        width: 5,
        height: 5,
        offsetX: dir == "rtl" ? 5 : -5,
      },
    },
  };
  return (
    <div className="col-span-12 lg:col-span-6 box overflow-x-hidden">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Showcase Info</p>
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
        type="polarArea"
      />
    </div>
  );
};

export default ShowcaseInfo;
