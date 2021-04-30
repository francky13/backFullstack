let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());
const { checkToken } = require("./tokenvalidation");


const { update, create, listeinfo,deleteliste
} = require("../controller/infoController");


router.post('/newpost',checkToken,create);
router.get("/listeinfo", listeinfo);
router.get("/update",checkToken, update);
router.get("/delete", checkToken,deleteliste);



module.exports = router;