// Base de datos simulada de productos
const products = [
    {
        id: '1',
        title: 'iPhone 14 Pro',
        description: 'El iPhone 14 Pro con tecnología de vanguardia, cámara de 48MP y chip A16 Bionic.',
        price: 999,
        pictureUrl: 'https://via.placeholder.com/300x300?text=iPhone+14+Pro',
        category: 'smartphones',
        stock: 10
    },
    {
        id: '2',
        title: 'Samsung Galaxy S23',
        description: 'Samsung Galaxy S23 con pantalla Dynamic AMOLED 2X y cámara de 50MP.',
        price: 899,
        pictureUrl: 'https://via.placeholder.com/300x300?text=Galaxy+S23',
        category: 'smartphones',
        stock: 15
    },
    {
        id: '3',
        title: 'MacBook Air M2',
        description: 'MacBook Air con chip M2, 13 pulgadas, ultra ligero y potente.',
        price: 1199,
        pictureUrl: 'https://via.placeholder.com/300x300?text=MacBook+Air+M2',
        category: 'laptops',
        stock: 8
    },
    {
        id: '4',
        title: 'Dell XPS 13',
        description: 'Dell XPS 13 con procesador Intel Core i7 y pantalla InfinityEdge.',
        price: 1099,
        pictureUrl: 'https://via.placeholder.com/300x300?text=Dell+XPS+13',
        category: 'laptops',
        stock: 12
    },
    {
        id: '5',
        title: 'iPad Pro 12.9"',
        description: 'iPad Pro con chip M2, pantalla Liquid Retina XDR y soporte para Apple Pencil.',
        price: 1299,
        pictureUrl: 'https://via.placeholder.com/300x300?text=iPad+Pro',
        category: 'tablets',
        stock: 6
    },
    {
        id: '6',
        title: 'Microsoft Surface Pro 9',
        description: 'Microsoft Surface Pro 9 con pantalla táctil de 13 pulgadas y teclado desmontable.',
        price: 1199,
        pictureUrl: 'https://via.placeholder.com/300x300?text=Surface+Pro+9',
        category: 'tablets',
        stock: 9
    }
];

// Categorías disponibles
export const categories = [
    { id: 'smartphones', name: 'Smartphones' },
    { id: 'laptops', name: 'Laptops' },
    { id: 'tablets', name: 'Tablets' }
];

// Función que simula obtener todos los productos
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

// Función que simula obtener productos por categoría
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(product => product.category === categoryId);
            resolve(filteredProducts);
        }, 1000);
    });
};

// Función que simula obtener un producto por ID
export const getProductById = (itemId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(product => product.id === itemId);
            if (product) {
                resolve(product);
            } else {
                reject(new Error('Producto no encontrado'));
            }
        }, 1000);
    });
};