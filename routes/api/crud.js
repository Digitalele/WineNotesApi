const express = require('express');
const router = express.Router();
const Wine = require('../../models/Wine');

router.post('/add', (req, res, next) => {
  // Take the params, and translate them into a new object
  const wineInfo = {
      name: req.body.name,
      year: req.body.year,
      raiting: req.body.raiting,
      varyetal: req.body.varyetal,
      type: req.body.type,
      farm: req.body.farm
  };
  
  // Create a new Product with the params
  const newWine = new Wine(wineInfo);

  newWine.save( (err) => {
		if (err) { 
			console.log('error save', err);
			return next(err) 
		}
    // redirect to the list of products if it saves
    return res.redirect('/manage');
  });

});

module.exports = router;