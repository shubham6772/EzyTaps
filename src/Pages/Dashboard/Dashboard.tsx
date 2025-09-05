import CounterdownNumberBox from "../../Componants/CountdownNumberBox/CountdownNumberBox"
import LineChart from "../../Componants/Charts/LineChart/LineChart";
import { useAppSelector } from "../../Redux/Hooks/hooks";
import { BarChartDataCountry, BarChartDataState, deviceTrafficData, LineChartData, polarData } from "../../data/ChartData";
import BarChart from "../../Componants/Charts/BarChart/BarChart";
import PolarAreaChart from "../../Componants/Charts/PolarAreaChart/PolarAreaChart";
import DoughnutChart from "../../Componants/Charts/DonutChart/DoughnutChart";

import "./Dashboard.scss";

const Dashboard = () => {

  const { isDarkTheme } = useAppSelector((state) => state.ThemeSlice);

  return (
    <div className="dashboard-container">

      <div className="dashboard-top-counter-boxes">
        <div className="counter-link-box">
          <CounterdownNumberBox value={"949"} duration={2} label="total links" />
        </div>
        <div className="counter-click-box">
          <CounterdownNumberBox value={"49494949"} duration={2} label="total clicks" />
        </div>
      </div>


      <div className="chart-container">
        <div className="line-chart-container">
          <LineChart data={LineChartData} theme={isDarkTheme} />
        </div>
        <div className="bar-chart-container">
          <div className="bar-chart-country">
            <BarChart data={BarChartDataCountry} theme={isDarkTheme} />
          </div>
          <div className="bar-chart-state">
            <BarChart data={BarChartDataState} theme={isDarkTheme} />
          </div>
        </div>
        <div className="polar-area-chart-container">
          <div className="polar-area-chart-referrer">
            <PolarAreaChart data={polarData} theme={isDarkTheme} />
          </div>
          <div className="dougnut-chart-devicetype">
            <DoughnutChart data={deviceTrafficData} theme={isDarkTheme} />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Dashboard