import classes from "./ProductList.module.scss";
import ProductListItem from "./ProductListItem";
import Loading from "../../../components/ui/Loading";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import product from "../../../typescript/interface/product";
import { FC, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
interface Props {
  loading: boolean;
  error: boolean;
  data: product[];
}

const ProductList: FC<Props> = ({ loading, error, data: products }) => {
  const container = useRef(null);
  const q = gsap.utils.selector(container);

  useLayoutEffect(() => {
    gsap.fromTo(
      q("a"),
      1,
      { opacity: 0, x: -20, stagger: 0.1 },
      { opacity: 1, x: 0, stagger: 0.1 }
    );
  }, [products]);

  return (
    <div className={classes.container} ref={container}>
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
