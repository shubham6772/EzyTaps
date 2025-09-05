import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Helper } from "../../../Utils/Helper/Helper";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface propsModel {
  data: any;
  theme: boolean; // true = dark, false = light
}

const LineChart = ({ data, theme }: propsModel) => {
  const [styledData, setStyledData] = useState(data);
  const [options, setOptions] = useState<any>({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 12,       // smaller box
          boxHeight: 12,      // square shape
          padding: 10,        // spacing between items
          usePointStyle: false, // keep it as box, not circle
          font: {
            size: 12
          }
        }
      },
    },
    scales: {},
  });

  useEffect(() => {
    // Read CSS variables dynamically
    const lineColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--main-theme-clr")
      .trim();
    const bgColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-primary")
      .trim();
    const gridColorHex = getComputedStyle(document.documentElement)
      .getPropertyValue("--color")
      .trim();

    // Update dataset colors
    setStyledData({
      ...data,
      datasets: data.datasets.map((ds: any) => ({
        ...ds,
        borderColor: lineColor,          // line color
        backgroundColor: Helper.hexToRgba(lineColor, 0.2), // fill under the line
        fill: true,                      // enable area fill
        tension: 0.4,                    // optional: smooth curves
      })),
    });

    // Update grid and tick colors
    setOptions((prev: any) => ({
      ...prev,
      scales: {
        x: {
          grid: {
            display: false,
            color: Helper.hexToRgba(gridColorHex, 0.2),
            borderColor: Helper.hexToRgba(gridColorHex, 1),
          },
          ticks: {
            color: gridColorHex,
          },
        },
        y: {
          grid: {
            color: Helper.hexToRgba(gridColorHex, 0.2),
            borderColor: Helper.hexToRgba(gridColorHex, 1),
          },
          ticks: {
            color: gridColorHex,
            maxTicksLimit: 8,
          },
        },
      },
    }));
  }, [data, theme]); // triggers whenever theme changes

  return <Line data={styledData} options={options} />;
};

export default LineChart;
