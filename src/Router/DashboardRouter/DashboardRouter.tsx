
import { KeyMapper } from "../../KeyMapper/KeyMapper";
import  Analytics from "../../Pages/Analytics/Analytics";
import  BuildLinks from "../../Pages/BuildLinks/BuildLinks";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Settings from "../../Pages/Settings/Settings";
import UpgradePlan from "../../Pages/UpgradePlan/UpgradePlan";

export const DashboardRoutes = [
  {
    index: true,
    element: <Dashboard />,
  },
  {
    path: KeyMapper.PremiumPages.Analytics,
    element: <Analytics />,
  },
  {
    path: KeyMapper.PremiumPages.Settings,
    element: <Settings />,
  },
  {
    path: KeyMapper.PremiumPages.BuildLinks,
    element: <BuildLinks />,
  },
  {
    path: KeyMapper.PremiumPages.Upgrade,
    element: <UpgradePlan />,
  },
];
