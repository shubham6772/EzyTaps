import { icons } from "../../data/iconsData";
import NotificationCard from "../NotificationCard/NotificationCard";
import "./NotificationButton.scss";

const notifications = [
  {
    title : "Your report is ready",
    date : "15 Nov 2016"
  },
  {
    title : "New comment on your post take a look here hope you like",
    date : "15 Nov 2016"
  },
  {
    title :   "System update available Update Now...",
    date : "15 Nov 2016"
  },
  {
    title : "Your report is ready",
    date : "15 Nov 2016"
  },
  {
    title : "New comment on your post take a look here hope you like",
    date : "15 Nov 2016"
  },
  {
    title :   "System update available Update Now...",
    date : "15 Nov 2016"
  },
];

const NotificationButton = () => {
  return (
    <div className="notification-button">
      <icons.NotificationsIcon fontSize="large" className="ring-icon" />

      <div className="notification-card">
        {notifications.map((notificationData, idx) => (
          <div key={idx} className="notification-item">
            <NotificationCard {...notificationData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationButton;
