const express = require('express');
//const fs = require('fs');
const router = express.Router();
//const launchLighthouse = require('../server.js/launchChromeAndRunLighthouse')
const lighthouseController = require('../controllers/lighthouseController')


router.post('/lighthouse', lighthouseController.generateReport, (req, res) => {
  return res.status(200).json({report: res.locals.report});  
});


module.exports = router;