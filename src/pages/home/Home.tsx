import Header from "../../components/Header";
import SectionText from "../../components/SectionText";
import SectionCategory from "../../components/SectionCategory";
import Info from "../../components/Info";
import Navigation from "../../components/ui/Navigation";
import Footer from "../../components/ui/Footer";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <SectionText></SectionText>
      <SectionCategory></SectionCategory>
      <Info></Info>
      <Footer></Footer>
    </>
  );
};

export default Home;
