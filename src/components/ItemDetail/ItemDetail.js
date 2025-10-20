import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useCart();

    const onAdd = (quantity) => {
        setQuantityAdded(quantity);
        addItem({ id, title, price, pictureUrl }, quantity);
    };

    return (
        <div className="item-detail">
            <div className="item-detail-image">
                <img src={pictureUrl} alt={title} />
            </div>
            <div className="item-detail-info">
                <h1 className="item-detail-title">{title}</h1>
                <p className="item-detail-description">{description}</p>
                <p className="item-detail-price">${price}</p>
                <p className="item-detail-stock">Stock disponible: {stock}</p>
                
                {quantityAdded > 0 ? (
                    <div className="added-to-cart">
                        <p className="success-message">✓ Agregaste {quantityAdded} unidad(es) al carrito</p>
                        <div className="action-buttons">
                            <Link to="/cart" className="go-to-cart-button">
                                Ir al Carrito
                            </Link>
                            <Link to="/" className="continue-shopping-button">
                                Seguir Comprando
                            </Link>
                        </div>
                    </div>
                ) : (
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                )}
            </div>
        </div>
    );
};

export default ItemDetail;