import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import DogDetail from './pages/DogDetail';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/dog/:id" element={<DogDetail />} />
        </Routes>
      </main>
     <Footer></Footer>
    </div>
  );
}

export default App;

// https://www.w3schools.com/react/react_router.asp
