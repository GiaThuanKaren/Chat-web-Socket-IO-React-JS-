const RegisRoute = require("./RegisRoute")
const LoginRoute = require("./LoginRoutes")
const UserRoute = require("./UserRoute")
const Routes=function(app){
    
    // [ GET , POST ] , Verify

    app.use("/register",RegisRoute)
    // [ GET ] , Verify
    app.use("/login",LoginRoute)
    //[ GET , POST , PUT , DELETE]
    app.use("/user",UserRoute)
    app.use("/",(req,res)=>{
        res.send("hi")
    })
}
module.exports =Routes