
import { Link } from "react-router-dom";
import "./Items.css";
import { useAppContext } from "../../Context/context";
//  import { productos } from "../../../productos"; //Importo los productos de la carpeta productos
// import { db } from "../../firebaseConfig"; //Importo la configuracion de firebase
// import { collection, addDoc } from "firebase/firestore"; //Importo las funciones de firebase para traer los productos


function Items({ id, nombre , precio}){
    
    // const cargarProductos = () => {
    //     let refcollection = collection(db, "productos"); //Traigo la referencia a la coleccion de productos
    
    //     productos.forEach((el) => {
    //         addDoc(refcollection, el); //Agrego los productos a la coleccion de firebase
    //     });
     //};
    //<button onClick={cargarProductos}>Cargar muchos productos</button> Boton para cargar los productos


    const {agregarAlCarrito} = useAppContext(); //traigo la funcion del contexto para agregar al carrito


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
                <button className="btnItem" id="customBtn" onClick={() => agregarAlCarrito({id: id, nombre: nombre, precio: precio, cantidad: 1})}>Comprar</button>
            <Link to={`/detalle/${id}`}> 
            <button className="btnItem" id="customBtn">Ver detalle</button>
            </Link>
            </div>
    );
};

export default Items;