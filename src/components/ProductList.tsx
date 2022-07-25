import classes from "./ProductList.module.scss";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  return (
    <div className={classes.container}>
      <ProductListItem></ProductListItem>
      <ProductListItem></ProductListItem>
      <ProductListItem></ProductListItem>
      <ProductListItem></ProductListItem>
      <ProductListItem></ProductListItem>
      <ProductListItem></ProductListItem>
      <ProductListItem></ProductListItem>
      <ProductListItem></ProductListItem>
    </div>
  );
};

export default ProductList;
