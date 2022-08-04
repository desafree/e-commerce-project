import Footer from "../../components/ui/Footer";
import CheckoutForm from "./components/CheckoutForm";
import useScrollToTop from "../../hooks/useScrollToTop";

const Checkout = () => {
  useScrollToTop();

  return (
    <>
      <CheckoutForm></CheckoutForm>
      <Footer></Footer>
    </>
  );
};

export default Checkout;
