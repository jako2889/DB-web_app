const router = require("express").Router();

// CONTROLLERS
const createExposure = require("../controllers/createExposure");

router
    .post('/', createExposure);


module.exports = router;