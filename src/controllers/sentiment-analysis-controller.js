const SentimentAnalysis = require('../services/sentiment-analysis-service');

class SentimentAnalysisController {
    static predict(request, response) {
        const responseObj = SentimentAnalysis.analyzeSentence(request.body.sentence);
        response
            .status(200)
            .send(responseObj);
    }
}

module.exports = SentimentAnalysisController;