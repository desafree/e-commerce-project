import classes from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Search product"
        className={classes.search}
      />
      <img src="assets/icons/search.svg" alt="" />
    </div>
  );
};

export default SearchBar;
