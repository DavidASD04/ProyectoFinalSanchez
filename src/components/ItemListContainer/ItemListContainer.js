import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../utils/products';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        
        const fetchProducts = categoryId ? getProductsByCategory(categoryId) : getProducts();
        
        fetchProducts
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error('Error al cargar productos:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return (
            <div className="item-list-container">
                <div className="loading">Cargando productos...</div>
            </div>
        );
    }

    return (
        <div className="item-list-container">
            {greeting && <h1 className="greeting-message">{greeting}</h1>}
            {categoryId && (
                <h2 className="category-title">
                    Categoría: {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
                </h2>
            )}
            {products.length > 0 ? (
                <ItemList products={products} />
            ) : (
                <div className="no-products">
                    No se encontraron productos en esta categoría.
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;