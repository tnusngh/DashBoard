import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartPie = () => {
  const [st, setSt] = useState({
    series: [65], // Three different values
    options: {
      chart: {
        height: 400,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "60%",
            background: "#F2EFFF" // Empty lines background
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              color: "#888",
              fontSize: "17px",
              offsetY: -10
            },
            value: {
              formatter: function (val) {
                return val + "%";
              },
              color: "#643CEA", // Use #643CEA for the colored bar
              fontSize: "36px"
            }
          },
          track: {
            background: "#F2EFFF", // Empty lines background
            strokeWidth: "67%"
          },
          colors: ["#F2EFFF"] // Empty background color
        }
      },
      labels: ["New Users,"]
    }
  });

  return (
    <div>
      <ReactApexChart
        options={st.options}
        series={st.series}
        type="radialBar"
        height={250}
      />
    </div>
  );
};

export default ChartPie;
