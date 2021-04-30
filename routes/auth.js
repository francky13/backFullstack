let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());
const { checkToken } = require("./tokenvalidation");


const {
 getUsers ,login, create,
} = require("../controller/UserControl");


router.get('/User',checkToken,getUsers);
router.post("/", create);
router.post("/login", login);




module.exports = router;