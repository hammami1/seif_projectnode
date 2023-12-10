const participant = require("../model/participant");
const Participant = require("../model/participant");

async function addp(req, res, next) {
  try {
    const participant = new Participant({
        date_participation: req.body.date_participation,
        statut: req.body.statut,
        nbr_participants: req.body.nbr_participants,
    });

    await participant.save();
    res.send("participant add");
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res, next) {
  try {
    const data = await Participant.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res, next) {
  try {
    await participant.findByIdAndUpdate(req, params.id);
    res.send("updated");
  } catch (err) {
    console.log(err);
  }
}
async function deleteparticipant(req, res, next) {
  try {
    await participant.findByIdAndDelete(req, params.id);

    res.send("deleted");
  } catch (err) {
    console.log(err);
  }}
  
      async function addparticipantsocket(data) {
        try {
            const participant = new Participant({
                date_participation: data.date_participation,
                statut: data.statut,
                nbr_participants: data.nbr_participants,
              });
      
          await participant.save();
          //res.send("participant add");
        } catch (err) {
          console.log(err);
        }
      }

module.exports = { addp , show, update, deleteparticipant,addparticipantsocket };
