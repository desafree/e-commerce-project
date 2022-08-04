/* eslint-disable no-undef */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { authActions } from "../redux/authSlice";

interface Props {
  login: boolean;
  email: React.MutableRefObject<HTMLInputElement | null>;
  password: React.MutableRefObject<HTMLInputElement | null>;
  verifyPassword: React.MutableRefObject<HTMLInputElement | null>;
}

const useLog = ({ login, email, password, verifyPassword }: Props) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

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

  return { error, handleSubmit };
};

export default useLog;
