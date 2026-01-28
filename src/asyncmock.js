const misProductos= [ { id: 1, Nombre: "Destornillador", Precio: 5000, Img: "../Public/Imagenes/Destornillador.png", idCat:"Herramientas", stock: 15  },
    { id: 2, Nombre: "Taladro", Precio: 15000, Img: "../Public/Imagenes/Taladro.png", idCat:"Electronica", stock: 15 },
    { id: 3, Nombre: "Martillo", Precio: 8000, Img: "../Public/Imagenes/Martillo.png", idCat:"Herramientas", stock: 15 },
    { id: 4, Nombre: "Sierra", Precio: 12000, Img: "../Public/Imagenes/Sierra.png", idCat:"Herramientas", stock: 15 },
    { id: 5, Nombre: "Llave Inglesa", Precio: 7000, Img: "../Public/Imagenes/LLaveInglesa.png", idCat:"Herramientas", stock: 15 },
    { id: 6, Nombre: "Alicate", Precio: 6000, Img: "../Public/Imagenes/Alicate.png", idCat:"Herramientas", stock: 15 },
    { id: 7, Nombre: "Cinta Aisladora", Precio: 3000, Img: "../Public/Imagenes/CintaAisladora.png", idCat:"Herramientas", stock: 15 },
    { id: 8, Nombre: "Nivel", Precio: 4000, Img: "../Public/Imagenes/Nivel.png", idCat:"Herramientas", stock: 15 },
    { id: 9, Nombre: "Sierra Electrica", Precio: 50000, Img: "../Public/Imagenes/SierraElectrica.png", idCat:"Electronica", stock: 15 },
    { id: 10, Nombre: "Moladora", Precio: 30000, Img: "../Public/Imagenes/Moladora.png", idCat:"Electronica", stock: 15 },
]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 1000)                     
})
}
export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos.find(item => item.id === Number(id)))
        }, 1000)
    })
}
export const getProductoPorCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos.filter(item => item.idCat === idCategoria))
        }, 100)
    })
}