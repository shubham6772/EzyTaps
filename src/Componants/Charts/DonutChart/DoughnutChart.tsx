import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PropsModel {
  data: any;
  theme: boolean;
  cutout?: string | number; // controls donut hole size
}

const DoughnutChart = ({ data, theme, cutout = "60%" }: PropsModel) => {
  const [styledData, setStyledData] = useState(data);
  const [options, setOptions] = useState<any>({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        align: "center",
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          padding: 10,
          font: { size: 12 },
        },
      },
    },
    cutout, // inner radius for donut hole
  });

  useEffect(() => {
    const mainColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--main-theme-clr")
      .trim();
    const textColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color")
      .trim();

    setStyledData({
      ...data,
      datasets: data.datasets.map((ds: any) => ({
        ...ds,
        backgroundColor:
          ds.backgroundColor ||
          [
            `${mainColor}CC`, // semi-transparent shades
            `${mainColor}99`,
            `${mainColor}66`,
            `${mainColor}33`,
          ],
      })),
    });

    setOptions((prev: any) => ({
      ...prev,
      plugins: {
        ...prev.plugins,
        legend: {
          ...prev.plugins.legend,
          labels: {
            ...prev.plugins.legend.labels,
            color: textColor,
          },
        },
      },
    }));
  }, [data, theme, cutout]);

  return <Doughnut data={styledData} options={options} />;
};

export default DoughnutChart;
