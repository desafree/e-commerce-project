/* eslint-disable react/prop-types */
import classes from "./Category.module.scss";

import { Link } from "react-router-dom";
import { FC } from "react";

interface Props {
  title: string;
  link: string;
}

const Category: FC<Props> = ({ title, link }) => {
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: "./assets/home/desktop/image-hero-federal.jpg",
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
