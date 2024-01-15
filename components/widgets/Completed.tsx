"use client";

import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Completed = () => {
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
            color: undefined,
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
    colors: ["#5D69F4"],
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
    <div className="col-span-12 md:col-span-6 xl:col-span-4 box xxl:p-10 text-center flex flex-col items-center justify-center">
      <ReactApexChart
        height={300}
        width={"100%"}
        series={chartData.series}
        options={chartData}
        type="radialBar"
      />
      <h4 className="h4 mb-4">Successful</h4>
      <p className="mb-8 xl:mx-8">
        Congrats, your efforts have been rewarded. Keep up like this!
      </p>
      <Link href="#" className="btn w-full flex justify-center">
        View Details
      </Link>
    </div>
  );
};

export default Completed;
