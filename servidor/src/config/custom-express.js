const express = require("express");
const cors_libera_geral= require("cors");
const rotasMensagens = require("./../app/routes/mensagem.route");


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors_libera_geral());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

rotasMensagens(app);

app.use((req,resp) => {
    resp.status(404).json({mensagem: "Não foi possivel encontrar o recurso"});
});


app.use((error, req, resp, next) => {
    resp.status(500).json({mensagem: "Houve um erro interno no servidor"});
});

module.exports = app;
