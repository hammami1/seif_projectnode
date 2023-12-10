const express=require("express");
const router=express.Router();
const challengecontroller= require("../controller/challengecontroller");
router.post("/add",challengecontroller.add);
router.get("/show", challengecontroller.show);
router.put("/update/:id", challengecontroller.update);
router.delete("/deletechallenge/:id", challengecontroller.deletechallenge);
module.exports = router;


















module.exports=router;
