const Objectif = require("../models/objectif");

exports.addObjectif = async (req, res) => {
  try {
    const objectif = new Objectif(req.body);
    const newObjectif = await objectif.save();
    res.status(201).json({
      ok: true,
      objectif: newObjectif,
    });
  } catch (err) {
    res.status(401).json({
      ok: false,
      err,
    });
  }
};

exports.updateObjectif = async (req, res) => {
  try {
    await Objectif.findOneAndUpdate({ _id: req.params.id }, { $set: req.body });
    res.status(200).send("Objectif mis à jour avec succès.");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.deleteObjectif = async (req, res) => {
  try {
    await Objectif.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Objectif supprimé !' });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.getObjectifByID = async (req, res) => {
  try {
    const objectif = await Objectif.findOne({ _id: req.params.id });
    if (!objectif) {
      return res.status(404).json({ message: 'Objectif non trouvé.' });
    }
    res.status(200).json(objectif);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.getAllObjectifs = async (req, res) => {
  try {
    const objectifs = await Objectif.find({});
    res.status(200).send(objectifs);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
//fonction count
exports.getObjectifCountByStatus = async (req, res) => {
  try {
    const countByStatus = await Objectif.aggregate([
      {
        $group: {
          _id: "$etat_avancement", // Utilisez le champ correct ici
          count: { $sum: 1 } // Comptez le nombre de documents pour chaque statut
        }
      }
    ]);

    const result = {
      'Non commencé': 0,
      'En cours': 0,
      'Terminé': 0
    };

    countByStatus.forEach(item => {
      if (item._id === 'Non commencé') {
        result['Non commencé'] = item.count;
      } else if (item._id === 'En cours') {
        result['En cours'] = item.count;
      } else if (item._id === 'Terminé') {
        result['Terminé'] = item.count;
      }
    });

    // Envoyer le résultat au client
    res.json(result);
  } catch (error) {
    res.status(500).send({
      message: "Erreur lors de la récupération du nombre d'objectifs par statut",
      error: error.message
    });
  }
};

