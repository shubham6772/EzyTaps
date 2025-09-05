import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PropsModel {
  data: any;
  theme: boolean;
}

const BarChart = ({ data, theme }: PropsModel) => {
  const [styledData, setStyledData] = useState(data);
  const [options, setOptions] = useState<any>({
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          padding: 10,
          usePointStyle: false,
          font: { size: 12 },
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false } },
    },
  });

  useEffect(() => {
    // Read CSS variables dynamically like LineChart
    const barColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--main-theme-clr")
      .trim();
    const gridColorHex = getComputedStyle(document.documentElement)
      .getPropertyValue("--color")
      .trim();

    // Update dataset colors dynamically
    setStyledData({
      ...data,
      datasets: data.datasets.map((ds: any) => ({
        ...ds,
        backgroundColor: barColor,
        borderColor: barColor,
        borderRadius: 0,
        barThickness: undefined, // auto shrink if needed
        maxBarThickness: 30,
      })),
    });

    // Update scales ticks dynamically
    setOptions((prev: any) => ({
      ...prev,
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: gridColorHex },
        },
        y: {
          grid: { display: false },
          ticks: { color: gridColorHex },
        },
      },
    }));
  }, [data, theme]);

  return <Bar data={styledData} options={options} />;
};

export default BarChart;
