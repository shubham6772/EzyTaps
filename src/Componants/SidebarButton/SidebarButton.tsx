import { useCallback } from "react";
import useNavigationHook from "../../Redux/Hooks/navigationHook";
import "./SidebarButton.scss";
import { useLocation } from "react-router-dom";

interface PropsModel {
  icon: React.ReactNode;
  text: string;
  path : string;
}

const SidebarButton = ({ icon, text, path }: PropsModel) => {

  const {goTo} =  useNavigationHook();
  const location = useLocation();

  // Determine if this button is active
  const isActive = location.pathname === path;

  // Stable click handler
  const handleClick = useCallback(() => {
      goTo(path);
  }, [goTo, path]);

  return (
    <div className="sidebar-button-wrapper" onClick={handleClick}>
      <div className={`sidebar-button-container ${isActive ? "active" : ""}`}>
        <div className="sidebar-button-icon">{icon}</div>
        <div className="sidebar-button-text">{text}</div>
      </div>
      <div className="sidebar-vertical-bar"></div>
    </div>
  );
};

export default SidebarButton;
