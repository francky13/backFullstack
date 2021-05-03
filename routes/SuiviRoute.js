let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());
const { checkToken } = require("./tokenvalidation");


const {
    statistiquepays,statistique, statistiqueJour, create, tauxpositiviter
} = require("../controller/SuiviControler");


router.post('/newsuivi',checkToken,create);
router.get("/statistiquepays", statistiquepays);
router.get("/statistique", statistique);
router.get("/statistiqueJour", statistiqueJour);
router.get("/tauxpositiviter", tauxpositiviter);



module.exports = router;