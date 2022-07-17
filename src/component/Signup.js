import React from "react";
import Illustration from "./Illustration";
import Form from "./Form";
import classes from "../styles/Signup.module.css";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";

export const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="text" placeholder="Enter password" icon="lock" />
          <TextInput
            type="text"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox type="checkbox" text="i agree to terms  &amp; conditions" />
          <Button>Submit now </Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
