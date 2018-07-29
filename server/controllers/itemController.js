const mongoose = require('mongoose');
const item = require('../models/item');

class ItemController {
  static add(req, res) {
    item.create({
      name: req.body.name,
      description: req.body.description,
      grade: req.body.grade,
      imgSrC: req.body.imgSrC,
    })
    .then((addedItem) => {
      res
        .send(addedItem)
        .status(200);
    })
    .catch((err) => {
      res
        .status(400)
        .send(err);
    })
  }
}

module.exports = ItemController;
