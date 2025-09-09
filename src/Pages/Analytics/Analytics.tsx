import AnalyticsCard from "../../Componants/AnalyticsCard/AnalyticsCard"
import "./Analytics.scss";

let AnalyticCardData = [
  {
    key: "sdnionsdoi",
    name: "My Link",
    link: "https://abc.com/abcbc",
    fullURL: "https://google.com/anc/dnnd/sdnsd?chdd=dndf&nksdfns=sdnksd&sndoisd=bsdkjsd"
  }
]

const Analytics = () => {
  return (
    <div className="analytics-page-main-container">
      <div className="analytics-text">Analytics</div>

      <div className="analytics-content">
        {
          AnalyticCardData.map((data) => {
            return (
              <div className="analytics-card" key={data.key}>
                <AnalyticsCard {...data} />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Analytics