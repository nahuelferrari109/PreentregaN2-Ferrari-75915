import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import Items from "../Items/Items";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
    const [todosLosProductos, setTodosLosProductos] = useState([]); // Trae todos los productos
    const [misProductos, setMisProductos] = useState([]); // Trae los productos que quiero mostrar
    const [loading, setLoading] = useState(true); // Para mostrar el loading
    const { categoria } = useParams(); // Para traer la categoría que quiero mostrar

    useEffect(() => {
        setLoading(true); // Activa el loading mientras se cargan los datos

        // Referencia a la colección de productos
        let productosRef = collection(db, "productos");
        let consulta;

        // Si hay una categoría, filtra los productos
        if (categoria) {
            consulta = query(productosRef, where("categoria", "==", categoria));
        } else {
            consulta = productosRef; // Si no hay categoría, trae todos los productos
        }

        // Obtén los documentos de la consulta
        getDocs(consulta)
            .then((res) => {
                let nuevoArray = res.docs.map((el) => {
                    return { id: el.id, ...el.data() };
                });
                console.log(nuevoArray); // Muestra los productos en la consola
                setTodosLosProductos(nuevoArray); // Actualiza todos los productos
                setMisProductos(nuevoArray); // Actualiza los productos mostrados
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [categoria]); // Se ejecuta cuando cambia la categoría

    return (
        <div className="contenedor-cartas">
            {loading ? (
                <Loading />
            ) : (
                misProductos.map((el) => {
                    return (
                        <Items
                            key={el.id}
                            id={el.id}
                            nombre={el.nombre}
                            precio={el.precio}
                        />
                    );
                })
            )}
        </div>
    );
}

export default ItemListContainer;