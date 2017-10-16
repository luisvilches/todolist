const Task = require("../models/tareas");

const fecha_actual = new Date();

exports.create = (req,res) => {
    let tarea = new Task({
        idUser: req.body.idUser,
        name: req.body.name,
        date_init: new Date(fecha_actual.getUTCFullYear(),fecha_actual.getMonth(),fecha_actual.getDay()),
        date_fin: new Date(req.body.anio,req.body.mes,req.body.dia),
        status: "init",
        validateQa: false,
        validateClient: false,
        pasok: false,
        descriptionTask: req.body.descriptionTask,
        tags:[],
        attachment:[],
        addRoutes:[],
        metrics:[]
    });

    tarea.save((err,task) => {
        if(err){
            res.status(500).json({
                message:"error",
                data:err
            });
        } else {
            res.status(200).json({
                message:"success",
                data:task
            });
        }
    });
}

exports.find = (req,res) => {
    Task.find({},(err,tasks) => {
        if(err){
            res.status(500).json({
                message:"error",
                data:err
            });
        } else {
            res.status(200).json({
                message:"success",
                data:tasks
            });
        }
    });
}

exports.findById = (req,res) => {
    Task.findById({_id:req.params.id},(err,task) => {
        if(err){
            res.status(500).json({
                message:"error",
                data:err
            });
        } else {
            res.status(200).json({
                message:"success",
                data:task
            });
        }
    });
}

exports.delete = (req,res) => {
    Task.remove({_id:req.params.id},(err,task) => {
        if(err){
            res.status(500).json({
                message:"error",
                data:err
            });
        } else {
            res.status(200).json({
                message:"success",
                data:task
            });
        }
    });
}