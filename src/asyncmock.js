const misProductos= [ { id: 1, Nombre: "Destornillador", Precio: 5000, Img: "Imagenes/Destornillador.png" },
    { id: 2, Nombre: "Taladro", Precio: 15000, Img: "Imagenes/Taladro.png" },
    { id: 3, Nombre: "Martillo", Precio: 8000, Img: "Imagenes/Martillo.png" },
    { id: 4, Nombre: "Sierra", Precio: 12000, Img: "Imagenes/Sierra.png" },
    { id: 5, Nombre: "Llave Inglesa", Precio: 7000, Img: "Imagenes/LLaveInglesa.png" } 
]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 2000)                     
})
}