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
    res.json(wineList);
  });
});

module.exports = router;