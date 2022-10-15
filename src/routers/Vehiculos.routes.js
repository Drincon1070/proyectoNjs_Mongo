const { Router } = require("express"); 
const routerVehiculos = Router(); 
const controlVehiculo = require("../controllers/controllerVehiculos"); 

routerVehiculos.get("/", (req, res) => {
    res.send("Funcionalidad de Vehiculos Activa"); 
}); 

routerVehiculos.post("/new", controlVehiculo.vehiculoSave); 

routerVehiculos.get("/list", controlVehiculo.vehiculosList); 

routerVehiculos.get("/find/:id", controlVehiculo.vehiculoXid); 

module.exports = routerVehiculos; 