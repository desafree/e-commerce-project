/* eslint-disable no-unused-vars */
import { FC, useEffect, useRef, useState } from "react";
import classes from "./Input.module.scss";
import React from "react";

interface Props {
  validityFunction: (value: string) => boolean;
  name: string;
  errorMessage: string;
  type: string;
  placeholder: string;
  required: boolean;
}

const Input: FC<Props> = ({
  validityFunction,
  name,
  errorMessage,
  type,
  placeholder,
  required,
}) => {
  const [valid, setValid] = useState(false);
  const [blur, setBlur] = useState(false);
  const [nameClass, setNameClass] = useState("");
  const input = useRef<HTMLInputElement>(null);

  const onBlurHandler = () => {
    setBlur(true);
  };

  const onChangeHandler = () => {
    const validityResult = validityFunction(input.current?.value || "");
    setValid(validityResult);
  };

  useEffect(() => {
    if (!valid && !blur) {
      input.current?.setCustomValidity("");
      setNameClass("wait");
    } else if (!valid && blur) {
      input.current?.setCustomValidity(errorMessage);
      setNameClass("invalid");
    } else if (valid && blur) {
      input.current?.setCustomValidity("");
      setNameClass("valid");
    }
  }, [valid, blur]);

  return (
    <>
      <label htmlFor="name">{name}</label>
      <input
        className={classes[nameClass]}
        type={type}
        ref={input}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        placeholder={placeholder}
        // required={required}
        id={name}
      />
    </>
  );
};

export default Input;
