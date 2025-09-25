import React, { useState } from 'react';
import DogCard from '../components/DogCard';
import { useDogs } from '../hooks/useDogs';
import styles from "./Catalog.module.css";

function Catalog() {
  // Filter states
  const [search, setSearch] = useState('');
  const [breed, setBreed] = useState('');
  const [size, setSize] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');

  // Custom hook
  const { filteredDogs, breeds, sizes, ages, loading, error } = useDogs({
    search,
    breed,
    size,
    age,
    sex,
  });

  return (
    <section className={styles.catalog}>
      <h1>Katalog</h1>

      {/* Filter */}
      <div className={styles.filters}>
        <input
          className={styles.border}
          type="text"
          placeholder="Sök efter namn..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className={styles.border} value={breed} onChange={(e) => setBreed(e.target.value)}>
          <option value="">Alla raser</option>
          {breeds.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>

        <select className={styles.border} value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Alla storlekar</option>
          {sizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select className={styles.border} value={age} onChange={(e) => setAge(e.target.value)}>
          <option value="">Alla åldrar</option>
          {ages.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>

        <select className={styles.border} value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="">Alla kön</option>
          <option value="female">Tik</option>
          <option value="male">Hane</option>
        </select>
      </div>

      {loading && <p>Hämtar hundar…</p>}
      {error && <p className={styles.error}>Fel vid hämtning: {error}</p>}
      {!loading && !error && (
        <div className={styles.grid}>
          {filteredDogs.length === 0 && <p>Inga hundar hittades.</p>}
          {filteredDogs.map((d) => (
            <DogCard key={d.id} dog={d} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Catalog;