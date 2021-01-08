const router = require('express').Router();
let User = require('../models/user.model');

// GET request /users/
router.route('/').get((req, res) => {
  // Provide a list of all Users in DB
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST request /users/add
router.route('/add').post((req, res) => {
  // Create a new User in the DB
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;