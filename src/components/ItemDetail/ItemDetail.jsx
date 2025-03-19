import "./ItemDetail.css";
import { useState, useEffect, use } from "react";
import { productos } from "../../../productos";
import { fetchData } from "../../fetchData";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

function ItemDetail(){

    
    const {id} = useParams(); 
    
    const[detalle, setDetalle] = useState(null);
    
    const formatNumberWithDots = (num) => {   //Funcion para dar formato a los precios osea para ponele el punto o la coma.
        return new Intl.NumberFormat('de-DE', {  
            minimumFractionDigits: 2,  
            maximumFractionDigits: 2  
        }).format(num);  
    };  
    
    useEffect(() => {
        fetchData().then(response => {
            const detalleProd = response.find(el => el.id === parseInt(id));
            
            setDetalle(detalleProd);
        })
            .catch(err => console.error(err));
    }, [id]);


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
                        <p className="p">El stock es {detalle.stock} unidades</p>
                        :
                        <p className="p">No hay stock</p>
                    }
                    
                <p className="descripcion"> Descripcion:{detalle.descripcion} </p>
                
                <button className="btn" id="customBtn">Comprar</button>
                </div>
                </div>
                
    )
};

export default ItemDetail;