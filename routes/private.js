const express = require("express");
const router = express.Router();
const controllers = require("../controllers");
const multiparty = require("connect-multiparty");
const body = multiparty();
module.exports = router;

// usuarios
router.post("/app/user/create",body,controllers.usuarios.create);
router.get("/app/user/find",body,controllers.usuarios.find);
router.get("/app/user/id/:id",body,controllers.usuarios.findById);
router.delete("/app/user/delete/:id",body,controllers.usuarios.delete);
router.put("/app/user/update/:id",body,controllers.usuarios.update);

// tareas
router.post("/app/task/create",body,controllers.tareas.create);
router.get("/app/task/find",body,controllers.tareas.find);
router.get("/app/task/find/:id",body,controllers.tareas.findById);
router.delete("/app/task/delete/:id",body,controllers.tareas.delete);
