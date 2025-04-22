//conexion base de datos mongoDB: pendiente
import mongoose, { connect } from "mongoose";

const conectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/");
    console.log("conectado a mongo");
};

export { conectDB };
