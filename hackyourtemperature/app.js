import express from 'express';
import fetch from 'node-fetch';
import { API_KEY } from './sources/keys.js';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello from backend to frontend!');
});


app.post('/weather', async(req, res) => {
    const { cityName } = req.body;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        if (data.cod === '404') {
            res.status(404).send({ weatherText: "City is not found!" });
            return;
        }
        const temperature = `${Math.floor(data.main.temp)}°C`;
        res.status(200).send({
            [cityName]: temperature
        });

    } catch (error) {
        res.status(400).send(error);
    }
});

export default app;