var express = require('express');
var router = express.Router();
var Module = require('../models/module.model.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get ('modules', async (req,res, next) =>{
  try {
    //
    res.json()
  }catch (err){
    next (err)
  }
})

module.exports = router;
