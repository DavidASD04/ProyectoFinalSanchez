import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../utils/products';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null);
        
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error('Error al cargar producto:', error);
                setError('Producto no encontrado');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    if (loading) {
        return (
            <div className="item-detail-container">
                <div className="loading">Cargando producto...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="item-detail-container">
                <div className="error">{error}</div>
            </div>
        );
    }

    return (
        <div className="item-detail-container">
            {product && (
                <ItemDetail 
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    pictureUrl={product.pictureUrl}
                    stock={product.stock}
                />
            )}
        </div>
    );
};

export default ItemDetailContainer;