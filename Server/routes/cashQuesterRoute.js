const express = require("express");
const router = express.Router();

const { NewRequest, History, DeleteRequest, UserDetails } = require("../controllers/cashQuester")
const { Logout } = require("../controllers/onBoardController");
const AuthController = require("../middlewares/authorize");

router.use(AuthController(['employee']));

router.post("/newRequest", NewRequest);
router.post("/history", History);
router.delete("/history/:id", DeleteRequest); 
router.post("/userDetail", UserDetails);

module.exports = router;