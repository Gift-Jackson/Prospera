import { info } from "../../../Constants/data";
import InputField from "../../Global/Compo/InputField";
import MessageField from "../../Global/Compo/MessageField";
import styles from "../Styles/Constact.module.css";
const Contacts = () => {
  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <ul>
              {info.map((item, index) => (
                <li className={styles.item} key={index}>
                  <div className={styles.icon}>
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <div className={styles.body}>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <form className={styles.form}>
            <InputField
              label="Fullname"
              type="text"
              id="name"
              name="fullname"
              placeholder="Enter fullname..."
            />
            <InputField
              label="E-mail Address"
              type="email"
              id="email"
              name="email"
              placeholder="Enter e-mail address..."
            />
            <MessageField
              label="Message"
              type="message"
              id="msg"
              name="message"
              placeholder="Enter e-mail address..."
            />
            <button type="submit">
              Send message <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contacts;
