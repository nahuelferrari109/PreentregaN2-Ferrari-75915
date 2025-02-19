import "./ItemListContainer.css";

import Items from "../Items/Items";
function ItemListContainer(){
    return(
        <div className="contenedor-cartas">
            <Items nombre={"Producto 1"} precio={100}/>
            <Items  />
            <Items nombre={"Producto 3"} precio={180}/>     
        </div>

    );
};

export default ItemListContainer;