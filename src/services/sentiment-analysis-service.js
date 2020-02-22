const Sentiment = require('sentiment');

class SentimentAnalysis {
    static analyzeSentence(sentence) {
        const sentiment = new Sentiment();
        let result = sentiment.analyze(sentence);
        let predictionObj = {};
        if (result.score > 0) {
            predictionObj.predictionResult = 'Positive';
        } else if (result.score < 0) {
            predictionObj.predictionResult = 'Negative';
        } else {
            predictionObj.predictionResult = 'Neutral';
        }
        predictionObj.responseSentence =
            `I think this sentence is a ${predictionObj.predictionResult} feedback`;
        return predictionObj;
    }
}

module.exports = SentimentAnalysis;





