const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Usuarios = new Schema({
    name:String, // primer nombre
    lastName:String, // apellido
    completeName:String, // nombre completo que se genera automaticamente
    initials:String, // iniciales del nombre, se generan automaticamente
    mail:String, // correo de la cuenta
    password:String, // password de la cuenta
    job:String, // cargo laboral dentro del equipo
    rol:String, // tipo de rol dentro del equipo, desde aca depende lo que pueda hacer el usuario dentro del sistema
    color:String, // color asociado al usuario
    taks:[
        {
            idTask:String // id de la tarea asignada
        }
    ] 

});

module.exports = mongoose.model("Usuarios",Usuarios);