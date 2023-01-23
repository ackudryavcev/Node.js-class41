import fetch from 'node-fetch';

async function printChuckNorrisJoke() {

    try {
        const response = await fetch('https://api.kanye.rest');
        const body = await response.json();
        console.log(body.quote);
    } catch (error) {
        console.log(error);
    }
}

printChuckNorrisJoke();