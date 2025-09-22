import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Välkommen till<br></br> Doggy Daycare</h1>
        <p>Vi tar hand om din hund när du är borta<br></br> tryggt, lekfullt och säkert.</p>
        
        <img 
          src="/images/dogs.jpg" 
          alt="Glad hund på Doggy Daycare" 
          className="hero-image"
        />
        
        <Link to="/catalog" className="btn large">
          Vår katalog med hundar
        </Link>
      </div>

      <div className="info-cards">
        <div className="card">
          <h3>Tryggt boende</h3>
          <p>Flera rutiner för säkerhet och välmående.</p>
        </div>
        <div className="card">
          <h3>Erfarna skötare</h3>
          <p>Professionell personal med hundvana.</p>
        </div>
        <div className="card">
          <h3>Roliga aktiviteter</h3>
          <p>Dagliga promenader och social lek.</p>
        </div>
      </div>
    </section>
  );
}
