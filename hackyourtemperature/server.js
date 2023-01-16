const express = require('express');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;


const app = express();



app.get('/', (req, res) => {

    res.send('hello from backend to frontend!');
});

app.use(express.json());

app.post('/weather', (req, res) => {
    const cityName = req.body.cityName;
    res.send(cityName);
});


app.listen(PORT, () => {

    console.log(`App listening on port ${PORT}`)
});