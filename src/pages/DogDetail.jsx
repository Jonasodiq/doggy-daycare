import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_URL = 'https://api.jsonbin.io/v3/b/68ccf99ad0ea881f4082d5b8';

export default function DogDetail() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        const payload = data.record || data || {};
        const dogsList = payload.dogs || payload || [];
        const normalized = Array.isArray(dogsList)
          ? dogsList
          : Object.values(dogsList);
        const found =
          normalized.find((d) => String(d.id) === String(id)) || null;
        setDog(found);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Hämtar detalj…</p>;
  if (error) return <p className="error">Fel: {error}</p>;
  if (!dog)
    return (
      <div>
        <p>
          Hunden med id <strong>{id}</strong> hittades inte.
        </p>
        <p>
          <Link to="/catalog">Tillbaka till katalogen</Link>
        </p>
      </div>
    );

  return (
    <article className="dog-detail">
      <img
        className="detail-photo"
        src={dog.img || 'https://via.placeholder.com/600x400?text=No+photo'}
        alt={dog.name}
      />
      <div className="detail-body">
        <h2>{dog.name}</h2>
        <p className="meta">
          Ras: {dog.breed} • Ålder: {dog.age} år
        </p>
        <p>
          <strong>Ägare:</strong> {dog.owner ?? 'Okänd'}
        </p>
        <p>
          <strong>Kontakt:</strong> {dog.contact ?? 'Ingen info'}
        </p>
        <p>
          <strong>Mat/foder:</strong> {dog.food ?? 'Ingen info'}
        </p>
        <p>
          <strong>Allergier/Anmärkningar:</strong> {dog.notes ?? 'Inga'}
        </p>

        <div className="actions">
          <Link to="/catalog" className="btn">
            Tillbaka
          </Link>
        </div>
      </div>
    </article>
  );
}
