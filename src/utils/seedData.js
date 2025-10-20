// Datos de ejemplo para cargar en Firebase Firestore
// Colección: "products"

const productsData = [
    {
        title: 'iPhone 14 Pro',
        description: 'El iPhone 14 Pro con tecnología de vanguardia, cámara de 48MP y chip A16 Bionic. Pantalla Super Retina XDR con Dynamic Island.',
        price: 999,
        pictureUrl: 'https://via.placeholder.com/300x300?text=iPhone+14+Pro',
        category: 'smartphones',
        stock: 10
    },
    {
        title: 'Samsung Galaxy S23',
        description: 'Samsung Galaxy S23 con pantalla Dynamic AMOLED 2X y cámara de 50MP. Procesador Snapdragon de última generación.',
        price: 899,
        pictureUrl: 'https://via.placeholder.com/300x300?text=Galaxy+S23',
        category: 'smartphones',
        stock: 15
    },
    {
        title: 'MacBook Air M2',
        description: 'MacBook Air con chip M2, 13 pulgadas, ultra ligero y potente. Perfecto para productividad y creatividad.',
        price: 1199,
        pictureUrl: 'https://via.placeholder.com/300x300?text=MacBook+Air+M2',
        category: 'laptops',
        stock: 8
    },
    {
        title: 'Dell XPS 13',
        description: 'Dell XPS 13 con procesador Intel Core i7 y pantalla InfinityEdge. Diseño premium y rendimiento excepcional.',
        price: 1099,
        pictureUrl: 'https://via.placeholder.com/300x300?text=Dell+XPS+13',
        category: 'laptops',
        stock: 12
    },
    {
        title: 'iPad Pro 12.9"',
        description: 'iPad Pro con chip M2, pantalla Liquid Retina XDR y soporte para Apple Pencil. Ideal para creativos y profesionales.',
        price: 1299,
        pictureUrl: 'https://via.placeholder.com/300x300?text=iPad+Pro',
        category: 'tablets',
        stock: 6
    },
    {
        title: 'Microsoft Surface Pro 9',
        description: 'Microsoft Surface Pro 9 con pantalla táctil de 13 pulgadas y teclado desmontable. Versatilidad 2 en 1.',
        price: 1199,
        pictureUrl: 'https://via.placeholder.com/300x300?text=Surface+Pro+9',
        category: 'tablets',
        stock: 9
    },
    {
        title: 'Google Pixel 8 Pro',
        description: 'Google Pixel 8 Pro con la mejor cámara computacional del mercado. Android puro y actualizaciones garantizadas.',
        price: 899,
        pictureUrl: 'https://via.placeholder.com/300x300?text=Pixel+8+Pro',
        category: 'smartphones',
        stock: 14
    },
    {
        title: 'Lenovo ThinkPad X1',
        description: 'Lenovo ThinkPad X1 Carbon, laptop empresarial de alto rendimiento con certificación militar.',
        price: 1399,
        pictureUrl: 'https://via.placeholder.com/300x300?text=ThinkPad+X1',
        category: 'laptops',
        stock: 7
    },
    {
        title: 'Samsung Galaxy Tab S9',
        description: 'Samsung Galaxy Tab S9 con pantalla AMOLED de 11 pulgadas y S Pen incluido. Experiencia premium.',
        price: 799,
        pictureUrl: 'https://via.placeholder.com/300x300?text=Galaxy+Tab+S9',
        category: 'tablets',
        stock: 11
    }
];

// Instrucciones para cargar en Firebase:
// 1. Ve a Firebase Console (console.firebase.google.com)
// 2. Selecciona tu proyecto
// 3. Ve a Firestore Database
// 4. Crea una nueva colección llamada "products"
// 5. Agrega cada objeto del array como un nuevo documento
// 6. Firebase generará automáticamente los IDs de los documentos

export default productsData;
