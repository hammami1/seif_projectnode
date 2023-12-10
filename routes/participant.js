const express=require("express");
const router=express.Router();
const participantcontroller= require("../controller/participantcontroller");
router.post("/add",participantcontroller.addp);
router.get("/show", participantcontroller.show);
router.put("/update/:id", participantcontroller.update);
router.delete("/deleteparticipant/:id", participantcontroller.deleteparticipant);
router.get("/participant", (req, res, next) => {
    res.render("participant");
  });
module.exports = router;


















module.exports=router;
