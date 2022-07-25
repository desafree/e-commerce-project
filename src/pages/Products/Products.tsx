import classes from "./Products.module.scss";

import FilterRow from "../../components/FiltersRow";
import ProductList from "../../components/ProductList";
import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";

const Products = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className={classes.container}>
        <FilterRow></FilterRow>
        <ProductList></ProductList>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Products;
