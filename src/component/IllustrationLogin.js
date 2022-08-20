import React from "react";
import classes from "../styles/Illustration.module.css";
import loginImage from "../assets/images/login.svg";

export const IllustrationLogin = () => {
  return (
    <>
      <div className={classes.illustration}>
        <img src={loginImage} alt="login" />
      </div>
    </>
  );
};

export default IllustrationLogin;
