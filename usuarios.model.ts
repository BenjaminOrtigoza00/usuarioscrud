//definicion de campos y validacion de los uruarios

import mongoose from "mongoose";

// Definimos la estructura de los documentos "usuarios"
const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  nacionalidad: { type: String, required: true },
  rol: { type: String, required: true }, // "admin", "cliente", etc.
});

// Creamos y exportamosgit
export const Usuario = mongoose.model("Usuario", UsuarioSchema);
