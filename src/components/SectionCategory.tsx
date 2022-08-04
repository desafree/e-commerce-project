import classes from "./SectionCategory.module.scss";

import Category from "./Category";

const SectionCategory = () => {
  return (
    <div className={classes.container}>
      <Category
        title="SOLID COLOR"
        category="solid"
        url="assets/home/category-color.jpg"
      ></Category>
      <Category
        title="METALLIC COLOR"
        category="metallic"
        url="assets/home/category-metal.jpg"
      ></Category>
      <Category
        title="TRANSPARENT COLOR"
        category="transparent"
        url="assets/home/category-transparent.jpg"
      ></Category>
    </div>
  );
};

export default SectionCategory;
