
# Proyecto de E-commerce con React
```
Este proyecto es una aplicación de e-commerce desarrollada con **React**, que permite a los usuarios navegar por productos, agregarlos al carrito, realizar compras y guardar órdenes en **Firebase Firestore**.
```
## Características
```
- **Navegación**: Implementada con `react-router-dom` para manejar rutas como categorías, detalles de productos, carrito y checkout.
- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, eliminar productos, vaciar el carrito y ver el total de la compra.
- **Checkout**: Formulario para completar la información del comprador y guardar la orden en Firestore.
- **Firebase Firestore**: Base de datos utilizada para almacenar productos y órdenes.
- **Actualización de stock**: El stock de los productos se actualiza automáticamente después de realizar una compra.
```
## Tecnologías utilizadas
```
- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router**: Para la navegación entre páginas.
- **Firebase Firestore**: Base de datos en tiempo real para almacenar productos y órdenes.
- **CSS**: Estilización personalizada para los componentes.
- **Material UI**: Componentes estilizados para mejorar la experiencia de usuario.
```

## Funcionalidades principales
```
Carrito de compras
Agregar productos: Los usuarios pueden agregar productos al carrito desde la lista de productos o los detalles del producto.
Eliminar productos: Los usuarios pueden eliminar productos individuales del carrito.
Vaciar carrito: Botón para vaciar todo el carrito.
Cálculo del total: Se calcula automáticamente el total de la compra.
Checkout
Formulario de compra: Los usuarios deben completar su nombre, email y teléfono.
Guardar orden: La orden se guarda en Firestore con los datos del comprador, los productos y el total.
Actualizar stock: El stock de los productos se reduce según la cantidad comprada.
Reglas de Firestore
Asegúrate de configurar las reglas de seguridad de Firestore para permitir lectura y escritura durante el desarrollo:
```
## ¿Como funciona?
```
Carrito:

Agrega productos al carrito.
Elimina productos o vacía el carrito.
Calcula el total automáticamente.
Checkout:

Completa el formulario con tu nombre, email y teléfono.
Guarda la orden en Firebase.
```

## estructura del proyecto
```
src/
├── components/
│   ├── Cart/
│   ├── Checkout/
│   ├── ItemListContainer/
│   ├── Navbar/
├── Context/
│   └── context.jsx
├── firebaseConfig.js
├── App.jsx
└── index.jsx
```