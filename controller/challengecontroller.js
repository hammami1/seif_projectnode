const challenge = require("../model/challenge");
const Challenge = require("../model/challenge");

async function add(req, res, next) {
  try {
    const challenge = new Challenge({
      titre: req.body.titre,
      details: req.body.details,
      date_creation: new Date(),
      date_debut: req.body.date_debut,
      date_fin: req.body.date_fin,
      recompense: req.body.recompense,
      date_limite: req.body.date_limite,
    });

    await challenge.save();
    res.send("challenge add");
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res, next) {
  try {
    const data = await Challenge.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res, next) {
  try {
    await challenge.findByIdAndUpdate(req, params.id);
    res.send("updated");
  } catch (err) {
    console.log(err);
  }
}
async function deletechallenge(req, res, next) {
  try {
    await challenge.findByIdAndDelete(req, params.id);

    res.send("deleted");
  } catch (err) {
    console.log(err);
  }
}
module.exports = { add, show, update, deletechallenge };
