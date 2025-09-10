import { icons } from "../../data/iconsData";
import "./AnalyticsCard.scss";

interface propsModel {
    id: string,
    name: string,
    link: string,
    fullURL: string
}

const AnalyticsCard = ({ name, link, fullURL }: propsModel) => {
    return (
        <div className="analytics-card-main-container">
            <div className="analytics-card-link-container">
                {<icons.LinkIcon fontSize="large" />}
            </div>
            <div className="analytics-middle-container">
                <div className="analytics-info-container">
                    <div className="link-name-container">{name}</div>
                    <div className="shorten-link-container">{link}</div>
                    <div className="full-url-container">{fullURL}</div>
                </div>
                <div className="analytics-detail-container">
                    <div className="engagement-container">
                        <div className="enagegment-bar-icon">
                            {<icons.BarChartIcon />}
                        </div>
                        <span>23</span>
                        <span>engagement</span>
                    </div>
                    <div className="date-info-container">
                        <div className="calender-icon">
                            {<icons.CalendarTodayIcon fontSize="small" />}
                        </div>
                        <div className="time-text">26 Nov 2015</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AnalyticsCard