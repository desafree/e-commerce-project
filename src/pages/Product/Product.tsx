import ProductObj from "../../components/ProductObj";
import ProductIntro from "../../components/ProductIntro";
import ProductFeatures from "../../components/ProductFeatures";
import Footer from "../../components/ui/Footer";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/ui/Loading";

import classes from "./Product.module.scss";
import useScrollToTop from "../../hooks/useScrollToTop";

const Product = () => {
  useScrollToTop();

  const id = useParams().id;
  const { loading, error, data } = useFetch(
    "https://e-commerce-c8199-default-rtdb.europe-west1.firebasedatabase.app/products/-N7uYvOjW-UAMzhs8Mn0.json"
  );

  const item = data.filter((product) => {
    if (product.id === id) return true;
  });

  return (
    <>
      {loading && <Loading></Loading>}
      {loading && <div className={classes["loading-container"]}></div>}
      {!loading && !error && data.length > 0 && (
        <ProductObj item={item}></ProductObj>
      )}
      {!loading && !error && data.length > 0 && (
        <ProductFeatures item={item}></ProductFeatures>
      )}
      {!loading && !error && data.length > 0 && (
        <ProductIntro item={item}></ProductIntro>
      )}
      <Footer></Footer>
    </>
  );
};

export default Product;
