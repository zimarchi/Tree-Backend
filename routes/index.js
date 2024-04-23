var express = require('express');
var router = express.Router();

//GET home page
router.get('/', function (req, res, next) {
  res.render('index');
});

//route test
router.get('/test', function (req, res) {
  res.json({result: true, message: 'test bon'})
  console.log("Ce message ne s'affichera pas dans la console du navigateur mais dans la console de VSCODE")
});

module.exports = router;
