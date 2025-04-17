import "./ItemDetail.css";
import { useState, useEffect, use } from "react";
import { productos } from "../../../productos";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useAppContext } from "../../Context/context"; //importo el contexto para usarlo en el componente
import Contador from "../Contador/contador";
import { db } from "../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

function ItemDetail(){

    
    const {id} = useParams(); 
    
    const[detalle, setDetalle] = useState(null);
    
    const {agregarAlCarrito, contador} = useAppContext(); //traigo la funcion del contexto para agregar al carrito

    
    const formatNumberWithDots = (num) => {   //Funcion para dar formato a los precios osea para ponele el punto o la coma.
        return new Intl.NumberFormat('de-DE', {  
            minimumFractionDigits: 2,  
            maximumFractionDigits: 2  
        }).format(num);  
    };  
    
    useEffect(() => {
        let refcollection = collection(db, "productos"); //referencia a la coleccion de productos
        let refdoc = doc(refcollection, id); //referencia al documento que quiero traer
        getDoc(refdoc) //traigo el documento
        .then((res) => {
            let nuevoArray = { id: res.id, ...res.data() }; //creo un nuevo array con el id y los datos del documento
            setDetalle(nuevoArray); //seteo el detalle con el nuevo array
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));

    }, [id]); //cuando cambie el id se vuelve a ejecutar el useEffect

   
    return(
            !detalle ?
            <div className="loading">
                <Loading/>
            </div>
            :
                < div className="contenedor-cartas"> 
                    <div className="carta-detalle">
                        <h2 className="text">{detalle.nombre || "No disponible" }</h2>
                        <h3 className="text">Precio: {formatNumberWithDots(detalle.precio) + "$"  || "-" }</h3>
                    {
                        detalle.stock >0 ? //Si hay stock muestro el stock, sino muestro que no hay stock
                        <>
                        <p className="p">El stock es {detalle.stock} unidades</p>
                        <div className="contador">
                        <Contador  stock={detalle.stock}/>
                        </div>
                        </>
                        :
                        <p className="p">No hay stock</p>
                    }
                <p className="descripcion"> Descripcion:{detalle.descripcion} </p>
                
                <button className="btn" id="customBtn" onClick={() => agregarAlCarrito({id: detalle.id, nombre: detalle.nombre, precio: detalle.precio, cantidad: contador})}>Comprar</button>
                </div>
                </div>
                
    )
};

export default ItemDetail;