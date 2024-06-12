import Banner from "../Compo/Banner"
import Hero from "../Compo/Hero"
import Row from "../Compo/Row"
import Services from "../Compo/Services"
import Testimonial from "../Compo/Testimonial"
import Why from "../Compo/Why"
Banner
const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Row />
      <Why />
      <Services />
      <Testimonial/>
    </>
  )
}

export default Home