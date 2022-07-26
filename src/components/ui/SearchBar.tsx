/* eslint-disable no-unused-vars */
import { FC } from "react";
import classes from "./SearchBar.module.scss";
import React from "react";

interface Props {
  handleSearchValue: (searchedValue: string) => void;
}

const SearchBar: FC<Props> = ({ handleSearchValue }) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchValue(e.currentTarget.value);
  };

  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Search product"
        className={classes.search}
        onChange={onChangeHandler}
      />
      <img src="assets/icons/search.svg" alt="" />
    </div>
  );
};

export default SearchBar;
