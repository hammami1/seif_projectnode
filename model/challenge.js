const mongo = require("mongoose");
const Schema = mongo.Schema;
const Challenge = new Schema({
  titre:String,
  details: String,
  date_creation: Date,
  date_debut:String ,
  date_fin:String,
  recompense:String,
  date_limite:String,
});

module.exports = mongo.model("challenge", Challenge);