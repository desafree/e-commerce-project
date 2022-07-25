import SearchBar from "./ui/SearchBar";
import Filters from "./ui/Filters";

import classes from "./FilterRow.module.scss";

const FilterRow = () => {
  return (
    <div className={classes.container}>
      <SearchBar></SearchBar>
      <Filters></Filters>
    </div>
  );
};

export default FilterRow;
