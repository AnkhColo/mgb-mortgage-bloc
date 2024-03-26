import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { type } from "@testing-library/user-event/dist/type";

const Charts = () => {
  return (
    <div className="flex  ">
      <ChartComponent />
      <ChartComponent />
    </div>
  );
};

export default Charts;

const ChartComponent = () => {
  return (
    <>
      <div className="relative  top-[50px] left-[1px] mx-[10px] my-[50px]">
        <div className="relative rounded-md my-1 bg-slate-800 w-[500px]  h-[89px]">
          <div className="absolute top-2 left-2 text-blue-600">
            Total Expenditure
          </div>
          <div className="text-6xl absolute right-2 top-4 ">£ 56,211.01</div>
        </div>

        <div className="relative rounded-md my-1 bg-slate-800 w-[500px]  h-[350px]">
          <div className=" absolute top-[5%] left-[20%] w-[300px]  h-[150px]">
            <PieChart />
          </div>
          <div className="chartKeyComponent"></div>
        </div>
      </div>
    </>
  );
};

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        label: ["Main Income", "Passive Income"],
        datasets: [
          {
            data: [1000, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div>
      <canvas ref={chartRef} style={{ width: "50px", height: "50px" }} />
    </div>
  );
};
