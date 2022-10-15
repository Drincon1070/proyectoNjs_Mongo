const app = require("./app"); 
var port = 4000; 
const mongo = require("./database"); 
const rutasVehiculos = require("./src/routers/Vehiculos.routes");

app.listen(port, ()=>{
    console.log("Servidor activo en: "+port); 
});

app.get("/", (req, res)=>{
    res.send("API en funcionamiento"); 
});

//CONFIGURACION DE RUTAS
app.use("/vehiculos", rutasVehiculos); 