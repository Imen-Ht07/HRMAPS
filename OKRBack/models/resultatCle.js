const mongoose = require('mongoose');

const ResultatSchema = new mongoose.Schema({
  titre : {
        type: String,
        required: true
      },
  description: {
    type: String,
    required: true
  },
  avancement: {
    type: Number,
    required: true
  },
  etat_avancement: {  type: String, enum: ['Non commencé', 'En cours', 'Terminé'] }, 
  
  objectifID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Objectif',
    required: true
  }
});

const Resultat = mongoose.model('Resultat', ResultatSchema);

module.exports = Resultat;
