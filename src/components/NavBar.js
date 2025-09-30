import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { categories } from '../utils/products';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo de la tienda */}
                <div className="navbar-logo">
                    <Link to="/" className="logo-link">
                        <h2>🛍️ Mi E-commerce</h2>
                    </Link>
                </div>
                
                {/* Enlaces de navegación */}
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Inicio</Link>
                    </li>
                    {categories.map(category => (
                        <li key={category.id} className="navbar-item">
                            <Link to={`/category/${category.id}`} className="navbar-link">
                                {category.name}
                            </Link>
                        </li>
                    ))}
                    <li className="navbar-item">
                        <Link to="/contact" className="navbar-link">Contacto</Link>
                    </li>
                </ul>
                
                {/* Widget del carrito */}
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
