import Title from "../Compo/Title"
import styles from "../Styles/About.module.css"
import image from "../../../assets/masonry-2.jpg"
import { Link } from "react-router-dom"
const HowWeWork = () => {
  return (
      <>
          <main>
              <Title title="How We Work" subtitle="Our processes and Sources" />
              <div className={styles.wrapper}>
                  <div>
                      <img src={image} />
                  </div>
                  <div>
                      <article>
                      Prospera is a global grantmaking organization assisting corporations, foundations, and individuals. We streamline the grantmaking process to eliminate risk and administrative burden.
                      </article>
                      <br />
                      <article>
                      US donors cannot give directly to foreign charitable organizations and obtain a tax deduction. As a US public charity, Prospera is able to accept funds from US donors who can then recommend that Prospera use those funds to support foreign charitable organizations or projects. We enable donors to support the causes they care about by assisting them in making strategic, effective, and tax-advantaged grants internationally and domestically.
                      </article>
                      <br />
                      <article>
                      International giving can be complex. With Prospera, it doesn&apos;t have to be. Prospera and its subsidiaries have given more than $3.8 billion in charitable donations to organizations in over 135 countries around the world.
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
              </div>
      </main>
      </>
  )
}

export default HowWeWork