const Usuario = require("../models/usuarios");

exports.create = (req,res) => {
    let usuario = new Usuario({
        name: req.body.name, // primer nombre
        lastName: req.body.lastName, // apellido
        completeName: req.body.name + " " + req.body.lastName, // nombre completo
        initials: req.body.name.charAt(0).toUpperCase() + req.body.lastName.charAt(0).toUpperCase(), // iniciales del nombre
        mail: req.body.mail, // correo de la cuenta
        password: req.body.password, // password de la cuenta
        job: req.body.job, // cargo laboral dentro del equipo
        rol: req.body.rol, // tipo de rol dentro del equipo, desde aca depende lo que pueda hacer el usuario dentro del sistema
        color: req.body.color, // color asociado al usuario
        taks: new Array()
    });

    usuario.save((err,usuarios) => {
        if(err){
            res.status(500).json({
                message:"error",
                data: err
            });
        } else {
            res.status(200).json({
                message:"success",
                data: usuarios
            });
        }
    })
}

exports.find = (req,res) => {
    Usuario.find({},(err,usuarios) => {
        if(err){
            res.status(500).json({
                message:"error",
                data: err
            });
        } else {
            res.status(200).json({
                message:"success",
                data: usuarios
            });
        }
    });
}

exports.findById = (req,res) => {
    Usuario.findById({_id:req.params.id},(err,usuario) => {
        if(err){
            res.status(500).json({
                message:"error",
                data: err
            });
        } else {
            res.status(200).json({
                message:"success",
                data: usuario
            });
        }
    });
}

exports.delete = (req,res) => {
    Usuario.remove({_id:req.params.id},(err,usuario) => {
        if(err){
            res.status(500).json({
                message:"error",
                data: err
            });
        } else {
            res.status(200).json({
                message:"success",
                data: usuario
            });
        }
    });
}

exports.update = (req,res) => {

    let update = new Usuario({
        _id: req.params.id,
        name: req.body.name,
        lastName: req.body.lastName,
        completeName: req.body.name + " " + req.body.lastName,
        initials: req.body.name.charAt(0).toUpperCase + req.body.lastName.charAt(0).toUpperCase,
        mail: req.body.mail,
        password: req.body.password,
        job: req.body.job,
        rol: req.body.rol,
        color: req.body.color
    })

    Usuarios.findByIdAndUpdate({_id:req.params.id},update,(err,usuario) => {
        if(err){
            res.status(500).json({
                message:"error",
                data: err
            });
        } else {
            res.status(200).json({
                message:"success",
                data: usuario
            });
        }
    });
}

exports.createSuperAdmin = (req,res) => {
    let name = "super";
    let lastName = "admin";
    let usuario = new Usuario({
        name: name, // primer nombre
        lastName: lastName, // apellido
        completeName: name + " " + lastName, // nombre completo
        initials: name.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase(), // iniciales del nombre
        mail: "admin@superadmin.com", // correo de la cuenta
        password: "admin", // password de la cuenta
        job: "administrador", // cargo laboral dentro del equipo
        rol: "root", // tipo de rol dentro del equipo, desde aca depende lo que pueda hacer el usuario dentro del sistema
        color: "#ec0000", // color asociado al usuario
        taks: new Array()
    });

    usuario.save((err,usuarios) => {
        if(err){
            res.status(500).json({
                message:"error",
                data: err
            });
        } else {
            res.status(200).json({
                message:"success",
                data: usuarios
            });
        }
    })
}