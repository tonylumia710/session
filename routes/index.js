var express = require('express');
var router = express.Router();
const {login,index, thanks,olvidar} = require("../controllers/indexController");
const loginMiddleware = require("../middlewares/loginMiddleware");
const loginValidator = require("../validators/loginValidator");
/* GET home page. */
router.get('/',loginMiddleware, index);
router.post("/", loginValidator, login);
router.get('/thanks',loginMiddleware, thanks);
router.post("/olvidar", olvidar);

module.exports = router;
