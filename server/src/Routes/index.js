const Routes=function(app){
    app.use("/",(req,res)=>{
        res.send("hi")
    })
    // [ GET , POST ] , Verify

    app.use("/register",(req,res)=>{
        res.send("Register")
    })
    // [ GET ] , Verify
    app.use("/login",(req,res)=>{
        res.send("Login")
    })
    //[ GET , POST , PUT , DELETE]
    app.use("/user",(req,res)=>{
        res.send("User")
    })
}
module.exports =Routes