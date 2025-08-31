import React, { useState, useCallback } from "react";
import ConverterInputBar from "../../ConverterInputBar/ConverterInputBar";
import ButtonComponant from "../../ButtonComponant/ButtonComponant";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import "./Login.scss";

const icons = {
  ArrowForwardIosRounded: <ArrowForwardIosRounded />,
  EmailIcon: <EmailIcon />,
  VisibilityOffIcon: <VisibilityOffIcon />,
  VisibilityIcon: <VisibilityIcon />

}

const Login = () => {
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
    <div className="login-form-container">
      <div className="login-form-inputs">
        <div className="login-form-username-container">
          <ConverterInputBar label="Username/Email *" value={username} handleChange={handleUsernameChange} endIcon={icons.EmailIcon} />
        </div>
        <div className="login-form-password-container">
          <ConverterInputBar label="Password *" value={password} handleChange={handlePasswordChange} endIcon={icons.VisibilityIcon} />
          <div className="forget-password-btn">Forgot Password</div>
        </div>
      </div>
      <div className="submit-button">
        <ButtonComponant customClassName="submit-btn" type="contained" text="Submit" endIcon={icons.ArrowForwardIosRounded} />
      </div>
    </div>
  );
};

export default Login;
