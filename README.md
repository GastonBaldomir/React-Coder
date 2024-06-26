# Tienda Coder

## Descripción
Tienda Coder es una aplicación web de comercio electrónico que permite a los usuarios navegar por una lista de productos, agregarlos a un carrito de compras y realizar una compra finalizando el pedido. La aplicación utiliza React para la interfaz de usuario, Firebase Firestore para la base de datos, y SweetAlert para mostrar alertas de éxito y error.

## Funcionalidades
- Ver una lista de productos disponibles.
- Agregar productos al carrito de compras.
- Ver el contenido del carrito de compras.
- Eliminar productos del carrito.
- Realizar una compra y guardar el pedido en Firebase Firestore.
- Mostrar un código de seguimiento después de una compra exitosa.

## Tecnologías Utilizadas
- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Firebase Firestore: Base de datos NoSQL en tiempo real.
- SweetAlert: Biblioteca para mostrar alertas personalizadas.
- React Hook Form: Biblioteca para manejar formularios.
- React Router: Librería para el enrutamiento en aplicaciones React.

## Instalación
Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tienda-coder.git
2. Navega al directorio del proyecto:

    cd tienda-coder
3. Instala las dependencias:

    npm install7
4. Crea un archivo `.env` en la raíz del proyecto con tu configuración de Firebase:

    REACT_APP_FIREBASE_API_KEY=tu-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=tu-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=tu-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=tu-app-id
5. Inicia la App:

    npm start

## Uso
- Navega a la página principal para ver la lista de productos.
- Haz clic en "Agregar al carrito" para añadir productos al carrito de compras.
- Haz clic en el icono del carrito en la esquina superior derecha para ver el contenido del carrito.
- En la página del carrito, puedes eliminar productos o proceder a finalizar la compra.
- Completa el formulario de compra y haz clic en "Comprar" para realizar el pedido.
- Verás una alerta de éxito con un código de seguimiento después de completar la compra.

## Contacto

Para cualquier consulta o sugerencia, por favor contacta a gasston327@gmail.com.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
