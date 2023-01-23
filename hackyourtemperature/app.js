import express from 'express';
import fetch from 'node-fetch';
import { API_KEY } from './sources/keys.js';
const app = express();

app.get('/', (req, res) => {
    res.send('hello from backend to frontend!');
});

app.use(express.json());

app.post('/weather', async(req, res) => {
    const cityName = req.body.cityName;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        const temperature = `${Math.floor(data.main.temp)}°C`;
        res.status(200).send({
            [cityName]: temperature.toString()
        });
    } catch {
        res.status(400).send({ weatherText: "City is not found!" });
    }
});

export default app;