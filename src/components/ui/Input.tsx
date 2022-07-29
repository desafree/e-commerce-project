/* eslint-disable no-unused-vars */
import { FC, useEffect, useRef, useState } from "react";
import classes from "Input.module.scss";
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
  const input = useRef<HTMLInputElement>(null);

  const [valid, setValid] = useState(false);
  const [blur, setBlur] = useState(false);

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
    } else if (!valid && blur) {
      input.current?.setCustomValidity(errorMessage);
    } else if (valid && blur) {
      input.current?.setCustomValidity("");
    }
  }, [valid, blur]);

  return (
    <>
      <label htmlFor="name">{name}</label>
      <input
        type={type}
        ref={input}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        placeholder={placeholder}
        required={required}
        id={name}
      />
    </>
  );
};

export default Input;
