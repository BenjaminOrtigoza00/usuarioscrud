//funciones crud para ejecutar: pendiente

import { conectDB } from "./config/mongo";

import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
} from "./usuarios.crud";

// Crear usuario
async function ejemploCrearUsuario() {
  const nuevoUsuario = await crearUsuario({
    nombre: "Juan Pérez",
    email: "juan@example.com",
    edad: 30,
  });
  console.log("Usuario creado:", nuevoUsuario);
}

// Obtener todos los usuarios
async function ejemploObtenerUsuarios() {
  const usuarios = await obtenerUsuarios();
  console.log("Todos los usuarios:", usuarios);
}

// Obtener usuario por ID
async function ejemploObtenerUsuarioPorId() {
  const id = "TU_ID_AQUI"; // Reemplaza con un _id real de MongoDB
  const usuario = await obtenerUsuarioPorId(id);
  console.log("Usuario encontrado:", usuario);
}

// Actualizar usuario
async function ejemploActualizarUsuario() {
  const id = "TU_ID_AQUI"; // Reemplaza con un _id real
  const actualizado = await actualizarUsuario(id, {
    edad: 31,
    email: "juanperez@example.com",
  });
  console.log("Usuario actualizado:", actualizado);
}

// Eliminar usuario
async function ejemploEliminarUsuario() {
  const id = "TU_ID_AQUI"; // Reemplaza con un _id real
  const eliminado = await eliminarUsuario(id);
  console.log("Usuario eliminado:", eliminado);
}

// Función principal
async function main() {
  try {
    await conectDB();

    // Elegí cuál querés probar:
    // await ejemploCrearUsuario();
    await ejemploObtenerUsuarios();
    // await ejemploObtenerUsuarioPorId();
    // await ejemploActualizarUsuario();
    // await ejemploEliminarUsuario();

  } catch (error) {
    console.error("Error:", error);
  }
}

main();
