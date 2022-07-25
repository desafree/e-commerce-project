import React, { FC } from "react";
import classes from "./Button.module.scss";

interface Props {
  type: string;
  children: React.ReactNode;
}

const Button: FC<Props> = ({ type, children }) => {
  return (
    <button className={`${classes.btn} ${type ? classes.color : ""}`}>
      {children}
    </button>
  );
};

export default Button;
