const router = require("express").Router();

// CONTROLLERS
const createPerson = require("../controllers/createPerson");

router
    .post('/', createPerson);


module.exports = router;