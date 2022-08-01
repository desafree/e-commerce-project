/* eslint-disable no-undef */
import React from "react";
import classes from "./Login.module.scss";
import Navigation from "../../components/ui/Navigation";
import { useRef, useState } from "react";
import { authActions } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const Login = () => {
  useScrollToTop();

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState(true);
  const [error, setError] = useState("");

  const handleClickLogin = () => {
    setLogin((prevState) => !prevState);
  };

  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const verifyPassword = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!login && password.current?.value !== verifyPassword.current?.value) {
      setError("Password don't match");
      return;
    }
    const url = login
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        process.env.REACT_APP_API_KEY
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        process.env.REACT_APP_API_KEY;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email.current?.value,
          password: password.current?.value,
          returnSecureToke: true,
        }),
      });

      const returnedToken = await response.json();
      if ("error" in returnedToken) {
        throw new Error(returnedToken.error.message);
      }
      dispatch(authActions.login({ token: returnedToken.idToken }));
      navigation("/");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <>
      <Navigation></Navigation>
      <div className={classes.container}>
        <div className={classes.login}>
          <form action="#" onSubmit={handleSubmit}>
            <h3>{login ? "Login" : "Logout"}</h3>
            {error !== "" && <p className={classes.error}>{error}</p>}
            <input
              type="email"
              name=""
              id=""
              placeholder="Email address"
              ref={email}
              required
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              ref={password}
              required
              minLength={6}
            />
            {!login && (
              <input
                type="password"
                name=""
                id=""
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
