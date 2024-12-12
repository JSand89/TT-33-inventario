const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const holaRoutes = require("./routes/holaRoutes")
const inventarioRoutes = require("./routes/inventario")//N
const app = express()
const PORT = 3006
app.set("port",PORT)

app.use("/api/hola",holaRoutes)//
app.use("/api/inventario",inventarioRoutes)//N
//app.use("/api/---/",herramientasRoutes)
//app.use("/api/---",empleadosRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(console.log("Connect to BD"))
.catch(err=> console.error(err))

app.get("/",(req,res)=>{
    res.send("hola mundo")
})
app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`)
})
