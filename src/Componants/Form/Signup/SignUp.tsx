import React, { useState, useCallback } from "react";
import ConverterInputBar from "../../ConverterInputBar/ConverterInputBar";
import ButtonComponant from "../../ButtonComponant/ButtonComponant";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCallIcon from '@mui/icons-material/AddCall';

import "./SignUp.scss";

const icons = {
  ArrowForwardIosRounded: <ArrowForwardIosRounded />,
  EmailIcon: <EmailIcon />,
  VisibilityOffIcon: <VisibilityOffIcon />,
  VisibilityIcon: <VisibilityIcon />,
  AccountCircleIcon: <AccountCircleIcon />,
  AddCallIcon: <AddCallIcon />
}



const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    []
  );

  return (
    <div className="signup-form-container">
      <div className="signup-form-inputs">
        <div className="signup-form-username-container">
          <ConverterInputBar label="Name *" value={username} handleChange={handleUsernameChange} endIcon={icons.AccountCircleIcon} />
        </div>
        <div className="signup-form-username-container">
          <ConverterInputBar label="Username/Email *" value={username} handleChange={handleUsernameChange} endIcon={icons.EmailIcon} />
        </div>
        <div className="signup-form-username-container">
          <ConverterInputBar label="Password *" value={username} handleChange={handleUsernameChange} endIcon={icons.VisibilityIcon} />
        </div>
        <div className="signup-form-username-container">
          <ConverterInputBar label="Phone *" value={username} handleChange={handleUsernameChange} endIcon={icons.AddCallIcon} startIcon={icons.AddCallIcon} />
        </div>
      </div>
      <div className="submit-button">
        <ButtonComponant customClassName="submit-btn" type="contained" text="Submit" endIcon={icons.ArrowForwardIosRounded} />
      </div>
    </div>
  );
};

export default SignUp;
