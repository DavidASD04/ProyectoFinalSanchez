import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

// Categorías disponibles
export const categories = [
    { id: 'smartphones', name: 'Smartphones' },
    { id: 'laptops', name: 'Laptops' },
    { id: 'tablets', name: 'Tablets' }
];

// Función para obtener todos los productos desde Firebase
export const getProducts = async () => {
    try {
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return productsList;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
};

// Función para obtener productos por categoría desde Firebase
export const getProductsByCategory = async (categoryId) => {
    try {
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where('category', '==', categoryId));
        const productsSnapshot = await getDocs(q);
        const productsList = productsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return productsList;
    } catch (error) {
        console.error('Error al obtener productos por categoría:', error);
        throw error;
    }
};

// Función para obtener un producto por ID desde Firebase
export const getProductById = async (itemId) => {
    try {
        const productDoc = doc(db, 'products', itemId);
        const productSnapshot = await getDoc(productDoc);
        
        if (productSnapshot.exists()) {
            return {
                id: productSnapshot.id,
                ...productSnapshot.data()
            };
        } else {
            throw new Error('Producto no encontrado');
        }
    } catch (error) {
        console.error('Error al obtener producto:', error);
        throw error;
    }
};