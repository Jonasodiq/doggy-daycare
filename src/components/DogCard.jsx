import React from 'react';
import { Link } from 'react-router-dom';
import noDog from "../assets/images/no-dog.jpg";
import styles from './DogCard.module.css';

function DogCard({ dog }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.photo}
        src={dog.img || noDog}
        alt={dog.name}
        onError={(e) => { e.target.src = noDog }}
      />
      <div className={styles.body}>
        <h3>{dog.name}</h3>
        <p className={styles.meta}>
          <strong>Ras:</strong> {dog.breed} • <strong>Ålder:</strong> {dog.age} år
        </p>
        <Link to={`/dog/${dog.id}`} className={styles.btn}>
          Visa detaljer
        </Link>
      </div>
    </article>
  );
}

export default DogCard;

