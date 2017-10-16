

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tareas = new Schema({
    idUser:String, // id del usuario que esta asignado la tarea
    name:String, // nombre de la tarea
    date_init:Date, // fecha de inicio de la tarea
    date_fin:Date, // fecha estimada de entrega,
    status:String, // estado de la tarea
    validateQa:Boolean,//validacion QA
    validateClient:Boolean,//validacion de cliente
    pasok:Boolean, // tarea finalizada correctamente
    descriptionTask:String, // descripcion de la tarea asignada
    tags:[
        {
            name:String,
            color:String
        }
    ],
    attachment:[
        {
            file:String
        }
    ],
    addRoutes:[
        {
            link:String // link de rutas asociadas a la tarea
        }
    ],
    metrics:[
        {
            type:String,
            timeInit:Date,
            timeFin:Date,
            durationTask:String
        }
    ]

});

module.exports = mongoose.model("Tareas",Tareas);