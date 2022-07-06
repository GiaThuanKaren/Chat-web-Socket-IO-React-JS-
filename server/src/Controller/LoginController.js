const jwt = require("jsonwebtoken");
const LoginController={
    Login:async function(req,res){
        const dataFormClient = req.body;
        const accessToken = jwt
        res.send("Login Controller")
    }
}

module.exports = LoginController