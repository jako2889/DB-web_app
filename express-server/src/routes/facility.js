const router = require("express").Router();

// CONTROLLERS
const createFacility = require("../controllers/createFacility");

router
    .post('/', createFacility);


module.exports = router;