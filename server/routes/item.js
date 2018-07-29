var express = require('express');
var router = express.Router();
const ItemController = require('../controllers/itemController');
const authenticate = require('../middlewares/authenticate');

router.post('/add', function(req, res) {
  ItemController.add(req, res)
});

module.exports = router;
