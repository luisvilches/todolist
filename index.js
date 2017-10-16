const express = require("express");
const app = express();
const cors = require("cors");
const multiparty = require("connect-multiparty");
const body = multiparty();
const mongoose = require("mongoose");
const configuraciones = require("./config/general");
const database = require("./config/database");
const public = require("./routes/public");
const private = require("./routes/private");
const chalk = require("chalk");
const authMidleware = require("./bin/middlewares/auth");
 
app.use(express.static("public"));
app.use(cors());

process.env.TZ = "UTC-4";

mongoose.connect(database.mlab, {
    useMongoClient: true,
  }, err => {
    if(err){
        console.log(chalk.red(err));
    } else {
        console.log(chalk.cyan("connection database =>"),chalk.blue("success"));
    };
});

app.use("/",public);
app.use("/app", authMidleware.ensureAuthenticated ,private);

app.listen(configuraciones.port, err => {
    if(err){
        console.log(chalk.red(err));
    } else {
        console.log(chalk.cyan("server running in port => "), chalk.blue(configuraciones.port));
    };
});