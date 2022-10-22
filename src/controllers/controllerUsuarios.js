const Usuario = require("../models/Usuarios"); 
const jwt = require("jsonwebtoken"); 

const usuarioSave = async (req, res)=>{
    try {
        const { email } = req.body; 
        var usuario = Usuario.findOne({ email }); 

        if(usuario){
            return res.status(400).json({ mensaje: "usuario existente" }); 
        }
        else {  
            return res.status(200).json({ mensaje: "usuario creado" });
        }

        usuario = new Usuario(req.body); 
        await usuario.save();

        //GENERAR TOKEN
        const payload = {
            usuario: { id: usuario.id },
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
        console.log(error); 
    }
}

module.exports= {
    usuarioSave
}