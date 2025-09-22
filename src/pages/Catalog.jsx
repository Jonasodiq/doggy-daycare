import React, { useEffect, useState } from 'react';
import DogCard from '../components/DogCard';

const API_URL = 'https://api.jsonbin.io/v3/b/68ccf99ad0ea881f4082d5b8';

export default function Catalog() {
  const [dogs, setDogs] = useState([]);
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
        // assume payload is an object with dogs array, otherwise try to use it directly
        const dogsList = payload.dogs || payload || [];
        // If dogsList is an object with keys, convert to array
        const normalized = Array.isArray(dogsList)
          ? dogsList
          : Object.values(dogsList);
        // Each dog has an id — if not, use index
        const withIds = normalized.map((d, i) => ({
          id: d.id ?? String(i + 1),
          ...d,
        }));
        setDogs(withIds);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="catalog">
      <h1>Hundkatalog</h1>
      {loading && <p>Hämtar hundar…</p>}
      {error && <p className="error">Fel vid hämtning: {error}</p>}
      {!loading && !error && (
        <div className="grid">
          {dogs.length === 0 && <p>Inga hundar hittades.</p>}
          {dogs.map((d) => (
            <DogCard key={d.id} dog={d} />
          ))}
        </div>
      )}
    </section>
  );
}
