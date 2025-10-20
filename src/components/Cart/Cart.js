import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
    const { cart, clear, getTotalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <div className="cart-container">
                <div className="empty-cart">
                    <h2>Tu carrito está vacío</h2>
                    <p>¡Comienza a agregar productos!</p>
                    <Link to="/" className="continue-shopping">
                        Ver productos
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1 className="cart-title">Tu Carrito de Compras</h1>
            
            <div className="cart-items">
                {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>

            <div className="cart-summary">
                <div className="cart-total">
                    <h2>Total: ${getTotalPrice()}</h2>
                </div>
                <div className="cart-actions">
                    <button className="clear-cart-button" onClick={clear}>
                        Vaciar Carrito
                    </button>
                    <Link to="/checkout" className="checkout-button">
                        Finalizar Compra
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
