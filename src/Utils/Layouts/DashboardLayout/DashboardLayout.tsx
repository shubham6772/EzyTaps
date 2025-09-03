import { Outlet } from "react-router-dom";
import Sidebar from "../../../Componants/Sidebar/Sidebar";

import "./DashboardLayout.scss"

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout-main-container">
            <div className="dashboard-layout-sidebar-container">
                <Sidebar />
            </div>
            <div className="dashboard-layout-main-window">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
