const { Router } = require("express"); 
const routerVehiculos = Router(); 
const controlVehiculo = require("../controllers/controllerVehiculos"); 

routerVehiculos.get("/", (req, res) => {
    res.send("Funcionalidad de Vehiculos corriendo"); 
}); 

routerVehiculos.post("/new", controlVehiculo.vehiculoSave); 

routerVehiculos.get("/list", controlVehiculo.vehiculosList); 

routerVehiculos.get("/find/:id", controlVehiculo.vehiculoXid); 

routerVehiculos.put("/edit/:id", controlVehiculo.vehiculoEdit); 

routerVehiculos.delete("/delete/:id", controlVehiculo.vehiculoDelete);

routerVehiculos.get("/list/:parametro", controlVehiculo.vehiculoXParametro);

module.exports = routerVehiculos; 