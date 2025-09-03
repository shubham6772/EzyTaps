
import Dashboard from "../../Pages/Dashboard/Dashboard";

export const DashboardRoutes = [
  {
    index: true,
    element: <Dashboard />,
  },
  {
    path: "analytics",
    element: <div>Analytics Page</div>,
  },
  {
    path: "settings",
    element: <div>Settings Page</div>,
  },
];
