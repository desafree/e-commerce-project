/* eslint-disable no-unused-vars */
import SearchBar from "./ui/SearchBar";
import Filters from "./ui/Filters";

import classes from "./FilterRow.module.scss";
import { FC } from "react";

interface Props {
  handleFilterCategory: (category: string) => void;
  handleSearchValue: (searchedValue: string) => void;
}

const FilterRow: FC<Props> = ({ handleFilterCategory, handleSearchValue }) => {
  return (
    <div className={classes.container}>
      <SearchBar handleSearchValue={handleSearchValue}></SearchBar>
      <Filters handleFilterCategory={handleFilterCategory}></Filters>
    </div>
  );
};

export default FilterRow;