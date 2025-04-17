import { useAppContext } from "../../Context/context";
import "./Cart.css";
import { Link } from "react-router-dom";
function Cart() {
   const { carrito , vaciarCarrito , eliminarDelCarrito, getTotalAmount} = useAppContext();
   return (
      <div>
            {carrito.length === 0 ? ( // Si el carrito está vacío, muestro un mensaje
               <p className="carritoVacio">Carrito vacío</p>
            ) : (
               <>
                  {carrito.map((el) => {
                     return (
                           <div className="carrito-detalle" key={el.id}>
                              <h2 className="text-carrito">{el.nombre}</h2>
                              <h2 className="text-carrito">${el.precio}</h2>
                              <h2 className="text-carrito">Cantidad: {el.cantidad}</h2>
                              <h2 className="text-carrito">SubTotal: {el.cantidad * el.precio}</h2>
                              <botton className="btn-eliminar" id="customBtnEliminar"   onClick={() => eliminarDelCarrito(el.id)}> Eliminar </botton>
                           </div>
                        );
                  })}
                  <div className="carrito-total">
                  <h2 className="text-carrito-total">Total: {getTotalAmount()} </h2>
                  <button className="btn-eliminar" onClick={vaciarCarrito}>Vaciar carrito</button>
                  <Link to="/checkout">
                  <button className="btnItem">Finalizar compra</button>
                  </Link>
                  
                  </div>
               </>
            )}
      </div>
   );
}

export default Cart;