import SidebarButton from "../SidebarButton/SidebarButton"
import HomeIcon from '@mui/icons-material/Home';
import LinkIcon from '@mui/icons-material/Link';
import BarChartIcon from '@mui/icons-material/BarChart';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import SettingsIcon from '@mui/icons-material/Settings';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

import "./Sidebar.scss"
import { KeyMapper } from "../../KeyMapper/KeyMapper";

const SidebarButtonList = [
  {
    icon: <HomeIcon fontSize="small" />,
    text: "dashboard",
    path: KeyMapper.PremiumPages.Dashboard
  },
  {
    icon: <LinkIcon fontSize="small" />,
    text: "build links",
    path: KeyMapper.PremiumPages.BuildLinks
  },
  {
    icon: <BarChartIcon fontSize="small" />,
    text: "analytics",
    path: KeyMapper.PremiumPages.Analytics
  },
  {
    icon: <PriceChangeIcon fontSize="small" />,
    text: "upgrade plan",
    path: KeyMapper.PremiumPages.Upgrade
  },
  {
    icon: <SettingsIcon fontSize="small" />,
    text: "settings",
    path: KeyMapper.PremiumPages.Settings
  }
]

const SidebarButtonEnd = [
  {
    icon: <GitHubIcon fontSize="small" />,
    text: "github",
    path: KeyMapper.ExternalPages.Github
  },
  {
    icon : <CodeIcon fontSize="small"/>,
    text : "Coded By?",
    path : KeyMapper.ExternalPages.Portfolio
  }
]

const Sidebar = () => {
  return (
    <div className="sidebar-button-list-container">
      <div className="sidebar-button-list">
        {
          SidebarButtonList.map(({ icon, text, path }, index) => {
            return (
              <SidebarButton key={index} icon={icon} text={text} path={path}/>
            )
          })
        }
      </div>
      <div className="sidebar-button-end">
        <hr />
        {
          SidebarButtonEnd.map(({icon, text, path}, index)=>{
            return(
              <SidebarButton key={index} icon={icon} text={text} path={path} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Sidebar