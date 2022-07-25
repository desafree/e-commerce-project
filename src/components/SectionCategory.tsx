import classes from "./SectionCategory.module.scss";

import Category from "./Category";

const SectionCategory = () => {
  return (
    <div className={classes.container}>
      <Category title="Web design" link="/"></Category>
      <Category title="Web design" link="/"></Category>
      <Category title="Web design" link="/"></Category>
    </div>
  );
};

export default SectionCategory;
