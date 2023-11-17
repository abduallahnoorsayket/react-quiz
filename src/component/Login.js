import React from "react";
import classes from "../styles/Login.module.css";
import IllustrationLogin from "./IllustrationLogin";
import Form from "./Form";
import TextInput from "./TextInput";
import Button from "./Button";

export const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <IllustrationLogin />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="text" placeholder="Enter password" icon="lock" />
          <Button> <span> Submit now </span> </Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};
export default Login;
