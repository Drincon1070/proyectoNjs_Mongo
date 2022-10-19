const e = require("express");
const Vehiculo = require("../models/Vehiculos"); 

//Insertar
const vehiculoSave = async (req, res) =>  {
    try {
        const vehiculo = new Vehiculo(req.body); 
        await vehiculo.save(); 
        res.send("Vehiculo guardado correctamente"); 
    } catch (error) {
        console.error(error); 
    }
}

//Listar
const vehiculosList = async (req, res) => {
    try {
        const listaVehiculos = await Vehiculo.find(); 
        res.status(200).send(listaVehiculos); 
    } catch (error) {
        console.error(error); 
    }
}

//Consultar por id
const vehiculoXid = async (req, res) => {
    try {
        const id = req.params.id; 
        if(id){
            const vehiculo = await Vehiculo.findById(id);
            res.status(200).send(vehiculo);  
        }
        else{
            res.send("No se puede tramitar la petición"); 
        }
    } catch (error) {
        console.error(error); 
    }
}

//ACTUALIZAR 
const vehiculoEdit = async (req, res) => {
    try {
        const id = req.params.id; 
        const vehiculo = req.body;
        await Vehiculo.findByIdAndUpdate(id, vehiculo); 
        res.send("Vehiculo Actualizado correctamente"); 
    } catch (error) {
        console.log(error); 
    }
}

//ELIMINAR
const vehiculoDelete = async (req, res) =>{
    try {
        const id = req.params.id; 
        await Vehiculo.findByIdAndDelete(id);
        res.send("Vehiculo fue eliminado correctamente");
    } catch (error) {
        console.log(error); 
    }
}

module.exports = {
    vehiculoSave, 
    vehiculosList,
    vehiculoXid,
    vehiculoEdit,
    vehiculoDelete
}