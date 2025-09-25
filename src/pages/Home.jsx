import React from 'react';
import { Link } from 'react-router-dom';
import dogs from "../assets/images/dogs.jpg";
import giacomo from "../assets/images/giacomo.jpg";
import daycare from '../assets/images/daycare.jpg'
import boll from '../assets/images/boll.jpg'
import tuc from '../assets/images/ddg.avif'
import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <h1>Välkommen till<br/>Doggy Daycare</h1>

        <img
          src={dogs}
          alt="Glada hundar på Doggy Daycare"
          className={styles.heroImage}
        />
        <p>
          Vi tar hand om din hund när du är borta<br/>
          tryggt, lekfullt och säkert.
        </p>

        <Link to="/catalog" className={`${styles.btn} ${styles.large}`}>
          Våra hundar
        </Link>
      </div>

      <div className={styles.infoCards}>
        <div className={styles.card}>
          <img
          src={giacomo}
          alt="Tryggt boende"
          className={styles.heroImage}
          />
          <h3>Tryggt boende</h3>
          <p>Flera rutiner för säkerhet och välmående.</p>
        </div>
        <div className={styles.card}>
          <img
          src={daycare}
          alt="Skötare"
          className={styles.heroImage}
          />
          <div>

          <h3>Erfarna skötare</h3>
          <p>Professionell personal med hundvana.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img
          src={boll}
          alt="Aktivitet"
          className={styles.heroImage}
          />
          <h3>Roliga aktiviteter</h3>
          <p>Dagliga promenader och social lek.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;