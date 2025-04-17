import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext); //contexto para usar el contexto en cualquier parte de la app
export const AppContextProvider = (prop) => {
    
    const [carrito , setcarrito] = useState([]); //estado del carrito
    const [contador, setContador] = useState(1);
    const agregarAlCarrito = (producto) => { //funcion para agregar al carrito
        if(carrito.some((el) => el.id ==producto.id)){

            const nuevoCarrito = carrito.map(el => {
                if(el.id == producto.id){
                    return {...el, cantidad: el.cantidad + producto.cantidad} //si el producto ya existe en el carrito, le sumo la cantidad
                }else{
                    return el
                }
            })
            setcarrito(nuevoCarrito) //actualizo el carrito
        }else{
            setcarrito([...carrito, producto]); //agrega el producto al carrito
            
        };
        setContador(1); //reinicio el contador
    };

    const eliminarDelCarrito = (id) => { //funcion para eliminar del carrito
        const nuevoCarrito = carrito.filter((el) => el.id !== id); //filtra el carrito y elimina el producto con el id que le paso
        setcarrito(nuevoCarrito); //actualiza el carrito
    }

    const vaciarCarrito = () => { //funcion para vaciar el carrito
        setcarrito([]);
    };
    
    const getTotalAmount = () => {
        let total = carrito.reduce((acc, elemento) => {
          return acc + elemento.precio * elemento.cantidad;
        }, 0);
    
        return total;
    };
    
 
    
    
    return(
        <AppContext.Provider value={{carrito, agregarAlCarrito , contador, setContador, eliminarDelCarrito, vaciarCarrito, getTotalAmount}}>
            {prop.children}
        </AppContext.Provider>
    )
}