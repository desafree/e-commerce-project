import Header from "../../components/Header";
import SectionText from "../../components/SectionText";
import SectionCategory from "../../components/SectionCategory";
import Info from "../../components/Info";
import Footer from "../../components/ui/Footer";
import { FC } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";

const Home: FC = () => {
  useScrollToTop();

  return (
    <>
      <Header></Header>
      <SectionText></SectionText>
      <SectionCategory></SectionCategory>
      <Info></Info>
      <Footer></Footer>
    </>
  );
};

export default Home;
