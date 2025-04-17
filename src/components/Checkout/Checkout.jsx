import { useState } from "react";
import { useAppContext } from "../../Context/context";
import { db } from "../../firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [ordenId, setOrdenId] = useState(null); // Estado para almacenar el ID de la orden
  const { carrito, getTotalAmount, vaciarCarrito } = useAppContext(); // Traigo el carrito y la función para vaciarlo

  const funcionFormulario = async (e) => {
    e.preventDefault();

    // Validación de campos
    if (!userInfo.nombre || !userInfo.email || !userInfo.telefono) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Crear la orden
    const total = getTotalAmount();
    const orden = {
      buyer: userInfo, // Almaceno la info del usuario
      items: carrito.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.cantidad,
      })), // Almaceno el carrito
      total: total, // Almaceno el total
      date: new Date().toISOString(),
    };

    try {
      // Guardar la orden en Firestore
      const ordenesCollection = collection(db, "ordenes");
      const res = await addDoc(ordenesCollection, orden);
      setOrdenId(res.id); // Almaceno el ID de la orden
      console.log("Orden guardada con ID:", res.id);

      // Actualizar el stock de los productos
      const productosCollection = collection(db, "productos");
      for (const product of carrito) {
        const refDoc = doc(productosCollection, product.id);
        await updateDoc(refDoc, {
          stock: product.stock - product.cantidad,
        });
      }

      // Vaciar el carrito
      vaciarCarrito();
    } catch (error) {
      console.error("Error al procesar la orden:", error);
      alert("Hubo un error al procesar tu compra. Inténtalo nuevamente.");
    }
  };

  const functionInputs = (evento) => {
    const { value, name } = evento.target; // Traigo el valor y el nombre del input
    setUserInfo({
      ...userInfo,
      [name]: value, // Almaceno el valor del input en el estado
    });
  };

  return (
    <div className="checkout-container">
      {ordenId ? (
        <div>
          <h2 className="Comprobante">Gracias por tu compra, tu comprobante es: {ordenId}</h2>
        </div>
      ) : (
        <form onSubmit={funcionFormulario} className="checkout-form">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={userInfo.nombre}
            onChange={functionInputs}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={functionInputs}
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={userInfo.telefono}
            onChange={functionInputs}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;