const express = require('express');
const router = express.Router();
const Wine = require('../../models/Wine');

/* GET Phones listing. */
router.get('/wines', (req, res, next) => {
  Wine.find((err, winesList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(winesList);
  });
});


/* GET a single Wine by Id */
router.get('/wine/:id', (req, res) => {
  Wine.findById(req.params.id, (err, theWine) => {
      if (err) {
        res.json(err);
        return;
      }

      res.json(theWine);
    });
});


//Display certain wine by name from input
router.post('/winename', (req, res, next) => {
  const wineName = req.body.name;
  Wine.find(
      { "name": { "$regex": wineName, "$options": "i" } },
      function(err, wines) { 
         if (err) {
          res.json(err);
          return;
        }
        res.json(wines);
      } 
    );

});


//%LIKE% search certain wine by Name for quering api from clients 
  router.get('/winename/:name', (req, res, next) => {
  const wineName = req.params.name;
    Wine.find(
      { "name": { "$regex": wineName, "$options": "i" } },
      function(err, wines) { 
         if (err) {
          res.json(err);
          return;
        }
        res.json(wines);
      } 
    );
});




module.exports = router;