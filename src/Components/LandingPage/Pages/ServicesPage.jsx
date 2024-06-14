import Services from "../Compo/Services";
import Title from "../Compo/Title";
import health from "../../../assets/proof-healthcare.jpg";
import art from "../../../assets/art.jpg";
import com from "../../../assets/comgrant.jpg";
import styles from "../Styles/Explore.module.css";
import Transition from "../../Global/Transition";
const ServicesPage = () => {
  return (
    <>
      <Transition>
        <div className="main-container">
          <Services />
          <Explore />
        </div>
      </Transition>
    </>
  );
};

export default ServicesPage;

const explores = [
  {
    image: health,
    title: "Healthcare Grants",
    body: "Providing funding for healthcare-related projects and initiatives.",
  },
  {
    image: com,
    title: "Community Development Grants",
    body: "Funding projects that uplift and strengthen communities.",
  },
  {
    image: art,
    title: "Art and Culture Grants",
    body: "Supporting artistic and cultural endeavours that enrich communities",
  },
];
export const Explore = () => {
  return (
    <>
      <main>
        <Title
          title="Explore Prospera"
          subtitle="Explore the various funding opportunities we offer to support your projects."
        />

        <ul className={styles.lists}>
          {explores.map((item, index) => (
            <li key={index}>
              <div className={styles.img}>
                <img src={item.image} alt="" />
              </div>
              <div className={styles.content}>
                <h3> {item.title} </h3>
                <p> {item.body} </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
