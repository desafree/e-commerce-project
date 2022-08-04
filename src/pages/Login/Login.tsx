/* eslint-disable no-undef */
import React from "react";
import classes from "./Login.module.scss";
import { useRef, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import useLog from "../../hooks/useLog";

const Login = () => {
  useScrollToTop();

  const [login, setLogin] = useState(true);

  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const verifyPassword = useRef<HTMLInputElement | null>(null);

  const { error, handleSubmit } = useLog({
    login,
    email,
    password,
    verifyPassword,
  });

  const handleClickLogin = () => {
    setLogin((prevState) => !prevState);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.login}>
          <form action="#" onSubmit={handleSubmit}>
            <h3>{login ? "Login" : "Sign Up"}</h3>
            {error !== "" && <p className={classes.error}>{error}</p>}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              ref={email}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              ref={password}
              required
              minLength={6}
            />
            {!login && (
              <input
                type="password"
                name="passwordRedo"
                id="passwordRedo"
                placeholder="Repeat Password"
                ref={verifyPassword}
                required
                minLength={6}
              />
            )}
            <button type="submit" className={classes["enter-button"]}>
              {login ? "Log into your account" : "Create an account"}
            </button>
            <p>
              {login ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={handleClickLogin}
                className={classes["change-login"]}
              >
                {login ? "Sign up" : "Log in"}
              </button>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
