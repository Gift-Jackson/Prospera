import Transition from "../../Global/Transition";
import Banner from "../Compo/Banner";
import Hero from "../Compo/Hero";
import Row from "../Compo/Row";
import Services from "../Compo/Services";
import Testimonial from "../Compo/Testimonial";
import Why from "../Compo/Why";
Banner;
const Home = () => {
  return (
    <>
      <Transition>
        <Hero />
        <Banner />
        <Row />
        <Why />
        <Services />
        <Testimonial />
      </Transition>
    </>
  );
};

export default Home;
