const mongo = require("mongoose"); 

(async () => {
    try {
        const db = await mongo.connect("mongodb+srv://drinconle:ypGJw4RzRuGe7qKU@cluster0.ftofspf.mongodb.net/minticprueba1?retryWrites=true&w=majority"); 
        console.log("Conexión establecida en: " + db.connection.name); 
    } catch (error) {
        console.error(error); 
    }
})(); 
