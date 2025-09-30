import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="item-count">
            <div className="count-controls">
                <button 
                    className="count-button" 
                    onClick={decrement}
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <span className="count-number">{quantity}</span>
                <button 
                    className="count-button" 
                    onClick={increment}
                    disabled={quantity >= stock}
                >
                    +
                </button>
            </div>
            <button 
                className="add-button" 
                onClick={() => onAdd(quantity)}
                disabled={stock <= 0}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;