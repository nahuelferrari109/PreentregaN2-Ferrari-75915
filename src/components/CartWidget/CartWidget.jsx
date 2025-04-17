import "./CartWindget.css";
import { HiShoppingCart } from "react-icons/hi2";
import { useAppContext } from "../../Context/context"; //importo el contexto para usar el carrito
import { Link } from "react-router-dom";
function CartWindget(){
    const {carrito} = useAppContext(); //traigo el carrito del contexto
    return(
      <Link to="/cart">
      <h3 className="icono"> <HiShoppingCart/> <p className="textIcono">({carrito.length})</p> </h3>
    </Link>
        
)}
export default CartWindget;