import "./Items.css";

function Items({ nombre , precio}){
    return(
            <div className="carta">
                <h2 className="text">{nombre || "NO DISPONIBLE"}</h2>
                <h3 className="text">Precio: {precio || "-" }</h3>
                <button className="bt">Comprar</button>
            </div>
    );
};

export default Items;