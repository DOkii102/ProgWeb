const mongoose = require("mongoose");
const { check } = require("express-validator");

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
  color: String,
});

class MensagemModel {
  validacoes() {
    return [
      validarNotEmpty("timestamp", "timestamp é necessário"),
      validarNotEmpty("sender_id", "sender_id é necessário"),
      validarNotEmpty("sender_name", "sender_name é necessário"),
      validarNotEmpty("sender_image", "sender_image é necessário"),
      validarNotEmpty("visibility", "visibility é necessário"),
      validarNotEmpty("message_id", "message_id é necessário"),
      validarNotEmpty("color", "color é necessário"),
      check("color").isHexColor(),
    ];
  }

  validarNotEmpty(campo, mensagem) {
    check(campo).notEmpty().withMessage(mensagem);
  }
}

const mensagemMODEL = new MensagemModel();

module.exports = { mensagem, mensagemMODEL };
