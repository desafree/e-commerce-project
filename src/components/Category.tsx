/* eslint-disable react/prop-types */
import classes from "./Category.module.scss";

import { Link } from "react-router-dom";
import { FC } from "react";

interface Props {
  title: string;
  link: string;
  url: string;
}

const Category: FC<Props> = ({ title, link, url }) => {
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url("${url}")`,
      }}
    >
      <h4>{title}</h4>
      <Link to={link}>
        discover more <span>&gt;</span>
      </Link>
    </div>
  );
};

export default Category;
