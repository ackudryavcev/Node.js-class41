import app from "../app.js";
import request from 'supertest';


describe('Weather API', () => {
    it('Should return temperature for a valid city', async() => {
        const response = await request(app)
            .post('/weather')
            .send({ cityName: 'London' });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('London');
    });

    it('Should return error message for an invalid city', async() => {
        const response = await request(app)
            .post('/weather')
            .send({ cityName: 'InvalidCity' });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('weatherText', 'City is not found!');
    });
});