const app = require("./app");
var port = 4000; 
var mongoose = require('./database'); 
var usuarioRouter = require("./src/routers/usuarios.routes"); 
var vehiculoRouter = require("./src/routers/vehiculos.routes"); 
var cors = require("cors"); 

app.use(cors());

app.listen(port, ()=>{
    console.log("Servidor en el puerto "+port); 
}); 

app.use("/usuarios", usuarioRouter); 
app.use("/vehiculos", vehiculoRouter);

app.get("/", (req, res) => {
    res.send("Api Funcionando"); 
})