const app = require("./src/config/custom-express")
const mongoose = require("./src/config/database");


//mongodb atlas
//login: joaosartoreto; password: egGgyysZPl16NkAG
//mongodb+srv://joaosartoreto:egGgyysZPl16NkAG@cluster0.dtdh0bu.mongodb.net/bancochat?retryWrites=true&w=majority
//mongodb+srv://joaosartoreto:<password>@cluster0.dtdh0bu.mongodb.net/

mongoose.cliente.set('strictQuery', true);

mongoose.cliente.connect("mongodb+srv://joaosartoreto:egGgyysZPl16NkAG@cluster0.dtdh0bu.mongodb.net/bancochat?retryWrites=true&w=majority")
    .then(() => {
        console.log("Conectamos ao MongoDb");
        app.listen(3000, () => {
            console.log("It is on");
        })
    })
    .catch((error) => console.log(error))

