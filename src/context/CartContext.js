import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar item al carrito
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            // Si el item ya existe, actualizar la cantidad
            setCart(cart.map(cartItem => 
                cartItem.id === item.id 
                    ? { ...cartItem, quantity: cartItem.quantity + quantity }
                    : cartItem
            ));
        } else {
            // Si el item no existe, agregarlo
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Remover item del carrito
    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    // Limpiar todo el carrito
    const clear = () => {
        setCart([]);
    };

    // Verificar si un item está en el carrito
    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    };

    // Obtener la cantidad total de items
    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    // Obtener el precio total
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // Obtener cantidad de un item específico
    const getItemQuantity = (itemId) => {
        const item = cart.find(item => item.id === itemId);
        return item ? item.quantity : 0;
    };

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clear,
            isInCart,
            getTotalQuantity,
            getTotalPrice,
            getItemQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
};
