import Header from "./components/Header";
import SectionText from "./components/SectionText";
import SectionCategory from "./components/SectionCategory";
import Info from "./components/Info";
import Footer from "../../components/ui/Footer";
import { FC } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import classes from "./Home.module.scss";

const Home: FC = () => {
  useScrollToTop();

  return (
    <div className={classes.container}>
      <Header></Header>
      <SectionText></SectionText>
      <SectionCategory></SectionCategory>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
};

export default Home;
