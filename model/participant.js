const mongo = require("mongoose");
const Schema = mongo.Schema;
const Participant = new Schema({
  date_participation:String,
  statut: String,
  nbr_participants: Number,
});

module.exports = mongo.model("participant", Participant);