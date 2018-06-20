const mongoose = require('mongoose');

const wineSchema = new mongoose.Schema({  
  name: {
    type: String,
    required: [true]
  },
  year: {
    type: String,
    required: [true]
  },
  raiting: {
    type: Number, min: 10, max: 100,  
    required: [true]
  },
  varietal: {
    type: String,
    required: [true]
  },
  vineyard: {
    type: String,
    required: [true]
  },
  type: {
    type: String,
    required: [true]
  },
  region: {
    type: String,
    required: [true]
  },
  farm: {
    type: String,
    required: [true]
  },
  organic: {
    type: Boolean,
    required: [true],
    default: false
  },
  timestamp: { 
    type : Date, 
    default: Date.now 
  }
});

const Wine = mongoose.model('Wine', wineSchema);

module.exports = Wine;
