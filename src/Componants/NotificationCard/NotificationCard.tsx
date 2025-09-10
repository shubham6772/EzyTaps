import type React from "react";
import "./NotificationCard.scss";
import { icons } from "../../data/iconsData";

interface propsModel {
  title: string,
  date: string,
}

const NotificationCard: React.FC<propsModel> = ({ title, date }) => {
  return (
    <div className="notification-card-main-container">

      <div className="notification-card-icon-container">
        <icons.NotificationsIcon fontSize="large" />
      </div>

      <div className="notification-card-container">
        <div className="notification-card-title">{title}</div>
        <div className="notification-card-date">{date}</div>
      </div>
    </div>
  )
}

export default NotificationCard