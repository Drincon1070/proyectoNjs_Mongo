const Router = require("express");
const routerUsuario = Router(); 
const controlUsuario = require("../controllers/controllerUsuarios"); 

routerUsuario.post("/new", controlUsuario.usuarioSave); 

module.exports = routerUsuario; 

