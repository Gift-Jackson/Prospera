import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../Styles/Testimonial.module.css"

import profile1 from '../../../assets/profile-1.jpg';
import profile2 from '../../../assets/profile-2.jpg';
import profile3 from '../../../assets/profile-3.jpg';
import Title from "./Title";

const testimonies = [
  {
    image: profile1,
    name: "Michael Smith",
    role: "Exxon Finance",
    content: "Get-Funded has been a game-changer for our organization. Their grant opportunities have allowed us to expand our initiatives and make a significant impact in our community."
  },
  {
    image: profile2,
    name: "Emma Davis",
    role: "Entrepreneur",
    content: "Get-Funded's team is incredibly supportive and knowledgeable. They guided me through the grant application process step by step, and I couldn't be happier with the results."
  },
  {
    image: profile3,
    name: "Alice Johnson",
    role: "AZ Project",
    content: "I was amazed by the support and guidance provided by Get-Funded. Thanks to them, I successfully secured funding for my project and turned my dream into a reality."
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main>
      <Title title="Testimonials" subtitle="What people have to say..."/>
      <Slider {...settings}>
        {testimonies.map((testimony, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.img}><img src={testimony.image} alt={testimony.name} /></div>
              <div className={styles.body}>
              <p><i>&quot;{testimony.content}&quot;</i></p>

                <div className={styles.profile}>
                  <h3>{testimony.name}</h3>
                  <p>{testimony.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
};

export default Testimonial;
