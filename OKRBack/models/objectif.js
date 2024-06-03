const mongoose = require("mongoose"); 
const objectifSchema = new mongoose.Schema({
     description: { type: String }, 
     date_limite: { type: String }, 
     etat_avancement: {  type: String, enum: ['Non commencé', 'En cours', 'Terminé'] }, 
     niveau: { type: String, enum: ['entreprise', 'département', 'individuel'] }
     })
      module.exports = mongoose.model("Objectif", objectifSchema);