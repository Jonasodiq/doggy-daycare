import React from 'react';
import styles from "./About.module.css";
import original from '../assets/images/original.jpg'

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>Om oss</h1>
      <p className={styles.text}>
        Vi erbjuder en trygg och rolig miljö
        för hundar medan deras ägare är upptagna.
      </p>
      <p className={styles.text}>
        Vårt mål är att ge hundarna motion, kärlek och socialisering varje dag.
      </p>
      <img
        src={original}
        alt="Happy dog"
        className={styles.image}
      />
    </div>
  );
};

export default About;
