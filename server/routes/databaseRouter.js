const express = require('express');
const router = express.Router();

const databaseController = require('../controllers/databaseController')

router.post('/addItems', databaseController.addToSeo, (req, res) => {
  res.status(200).json({seoData: res.locals.seoData})
});


module.exports = router;

// score: res.locals.seoData.score,
    // audits: JSON.parse(res.locals.seoData.audits),
    // categoryGroups: JSON.parse(res.locals.seoData.category_groups),
    // domain: res.locals.seoData.user_id_domain,
    // userId: res.locals.seoData.user_id