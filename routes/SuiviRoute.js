let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());



const {
    statistiquepays,statistique, statistiqueJour, create, tauxpositiviter
} = require("../controller/SuiviControler");


router.post('/newsuivi',create);
router.get("/statistiquepays", statistiquepays);
router.get("/statistique", statistique);
router.get("/statistiqueJour", statistiqueJour);
router.get("/tauxpositiviter", tauxpositiviter);



module.exports = router;