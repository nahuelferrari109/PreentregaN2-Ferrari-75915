import "./CartWindget.css";

import { HiShoppingCart } from "react-icons/hi2";
function CartWindget(){
    return(
      <li>
        <h3 className="icono"> <HiShoppingCart/> <p className="textIcono">(4)</p> </h3>
      </li>
    )
}
export default CartWindget;