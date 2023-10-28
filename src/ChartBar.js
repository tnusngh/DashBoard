import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartBar = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Earnings",
        data: [5.2, 3.8, 6.5, 8.9, 7.2, 4.3, 2.8, 1.9, 3.5, 6.0, 4.7, 5.6]
      }
    ],
    options: {
      chart: {
        height: 200,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: false,
        formatter: (val) => val + "%",
        offsetY: -20
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
          "Dec"
        ]
      },
      title: {
        text: "Monthly Earnings",
        floating: true,
        offsetY: 0,
        align: "left",
        style: {
          color: "#444"
        }
      },
      colors: ["#c9bcff"] // Set your desired color here (e.g., #5A32EA for a blue color)
    }
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={250}
        width={600}
      />
    </div>
  );
};

export default ChartBar;
