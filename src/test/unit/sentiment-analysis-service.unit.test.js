const SentimentAnalysis = require('../../services/sentiment-analysis-service');
describe('predict API Test Suite', () => {

    test('test positive feedback', () => {
        const expectedObj = {
            predictionResult: 'Positive',
            responseSentence: 'I think this sentence is a Positive feedback'
        };
        const predictionObj = SentimentAnalysis.analyzeSentence('We love  Javascript ');
        expect(predictionObj.predictionResult).toEqual(expectedObj.predictionResult);
        expect(predictionObj.responseSentence).toEqual(expectedObj.responseSentence);
    });

    test('test neutral feedback', () => {
        const expectedObj = {
            predictionResult: 'Neutral',
            responseSentence: 'I think this sentence is a Neutral feedback'
        };
        const predictionObj = SentimentAnalysis.analyzeSentence('We love  Javascript but it is irritating ');
        expect(predictionObj.predictionResult).toEqual(expectedObj.predictionResult);
        expect(predictionObj.responseSentence).toEqual(expectedObj.responseSentence);
    });

    test('test negative feedback', () => {
        const expectedObj = {
            predictionResult: 'Negative',
            responseSentence: 'I think this sentence is a Negative feedback'
        };
        const predictionObj = SentimentAnalysis.analyzeSentence('We hate  Javascript ');
        expect(predictionObj.predictionResult).toEqual(expectedObj.predictionResult);
        expect(predictionObj.responseSentence).toEqual(expectedObj.responseSentence);
    });

});