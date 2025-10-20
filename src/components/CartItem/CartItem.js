import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
    const { removeItem } = useCart();

    return (
        <div className="cart-item">
            <img src={item.pictureUrl} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
                <p className="cart-item-price">Precio unitario: ${item.price}</p>
                <p className="cart-item-subtotal">Subtotal: ${item.price * item.quantity}</p>
            </div>
            <button 
                className="cart-item-remove" 
                onClick={() => removeItem(item.id)}
                title="Eliminar producto"
            >
                🗑️
            </button>
        </div>
    );
};

export default CartItem;
