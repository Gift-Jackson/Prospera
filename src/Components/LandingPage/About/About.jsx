import { Link } from "react-router-dom";
import styles from "../Styles/About.module.css";
import aboutImage from "../../../assets/hand-with-money-removebg-preview.png"
const About = () => {
  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <div>
            <article>
              Since its inception, Prospera has been dedicated to empowering
              individuals and organizations in the field of grants and funding.
              Our core mission revolves around facilitating seamless access to
              grant opportunities, enabling successful funding endeavors, and
              minimizing the complexities associated with the grant application
              process.
            </article>
            <br />
            <article>
              Prospera Locations Headquarters: San Francisco | Branch Offices:
              New York City, London, Toronto, Miami Collaboration Networks
              Africa & the Middle East | Asia | Latin America Prospera
              Subsidiaries Prospera Canada is a registered Canadian organization
              committed to simplifying and enhancing the grant application
              experience for Canadians, both domestically and internationally.
              The Prospera Dual Taxpayer Fund (BDTF) offers dual taxpayers in
              select regions the advantage of optimizing their contributions
              with potential tax incentives, increasing the impact of their
              grants
            </article>
            <Link to="register">
              <button
                title="Sign up with Prospera to apply for grant."
                className={styles.btn}
              >
                Apply for grant &nbsp;{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
          <div>
            <img src={aboutImage} alt="" />
          </div>
              </div>
              
      </main>
    </>
  );
};

export default About;
