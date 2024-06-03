const mongoose = require('mongoose');
const Role = require("../_helpers/role");
const managerSchema = new mongoose.Schema({
    photo: {type: String},
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    tel: { type: Number, required: true },
    email: { type: String, required: true },
    dateEmbauche: { type: String, required: true },
    password: { type: String, required: true },
    departement: { type: String, required: true }, 
    role: { type: String, default: Role.Manager },
  });
module.exports = mongoose.model("Manager", managerSchema);
