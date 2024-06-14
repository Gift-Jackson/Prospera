import Transition from "../../Global/Transition";
import About from "../About/About";
import Faq from "../About/FAQ";
import HowWeWork from "../About/HowWeWork";
import Row from "../Compo/Row";
import Title from "../Compo/Title";

const AboutPage = () => {
  return (
    <Transition>
      <div className="main-container">
        <Title
          title="About Prospera"
          subtitle="Empowering Growth and Innovation Through Strategic Grants"
        />
        <About />
        <Row />
        <HowWeWork />
        <Faq />
      </div>
    </Transition>
  );
};

export default AboutPage;
