const express = require('express');
const router = express.Router();

const misc = require("../controllers/misc.controllers")

router.get("/",misc.home);

module.exports = router;
