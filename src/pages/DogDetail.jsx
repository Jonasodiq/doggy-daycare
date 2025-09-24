import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import noDog from "../assets/images/no-dog.jpg";
import styles from "./DogDetail.module.css";

const API_URL = "https://api.jsonbin.io/v3/b/68ccf99ad0ea881f4082d5b8";

function DogDetail() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const dogsList = data.record || [];
        const found =
          dogsList.find((d) => String(d.chipNumber) === String(id)) || null;
        setDog(found);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Hämtar detalj…</p>;
  if (error) return <p className={styles.error}>Fel: {error}</p>;
  if (!dog)
    return (
      <div>
        <p>
          Hunden med chipnummer <strong>{id}</strong> hittades inte.
        </p>
        <p>
          <Link to="/catalog">Tillbaka till katalogen</Link>
        </p>
      </div>
    );

  return (
    <article className={styles.dogDetail}>
      <img
        className={styles.detailPhoto}
        src={dog.img || noDog}
        alt={dog.name}
        onError={(e) => {
          e.target.src = noDog;
        }}
      />
      <div className={styles.detailBody}>
        <h2>{dog.name}</h2>
        <p className={styles.meta}>
          <strong>Ras:</strong> {dog.breed} <br/>
          <strong>Ålder:</strong> {dog.age} år <br/>
          <strong>Kön:</strong> {dog.sex === "male" ? "Hane" : "Tik"}
        </p>

        <p>
          <strong>Chipnummer:</strong> {dog.chipNumber}
        </p>

        <p>
          <strong>Ägare:</strong>{" "}
          {dog.owner ? `${dog.owner.name} ${dog.owner.lastName}` : "Okänd"}
        </p>
        <p>
          <strong>Kontakt:</strong>{" "}
          {dog.owner?.phoneNumber ?? "Ingen info"}
        </p>

        <div className={styles.actions}>
          <Link to="/catalog" className={styles.btn}>
            Tillbaka
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DogDetail;