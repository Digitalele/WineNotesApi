const express = require('express');
const router = express.Router();
const Wine = require('../../models/Wine');


//Display all wine
/* GET all database products*/
router.get('/wines', (req, res, next) => {
    Wine.find({}, (err, wine) => {
        if (err) { return next(err); }
        
        res.render('wines', { title: 'List Wine', wines: wine });
    });
});

//Display certain wine by id
router.get('/wine/:id', (req, res, next) => {
  const wineId = req.query.id;

  Wine.findById(wineId, (err, wine) => {
    if (err) { return next(err); }
    res.render('wines', { title: 'List Wine', wine: wine });
  });
});


//Add Wine
router.post('/add', (req, res, next) => {
  // Take the params, and translate them into a new object
  const wineInfo = {
      name: req.body.name,
      year: req.body.year,
      raiting: req.body.raiting,
      varietal: req.body.varietal,
      type: req.body.type,
      vineyard: req.body.vineyard,
      region: req.body.region,
      farm: req.body.farm,
      organic: req.body.organic
  };
  
  // Create a new Wine with the params
  const newWine = new Wine(wineInfo);

  newWine.save( (err) => {
		if (err) { 
			console.log('error save', err);
			return next(err) 
		}
    // redirect to the list of wine if it saves
    return res.redirect('/api/crud/wines');
  });
});


router.post('/:id/delete', (req, res, next) => {
  const wineId = req.params.id;

   Wine.findByIdAndRemove(wineId, (err, wine) => {
    if (err){ return next(err); }
   return res.redirect('/api/crud/wines');
  });

});

module.exports = router;