
import { Link } from "react-router-dom";
import "./Items.css";

function Items({ id, nombre , precio}){
    
    const formatNumberWithDots = (num) => {   //Funcion para dar formato a los precios osea para ponele el punto o la coma.
        return new Intl.NumberFormat('de-DE', {  
            minimumFractionDigits: 2,  
            maximumFractionDigits: 2  
        }).format(num);  
    };  
    
    return(
            <div className="carta">
                <h2 className="text">{nombre || "No disponible" }</h2>
                <h3 className="text">Precio: {formatNumberWithDots(precio) + "$" || "-" }</h3>
                <button className="btnItem" id="customBtn">Comprar</button>
            <Link to={`/detalle/${id}`}> 
            <button className="btnItem" id="customBtn">Ver detalle</button>
            </Link>
            </div>
    );
};

export default Items;