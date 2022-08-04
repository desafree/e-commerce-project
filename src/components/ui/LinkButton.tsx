import React, { FC } from "react";
import classes from "./Link.module.scss";
import { Link } from "react-router-dom";

interface Props {
  type: string;
  children: React.ReactNode;
  link: string;
}

const LinkButton: FC<Props> = ({ type, children, link }) => {
  return (
    <Link className={`${classes.btn} ${type ? classes.color : ""}`} to={link}>
      {children}
    </Link>
  );
};

export default LinkButton;
