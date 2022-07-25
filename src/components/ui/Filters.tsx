import classes from "./Filters.module.scss";

const Filters = () => {
  return (
    <div className={classes.container}>
      <button className={classes.trigger}>
        Filter by{" "}
        <span>
          <img src="assets/icons/arrow-down.svg" alt="" />
        </span>
      </button>
      <div className={classes.filters}>
        <button>Filter1</button>
        <button>Filter1</button>
        <button>Filter1</button>
        <button>Filter1</button>
      </div>
    </div>
  );
};

export default Filters;
