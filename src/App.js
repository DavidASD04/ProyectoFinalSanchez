import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

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
    <CartProvider>
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
              path="/cart" 
              element={<Cart />} 
            />
            <Route 
              path="/checkout" 
              element={<Checkout />} 
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
    </CartProvider>
  );
}

export default App;
