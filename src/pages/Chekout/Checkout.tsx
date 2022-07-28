import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import CheckoutForm from "../../components/CheckoutForm";
import useScrollToTop from "../../hooks/useScrollToTop";

const Checkout = () => {
  useScrollToTop();

  return (
    <>
      <Navigation></Navigation>
      <CheckoutForm></CheckoutForm>
      <Footer></Footer>
    </>
  );
};

export default Checkout;
