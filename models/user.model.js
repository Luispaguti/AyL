const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PW_PATTERN = /^.{9,}$/;

const userSchema = new Schema ({
    name:{
        type: String,
        required: "¿Cómo te llamas?",
        maxLength: [30, "No me creo que tengas un nombre tan largo"],
        trim: true,
    },
    email:{
        type: String,
        required: "Necesitamos tu email",
        trim: true,
        lowercase: true,
        unique: true,
        match:[EMAIL_PATTERN, "Correo inválido"],
    },
    password: {
        type: String,
        required: "Tu seguridad es lo primero",
        match: [PW_PATTERN, "Dame 9 caracteres please"]
    }

    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;