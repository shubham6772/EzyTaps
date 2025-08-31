import Switch from "@mui/material/Switch";
import "./MUISwitch.scss";
import { memo } from "react";

export const MaterialUISwitch = memo ((props: any) => {
  return <Switch className="material-switch" {...props} />;
});
