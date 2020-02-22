const express = require('express');
const router = express.Router();
const SentimentAnalysis = require('../controllers/sentiment-analysis-controller');

router
    .route('/sentiment-analysis')
    .post(SentimentAnalysis.predict);

module.exports = router;