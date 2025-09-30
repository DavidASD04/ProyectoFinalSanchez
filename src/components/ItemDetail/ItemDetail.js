import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) => {
    const onAdd = (quantity) => {
        console.log(`Agregaste ${quantity} unidades de ${title} al carrito`);
        // Aquí después implementaremos la lógica del carrito
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
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;