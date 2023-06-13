const mongoose = require("mongoose");
const {check} = require("express-validator");

const mensagem = mongoose.model("mensagem", {
    timestamp: String,
    sender_id: String,
    sender_name: String,
    sender_image: String,
    receiver_id: String,
    receiver_name: String,
    visibility: Boolean,
    message_id: String,
    message_text: String,
    color: String
});

class MensagemModel{
    validacoes(){
        return [
            check("timestamp").not().isEmpty().withMessage("timestamp é necessario"),
            check("sender_id").not().isEmpty().withMessage("sender_id é necessario"),
            check("sender_name").not().isEmpty().withMessage("sender_name é necessario"),
            check("sender_image").not().isEmpty().withMessage("sender_image é necessario"),
            check("visibility").not().isEmpty().withMessage("visibility é necessario"),
            check("message_id").not().isEmpty().withMessage("message_id é necessario"),
            check("color").not().isEmpty().withMessage("color é necessario"),

        ];
    }
}

const mensagemMODEL = new MensagemModel()

module.exports = {mensagem, mensagemMODEL};