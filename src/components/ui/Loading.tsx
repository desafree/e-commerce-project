import classes from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={classes.container}>
      <img src="/assets/icons/loading.svg" alt="" />
    </div>
  );
};

export default Loading;
