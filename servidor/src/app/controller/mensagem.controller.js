const mensagemDAO = require("./../dao/mensagem.dao");
const {validationResult} = require("express-validator");

class MensagemController{
    routes(){
        return {
            "base":  "/chat/messages",
            "id": "/chat/messages/:id"
        }
        //"base": "/chat/messages",
        //"id": "/chat/messages/:id"
        //"https://antonellis.com.br/ufms/pw/chat/messages",
        //"https://antonellis.com.br/ufms/pw/chat/messages/:id"
    }

    find(){
        return (req, resp) => {

            mensagemDAO.find(req.params.id)
                .then(resultado => {
                    let msg = resultado;
                    if(msg){
                        resp.status(200).json(msg);
                    }
                    else{
                        resp.status(404).json({ mensagem: "Objeto não localizado" });
                    }
                })
                .catch((error) => resp.status(400).json({ mensagem: error.message }));
        }
    }

    create(){
        return (req, resp) => {

            const erros = validationResult(req).array();
            if(erros.length > 0){
                resp.status(422).json(erros);
            }
            else{
                mensagemDAO.create(req.body)
                .then(resultado => {
                    resp.status(201).json({ mensagem: "Mensagem armazenada com sucesso!" });
                })
                .catch((error) => resp.status(400).json({ mensagem: error.message }));
            }
        }
    }
}


module.exports = new MensagemController();