var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({result: true, message: 'toto ne comprend rien'})
  console.log("Ce message ne s'affichera pas dans la console du navigateur mais dans la console de VSCODE")
});

module.exports = router;
