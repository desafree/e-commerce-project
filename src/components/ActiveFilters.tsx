import { FC } from "react";
import classes from "./ActiveFilters.module.scss";

interface Props {
  activeFilter: string;
  handleActiveFilter: () => void;
}

const ActiveFilters: FC<Props> = ({ activeFilter, handleActiveFilter }) => {
  if (activeFilter === "") {
    return <></>;
  }

  return (
    <div className={classes.container}>
      <span>{activeFilter}</span>
      <button onClick={handleActiveFilter}>x</button>
    </div>
  );
};

export default ActiveFilters;
