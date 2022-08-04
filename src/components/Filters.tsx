/* eslint-disable no-unused-vars */
import { FC, useState } from "react";
import classes from "./Filters.module.scss";
import React from "react";

interface Props {
  handleFilterCategory: (category: string) => void;
}
const Filters: FC<Props> = ({ handleFilterCategory }) => {
  const [viewSelection, setViewSelection] = useState(false);

  const handleVisibilityClick = () => {
    setViewSelection((prevState) => !prevState);
  };

  const handleFilterClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.innerHTML === "--REMOVE FILTER--") {
      handleFilterCategory("");
      handleVisibilityClick();
      return;
    }
    handleFilterCategory(e.currentTarget.innerHTML);
    handleVisibilityClick();
  };

  return (
    <div className={classes.container}>
      <button className={classes.trigger} onClick={handleVisibilityClick}>
        Select category{" "}
        <span>
          <img src="assets/icons/arrow-down.svg" alt="" />
        </span>
      </button>
      {viewSelection && (
        <div className={classes.filters}>
          <button onClick={handleFilterClick}>--REMOVE FILTER--</button>
          <button onClick={handleFilterClick}>SOLID COLOR</button>
          <button onClick={handleFilterClick}>METALLIC COLOR</button>
          <button onClick={handleFilterClick}>TRANSPARENT COLOR</button>
        </div>
      )}
    </div>
  );
};

export default Filters;
