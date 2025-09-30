import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            {products.map(product => (
                <Item 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    pictureUrl={product.pictureUrl}
                />
            ))}
        </div>
    );
};

export default ItemList;