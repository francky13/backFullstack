let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());



const {create, getnombrevaccins,total
} = require("../controller/vaccinsController");


router.post('/newpostvaccins',create);
router.get("/getvaccins", getnombrevaccins);
router.get("/gettotal", total);


module.exports = router;
