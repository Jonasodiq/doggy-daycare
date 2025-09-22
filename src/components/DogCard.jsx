import React from 'react';
import { Link } from 'react-router-dom';

export default function DogCard({ dog }) {
  return (
    <article className="dog-card">
      <img
        src={dog.img || "/images/no-find.jpg"}
        alt={dog.name}
      />
      <div className="dog-card-body">
        <h3>{dog.name}</h3>
        <p className="meta">
          {dog.breed} • {dog.age} år
        </p>
        <Link to={`/dog/${dog.id}`} className="btn">
          Visa detaljer
        </Link>
      </div>
    </article>
  );
}
