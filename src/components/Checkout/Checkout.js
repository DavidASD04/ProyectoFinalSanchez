import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const { cart, getTotalPrice, clear } = useCart();
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        emailConfirm: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido';
        }

        if (!formData.apellido.trim()) {
            newErrors.apellido = 'El apellido es requerido';
        }

        if (!formData.telefono.trim()) {
            newErrors.telefono = 'El teléfono es requerido';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El email no es válido';
        }

        if (formData.email !== formData.emailConfirm) {
            newErrors.emailConfirm = 'Los emails no coinciden';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        const order = {
            buyer: {
                nombre: formData.nombre,
                apellido: formData.apellido,
                telefono: formData.telefono,
                email: formData.email
            },
            items: cart.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            })),
            total: getTotalPrice(),
            date: serverTimestamp()
        };

        try {
            const docRef = await addDoc(collection(db, 'orders'), order);
            setOrderId(docRef.id);
            clear();
        } catch (error) {
            console.error('Error al crear la orden:', error);
            alert('Hubo un error al procesar tu orden. Por favor intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    if (cart.length === 0 && !orderId) {
        return (
            <div className="checkout-container">
                <div className="empty-cart">
                    <h2>No hay productos en el carrito</h2>
                    <Link to="/" className="continue-shopping">
                        Ir a comprar
                    </Link>
                </div>
            </div>
        );
    }

    if (orderId) {
        return (
            <div className="checkout-container">
                <div className="order-success">
                    <h2>¡Compra realizada con éxito!</h2>
                    <p className="order-id">ID de tu orden: <strong>{orderId}</strong></p>
                    <p>Guarda este ID para hacer seguimiento de tu pedido.</p>
                    <p>Recibirás un email de confirmación a: <strong>{formData.email}</strong></p>
                    <Link to="/" className="continue-shopping">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Finalizar Compra</h1>
            
            <div className="checkout-content">
                <div className="checkout-form-section">
                    <h2>Datos del comprador</h2>
                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre *</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className={errors.nombre ? 'error' : ''}
                            />
                            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="apellido">Apellido *</label>
                            <input
                                type="text"
                                id="apellido"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                className={errors.apellido ? 'error' : ''}
                            />
                            {errors.apellido && <span className="error-message">{errors.apellido}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono *</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                className={errors.telefono ? 'error' : ''}
                            />
                            {errors.telefono && <span className="error-message">{errors.telefono}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="emailConfirm">Confirmar Email *</label>
                            <input
                                type="email"
                                id="emailConfirm"
                                name="emailConfirm"
                                value={formData.emailConfirm}
                                onChange={handleChange}
                                className={errors.emailConfirm ? 'error' : ''}
                            />
                            {errors.emailConfirm && <span className="error-message">{errors.emailConfirm}</span>}
                        </div>

                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={loading}
                        >
                            {loading ? 'Procesando...' : 'Confirmar Compra'}
                        </button>
                    </form>
                </div>

                <div className="order-summary">
                    <h2>Resumen de la orden</h2>
                    <div className="summary-items">
                        {cart.map(item => (
                            <div key={item.id} className="summary-item">
                                <span>{item.title} x {item.quantity}</span>
                                <span>${item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-total">
                        <strong>Total:</strong>
                        <strong>${getTotalPrice()}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
