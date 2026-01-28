const misProductos= [ { id: 1, Nombre: "Destornillador", Precio: 5000, Img: "../public/Imagenes/Destornillador.png", idCat:"Herramientas", stock: 15  },
    { id: 2, Nombre: "Taladro", Precio: 15000, Img: "../public/Imagenes/Taladro.png", idCat:"Electronica", stock: 15 },
    { id: 3, Nombre: "Martillo", Precio: 8000, Img: "../public/Imagenes/Martillo.png", idCat:"Herramientas", stock: 15 },
    { id: 4, Nombre: "Sierra", Precio: 12000, Img: "../public/Imagenes/Sierra.png", idCat:"Herramientas", stock: 15 },
    { id: 5, Nombre: "Llave Inglesa", Precio: 7000, Img: "../public/Imagenes/LLaveInglesa.png", idCat:"Herramientas", stock: 15 },
    { id: 6, Nombre: "Alicate", Precio: 6000, Img: "../public/Imagenes/Alicate.png", idCat:"Herramientas", stock: 15 },
    { id: 7, Nombre: "Cinta Aisladora", Precio: 3000, Img: "../public/Imagenes/CintaAisladora.png", idCat:"Herramientas", stock: 15 },
    { id: 8, Nombre: "Nivel", Precio: 4000, Img: "../public/Imagenes/Nivel.png", idCat:"Herramientas", stock: 15 },
    { id: 9, Nombre: "Sierra Electrica", Precio: 50000, Img: "../public/Imagenes/SierraElectrica.png", idCat:"Electronica", stock: 15 },
    { id: 10, Nombre: "Moladora", Precio: 30000, Img: "../public/Imagenes/Moladora.png", idCat:"Electronica", stock: 15 },
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
        }, 500)
    })
}
export const getProductoPorCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos.filter(item => item.idCat === idCategoria))
        }, 100)
    })
}