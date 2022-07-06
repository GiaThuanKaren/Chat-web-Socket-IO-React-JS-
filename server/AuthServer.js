const express = require("express");
const { connect } = require("./src/Config/MongoConfig");
const Routes = require("./src/Routes");
const app = express();
const PORT = 5001;
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
connect();
Routes(app);
app.listen(PORT,()=>{
    console.log("Running Auth Server at "+ PORT)
})