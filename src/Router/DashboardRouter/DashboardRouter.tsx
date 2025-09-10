
import { KeyMapper } from "../../KeyMapper/KeyMapper";
import { LazyComponent } from "../../Utils/LazyComponent/LazyComponant";

const Analytics = LazyComponent(()=> import("../../Pages/Analytics/Analytics"));
const BuildLinks = LazyComponent(()=> import("../../Pages/BuildLinks/BuildLinks"));
const Dashboard = LazyComponent(()=> import("../../Pages/Dashboard/Dashboard"));
const Settings = LazyComponent(()=> import("../../Pages/Settings/Settings"));
const UpgradePlan = LazyComponent(()=> import("../../Pages/UpgradePlan/UpgradePlan"));

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
