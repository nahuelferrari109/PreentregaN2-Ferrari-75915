import "./ItemListContainer.css";
import { useState, useEffect, use } from "react";
import Items from "../Items/Items";
import { productos } from "../../../productos";
import { fetchData } from "../../fetchData";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

function ItemListContainer(){
    const [todosLosProductos, setTodosLosProductos] = useState([]); //Trae todos los productos 
    const [misProductos, setMisProductos] = useState([]); //Trae los productos que quiero mostrar 
    const [loading, setLoading] = useState(true); //Para mostrar el loading  osea el tiempo de carga

    const {categoria} = useParams(); //Para traer la categoria que quiero mostrar
    useEffect(() => {
        if (todosLosProductos.length === 0) {// Si no hay productos en el estado, los traigo
            fetchData().then(response => {
                setTodosLosProductos(response);
                if (categoria) { //Si hay una categoria seleccionada, filtro los productos
                    const productosFiltrados = response.filter(el => el.categoria === categoria);
                    setMisProductos(productosFiltrados);
                    setLoading(false);
                } else { //Si no hay categoria seleccionada, muestro todos los productos
                    setMisProductos(response);
                    setLoading(false);
                };
            })
                .catch(err => console.error(err));
        } else {
            if (categoria) { //Si hay una categoria seleccionada, filtro los productos
                const productosFiltrados = todosLosProductos.filter(el => el.categoria === categoria);
                setMisProductos(productosFiltrados);
            } else {
                setMisProductos(todosLosProductos);
            };
        }

    }, [categoria]); //Si la categoria cambia, se vuelve a ejecutar el useEffect

            
            
    
return(
        <div className="contenedor-cartas">
        {
        loading? <Loading/> :
            misProductos.map(el=>{
                return(
                <Items
                    key={el.id}
                    id={el.id}
                    nombre={el.nombre}
                    precio={el.precio}
                    />
            );
    })}
        </div>
)
};

export default ItemListContainer;