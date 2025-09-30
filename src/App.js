import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

// Componente para página 404
const NotFound = () => (
  <div className="not-found">
    <h1>404 - Página no encontrada</h1>
    <p>Lo sentimos, la página que buscas no existe.</p>
  </div>
);

// Componente para contacto
const Contact = () => (
  <div className="contact">
    <h1>Contacto</h1>
    <p>¡Contáctanos para cualquier consulta!</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={
              <ItemListContainer greeting="¡Bienvenidos a nuestro E-commerce! Encuentra los mejores productos aquí." />
            } 
          />
          <Route 
            path="/category/:categoryId" 
            element={<ItemListContainer />} 
          />
          <Route 
            path="/item/:itemId" 
            element={<ItemDetailContainer />} 
          />
          <Route 
            path="/contact" 
            element={<Contact />} 
          />
          <Route 
            path="*" 
            element={<NotFound />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
