# 🧑‍💻 CRUD de Usuarios con MongoDB y Mongoose

Este es un proyecto desarrollado en **Node.js** que implementa un conjunto de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de usuarios utilizando **MongoDB** como base de datos y **Mongoose** como su ODM (Object Data Modeling). El proyecto está diseñado para gestionar usuarios, donde se puede realizar las operaciones básicas sobre los datos de los mismos.

## 🚀 Tecnologías utilizadas

Este proyecto utiliza las siguientes tecnologías:

- **Node.js**: Entorno de ejecución para JavaScript en el lado del servidor. Permite construir aplicaciones escalables y rápidas.
- **MongoDB**: Base de datos NoSQL, orientada a documentos, que almacena los datos en formato JSON. Se utiliza para gestionar la información de los usuarios.
- **Mongoose**: Una biblioteca de JavaScript que facilita la interacción con MongoDB, proporcionando un modelo de datos y esquema que permite definir la estructura de los documentos dentro de la base de datos.

## 🌐 Descripción del proyecto

Este proyecto tiene como objetivo proporcionar una aplicación que permita gestionar usuarios en una base de datos MongoDB. Las operaciones CRUD permiten:

1. **Crear usuarios**: Almacenar nuevos usuarios con campos como nombre, edad, nacionalidad y rol.
2. **Leer usuarios**: Obtener una lista de todos los usuarios o buscar un usuario específico por su ID.
3. **Actualizar usuarios**: Modificar los datos de un usuario específico.
4. **Eliminar usuarios**: Eliminar un usuario de la base de datos por su ID.

- mongo.ts # Archivo para la configuración y conexión a MongoDB

- usuarios.crud.ts # Funciones CRUD que interactúan con la base de datos

- usuarios.model.ts # Esquema de Mongoose para el modelo de usuario

- main.ts # Archivo principal donde se ejecutan las funciones de ejemplo



Para instalar y ejecutar el proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:


- Instala las dependencias:

npm install

Asegúrate de tener MongoDB corriendo en tu máquina o usa un servicio como MongoDB Atlas. Si usas MongoDB local, asegúrate de que esté disponible en el puerto por defecto (mongodb://localhost:27017).



Para ejecutar las operaciones CRUD, puedes usar el archivo main.ts donde se encuentran ejemplos de cada operación. Puedes descomentar la línea correspondiente al ejemplo que deseas ejecutar:

ts
Copiar
Editar
// Ejemplo para crear un usuario
// await ejemploCrearUsuario();

// Ejemplo para obtener todos los usuarios
// await ejemploObtenerUsuarios();

// Ejemplo para obtener un usuario por ID
// await ejemploObtenerUsuarioPorId();

// Ejemplo para actualizar un usuario
// await ejemploActualizarUsuario();

// Ejemplo para eliminar un usuario
// await ejemploEliminarUsuario();

🧾 Modelo de Usuario
El modelo de usuario está definido con los siguientes campos:

ts
Copiar
Editar
{
  nombre: string (requerido),
  edad: number (requerido),
  nacionalidad: string (requerido),
  rol: string (requerido) // Ej: "admin", "cliente"
}


Después de descomentar la operación que quieres probar, ejecuta el archivo con: "npm run dev"