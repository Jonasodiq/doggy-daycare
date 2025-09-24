import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import DogDetail from './pages/DogDetail';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/dog/:id" element={<DogDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

// https://www.w3schools.com/react/react_router.asp
