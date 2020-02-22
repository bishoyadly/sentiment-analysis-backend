const request = require('supertest');
const app = require('../../../app');
describe('Sentiment Analysis Controller Test suite', () => {

    test('request API to get sentence response', async () => {
        const apiPath = '/predict/sentiment-analysis';
        const requestObj = {
            sentence: 'I love javascript'
        };
        const expectedResponseObj = {
            predictionResult: 'Positive',
            responseSentence: 'I think this sentence is a Positive feedback',
        };
        const {body: actualResponseObj} = await request(app).post(apiPath).send(requestObj);
        expect(actualResponseObj.predictionResult).toEqual(expectedResponseObj.predictionResult);
        expect(actualResponseObj.responseSentence).toEqual(expectedResponseObj.responseSentence);
    });

});