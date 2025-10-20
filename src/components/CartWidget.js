import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
    const { getTotalQuantity } = useCart();
    const totalQuantity = getTotalQuantity();

    // No mostrar el widget si el carrito está vacío
    if (totalQuantity === 0) {
        return null;
    }

    return (
        <Link to="/cart" className="cart-widget">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalQuantity}</span>
        </Link>
    );
};

export default CartWidget;
