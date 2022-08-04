import classes from "./ProductList.module.scss";
import ProductListItem from "./ProductListItem";
import Loading from "../../../components/ui/Loading";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import product from "../../../typescript/interface/product";
import { FC } from "react";

interface Props {
  loading: boolean;
  error: boolean;
  data: product[];
}

const ProductList: FC<Props> = ({ loading, error, data: products }) => {
  return (
    <div className={classes.container}>
      {loading &&
        createPortal(<Loading></Loading>, document.getElementById("root")!)}
      {error && <p>Something went wrong</p>}
      {products.map((product) => {
        return (
          <Link to={product.id} key={product.id}>
            <ProductListItem item={product}></ProductListItem>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
