const http = require("http");
const express = require("express");
const mongo = require("mongoose");
const bodyParser = require("body-parser");
const mongoconnect = require("./config/dbconnection.json");
const path = require("path");
const { add } = require("./controller/challengecontroller");
const { addp } = require("./controller/participantcontroller");

const {
  addparticipantsocket,
  
} = require("./controller/participantcontroller");
mongo
  .connect(mongoconnect.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo connecter"))
  .catch((err) => console.log(err));

const challengerouter = require("./routes/challenge");
const participantrouter = require("./routes/participant");

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/challenge", challengerouter);
app.use("/participant", participantrouter);


const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("user connected");
  socket.emit("msg", "user is connected");

  socket.on("participant", (data) => {
    addparticipantsocket(data);
    io.emit("participant", data);
  });

  socket.on("aff", async (data) => {
    const r = await affichesocket(data);
    console.log("jjjjjj", JSON.stringify(r));
    io.emit("aff", r);
  });

  socket.on("typing", (data) => {
    io.emit("typing", data + "is typing");
  });

  socket.on("msg", (data) => {
    add(data.object);
    io.emit("msg", data.name + ":" + data.object);
  });

  socket.on("disconnect", () => {
    console.log("user disconnect");
    io.emit("msg", "user disconnect");
  });
});
server.listen(3000, console.log("server run"));
module.exports = app;
