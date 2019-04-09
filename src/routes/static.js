const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticCOntroller");

router.get("/", staticController.index);

module.exports = router;