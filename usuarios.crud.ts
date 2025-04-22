//funciones crud: eliminar, obtener, actualizar, crear. De usuarios con mongoose

import { Usuario } from "./usuarios.model";
import { Types } from "mongoose";

// Crear un usuario
export async function crearUsuario(data: {
  nombre: string;
  email: string;
  edad?: number;
}) {
  const usuario = new Usuario(data);
  await usuario.save();
  return usuario;
}

// Obtener todos los usuarios
export async function obtenerUsuarios() {
  return await Usuario.find();
}

// Obtener usuario por ID
export async function obtenerUsuarioPorId(id: string | Types.ObjectId) {
  return await Usuario.findById(id);
}

// Actualizar un usuario
export async function actualizarUsuario(id: string | Types.ObjectId, data: any) {
  return await Usuario.findByIdAndUpdate(id, data, { new: true });
}

// Eliminar un usuario
export async function eliminarUsuario(id: string | Types.ObjectId) {
  return await Usuario.findByIdAndDelete(id);
}
