import React, { useState, useCallback } from "react";
import ConverterInputBar from "../../ConverterInputBar/ConverterInputBar";
import ButtonComponant from "../../ButtonComponant/ButtonComponant";
import { icons } from "../../../data/iconsData";

import "./Login.scss";

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
          <ConverterInputBar label="Username/Email *" bold="medium" fontSize="medium" value={username} handleChange={handleUsernameChange} endIcon={<icons.EmailIcon />} />
        </div>
        <div className="login-form-password-container">
          <ConverterInputBar label="Password *" bold="medium" fontSize="medium" value={password} handleChange={handlePasswordChange} endIcon={<icons.VisibilityIcon />} />
          <div className="forget-password-btn">Forgot Password</div>
        </div>
      </div>
      <div className="submit-button">
        <ButtonComponant customClassName="submit-btn" type="contained" text="Submit" endIcon={<icons.ArrowForwardIosRounded />} />
      </div>
    </div>
  );
};

export default Login;
