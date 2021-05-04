let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());



const {create, getnombrevaccins
} = require("../controller/vaccinsController");


router.post('/newpostvaccins',create);
router.get("/getpostvaccins", getnombrevaccins);

module.exports = router;
