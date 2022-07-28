import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/authSlice";
import React from "react";

interface Props {
  url: string;
  email: React.MutableRefObject<HTMLInputElement | null>;
  password: React.MutableRefObject<HTMLInputElement | null>;
}

const useLogin = async ({ url, email, password }: Props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = async () => {
    setLoading(true);
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
      dispatch(authActions.login({ token: returnedToken.idToken }));
    } catch (error) {
      setError(true);
    }
  };

  await login();

  return { loading, error };
};

export default useLogin;
