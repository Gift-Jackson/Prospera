import { useState } from 'react';
import { faqs } from "../../../Constants/data";
import Title from "../Compo/Title";
import styles from "../Styles/FAQ.module.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
      <Title title="Frequently Asked Questions" subtitle="" />
      <div className={styles.container}>
        <ul className={styles.faqList}>
          {faqs.map((faq, index) => (
            <li className={styles.item} key={index}>
              <div className={styles.question} onClick={() => toggleFaq(index)}>
                <p>{faq.title}</p>
                <i className={`fa-solid fa-angle-${activeIndex === index ? 'up' : 'down'}`}></i>
              </div>
              {activeIndex === index && (
                <div className={styles.answer}>
                  {faq.content}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Faq;
