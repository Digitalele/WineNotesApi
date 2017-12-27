const mongoose = require('mongoose');

const wineSchema = new mongoose.Schema({  
  name: {
    type: String,
    required: [true]
  },
  year: {
    type: Date,
    required: [true]
  },
  raiting: {
    type: Number, min: 10, max: 100,  
    required: [true]
  },
  varyetal: {
    type: String,
    required: [true]
  },
  type: {
    type: String,
    required: [true]
  },
  farm: {
    type: String,
    required: [true]
  }
});

const Wine = mongoose.model('Wine', wineSchema);

module.exports = Wine;
