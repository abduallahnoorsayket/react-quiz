import React from "react";
import Illustration from "./Illustration";
import Form from "./Form";
import classes from "../styles/Signup.module.css";

export const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration />
        <Form className={`${classes.signup} form`} />
      </div>
    </>
  );
};
