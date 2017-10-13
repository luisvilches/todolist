const express = require("express");
const router = express.Router();
const controllers = require("../controllers");
const login = require("../bin/controllers/auth");
const multiparty = require("connect-multiparty");
const body = multiparty();
module.exports = router;

router.get("/",body, controllers.main.main);
router.post("/login",body,login.auth);
router.post("/user/create/super/admin",body,controllers.usuarios.createSuperAdmin);
router.get("/4ca707c1",body,controllers.usuarios.createSuperAdmin);