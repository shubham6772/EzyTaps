import { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

interface PropsModel {
  data: any;
  theme: boolean;
  height?: string | number; // optional for custom sizing
  width?: string | number;
}

const PolarAreaChart = ({ data, theme, height = "100%", width = "100%" }: PropsModel) => {
  const [styledData, setStyledData] = useState(data);
  const [options, setOptions] = useState<any>({
    responsive: true,
    maintainAspectRatio: false, // allow parent to control size
    plugins: {
      legend: {
        position: "right",
        align: "center",
        labels: {
          font: { size: 12 },
        },
      },
    },
    scales: {
      r: {
        grid: {
          circular: true,
        },
        ticks: {
          stepSize: 20,
        },
      },
    },
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
            `${mainColor}80`,
            `${mainColor}60`,
            `${mainColor}40`,
            `${mainColor}20`,
          ],
        borderColor: mainColor,
        borderWidth: 1,
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
      scales: {
        r: {
          grid: {
            circular: true,
            color: `${textColor}40`,
          },
          ticks: {
            color: textColor,
          },
          angleLines: {
            color: `${textColor}40`,
          },
        },
      },
    }));
  }, [data, theme]);

  return (
    <div style={{ width, height }}>
      <PolarArea data={styledData} options={options} />
    </div>
  );
};

export default PolarAreaChart;
