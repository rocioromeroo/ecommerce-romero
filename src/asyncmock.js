const products = [
    {
        id: "1",
        name: "Olivia",
        price: 3500,
        category: "texanas",
        img: "/images/zapatos/texanas/olivia-n-1.jpg",
        stock: 10,
        descripcion: "Texanas caña alta con detalle en plata."
    },

    {
        id: "2",
        name: "Clara",
        price: 2800,
        category: "texanas",
        img: "/images/zapatos/texanas/clara-crema-1.jpeg",
        stock: 12,
        descripcion: "Texanas caña alta color crema."
    },

    {
        id: "3",
        name: "Mica",
        price: 2500,
        category: "texanas",
        img: "/images/zapatos/texanas/mica-n-1.jpeg",
        stock: 8,
        descripcion: "Texanas caña baja con tachas y apliques plata."
    },

    {
        id: "4",
        name: "Yolanda",
        price: 2700,
        category: "texanas",
        img: "/images/zapatos/texanas/yolanda-n-1.jpg",
        stock: 8,
        descripcion: "Texanas caña baja negras con textura croco."
    },

    {
        id: "5",
        name: "Caro",
        price: 2000,
        category: "flats",
        img: "/images/zapatos/flats/caro-b-1.jpg",
        stock: 12,
        descripcion: "Flats con tira ancha en color beige."
    },

    {
        id: "6",
        name: "Sabri",
        price: 3800,
        category: "botas",
        img: "/images/zapatos/botas/sabri-plata-1.jpg",
        stock: 5,
        descripcion: "Bota caña alta en color plata con brillos."
    },

    {
        id: "7",
        name: "Sofia",
        price: 3800,
        category: "botas",
        img: "/images/zapatos/botas/sofia-n-1.jpg",
        stock: 10,
        descripcion: "Bota caña alta en color negro con textura croco."
    },

    {
        id: "8",
        name: "Flor",
        price: 3500,
        category: "borcegos",
        img: "/images/zapatos/borcegos/flor-n-1.jpg",
        stock: 10,
        descripcion: "Borcegos caña media."
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}