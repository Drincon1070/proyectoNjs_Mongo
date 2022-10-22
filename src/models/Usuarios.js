const mongo = require("mongoose"); 

const UsuarioSchema = mongo.Schema({
    nombre: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contra: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
}
); 

const Usuario = new mongo.model("Usuario", UsuarioSchema);
module.exports = Usuario;  