let express = require('express');
let router = express.Router();
let bball = require('../API/bball.js');
let config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(bball);
});

module.exports = router;