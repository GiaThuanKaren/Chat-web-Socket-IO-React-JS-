const express = require("express");
const Routes = require("./src/Routes");
const app = express();
const PORT = 5001;
Routes(app);
app.listen(PORT,()=>{
    console.log("Running Auth Server at "+ PORT)
})