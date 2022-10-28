const e = require("express");
const Vehiculo = require("../models/Vehiculos"); 
const jwt = require("jsonwebtoken"); 

//Insertar
const vehiculoSave = async (req, res) =>  {
    try {
        const {placa, marca, modelo} = req.body;

        let vehiculo = await Vehiculo.findOne({placa});

        if(vehiculo){
            return res.status(400).json({
                mensaje: "vehiculo existente"
            }); 
        }
        else{
            vehiculo = new Vehiculo(req.body);
            await vehiculo.save(); 
            return res.status(200).json({
                mensaje: "vehiculo creado"
            })
        }

        const payload = {
            vehiculo: { id: vehiculo.id },
        };
      
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
              expiresIn: 3600, //1 hora
            },
            (error, token) => {
              if (error) throw error;
      
              //Mensaje de confirmación
              res.json({ token });
            }
        );

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