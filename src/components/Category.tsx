/* eslint-disable react/prop-types */
import classes from "./Category.module.scss";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

interface Props {
  title: string;
  url: string;
  category: string;
}

const Category: FC<Props> = ({ title, url, category }) => {
  const navigate = useNavigate();
  const onClickHandler = () =>
    navigate({
      pathname: "/products",
      search: "?category=" + category,
    });

  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url("${url}")`,
      }}
    >
      <h4>{title}</h4>
      <button onClick={onClickHandler}>
        discover more <span>&gt;</span>
      </button>
    </div>
  );
};

export default Category;
