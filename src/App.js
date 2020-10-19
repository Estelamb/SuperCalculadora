import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Calculadora from './components/calculadora/calculadora';
import './App.css';

function App() {
  return (
    <div>
      <Header autor="Estela" />
      <Calculadora />
      <Footer />
    </div>
  );
}

export default App;
