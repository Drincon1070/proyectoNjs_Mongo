const app = require("./app"); 
var port = 4000; 
const mongo = require("./database"); 
const rutasVehiculos = require("./src/routers/Vehiculos.routes");
const rutasUsuarios = require("./src/routers/Usuarios.routes");
const cors = require("cors"); 

app.use(cors); 

app.listen(port, ()=>{
    console.log("Servidor activo en: "+port); 
});

app.get("/", (req, res)=>{
    res.send("API en operando correctamente!!"); 
});

//CONFIGURACION DE RUTAS
app.use("/vehiculos", rutasVehiculos); 
app.use("/usuarios", rutasUsuarios); 