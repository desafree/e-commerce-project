import classes from "./SectionCategory.module.scss";

import Category from "./Category";

const SectionCategory = () => {
  return (
    <div className={classes.container}>
      <Category
        title="Web design"
        category="solid"
        url="assets/home/category-color.jpg"
      ></Category>
      <Category
        title="Web design"
        category="metallic"
        url="assets/home/category-metal.jpg"
      ></Category>
      <Category
        title="Web design"
        category="transparent"
        url="assets/home/category-transparent.jpg"
      ></Category>
    </div>
  );
};

export default SectionCategory;
