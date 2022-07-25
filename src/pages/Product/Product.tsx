import ProductObj from "../../components/ProductObj";
import ProductIntro from "../../components/ProductIntro";
import ProductFeatures from "../../components/ProductFeatures";
import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";

const Product = () => {
  return (
    <>
      <Navigation></Navigation>
      <ProductObj></ProductObj>
      <ProductFeatures></ProductFeatures>
      <ProductIntro></ProductIntro>
      <Footer></Footer>
    </>
  );
};

export default Product;
