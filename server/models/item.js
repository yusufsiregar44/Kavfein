const mongoose = require('mongoose');

var enu = {
  values: ["The Grandmaster", "The Apprentice", "The Fellow"]
, message: 'Invalid bean grade'
}


const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  grade: {
    type: String,
    enum: enu,
  },
  imgSrC: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
