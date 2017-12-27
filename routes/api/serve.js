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


/* GET a single Phone. */
router.get('/wine/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  
  Wine.findById(req.params.id, (err, theWine) => {
      if (err) {
        res.json(err);
        return;
      }

      res.json(theWine);
    });
});

module.exports = router;