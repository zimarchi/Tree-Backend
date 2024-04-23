var express = require('express');
var router = express.Router();

let users = ['nazim', 'lycia', 'papa']

//GET users list
router.get('/', function(req, res) {
  res.json({result: true, usersList: users})
})

//Add new user via body (in Thunder Client, use body/form-encode)
router.post('/', function(req, res) {
  users.push(req.body.newUser)
  res.json({result: true, usersList: users})
})

//Add new user via params
router.post('/:newUser', function(req, res) {
  users.push(req.params.newUser)
  res.json({result: true, usersList: users})
})

//Remove user via params
router.delete('/:userToDelete', function(req, res) {
  let position = users.indexOf(req.params.userToDelete)
  users.splice(position, 1)
  res.json({result: true, usersList: users})
})

//Replace user via body (in Thunder Client, use body/form-encode)
router.put('/', function(req, res) {
  let position = users.indexOf(req.body.userToreplace)
  users[position]= req.body.replacementUser
  res.json({result: true, usersList: users})
})


module.exports = router;
