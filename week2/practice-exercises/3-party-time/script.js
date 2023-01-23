import fetch from 'node-fetch';

/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

async function makeReservation() {
    try {
        const body = JSON.stringify({
            "name": "John Doe",
            "numberOfPeople": 3
        });

        console.log(body);

        const response = await fetch("https://reservation100-sandbox.mxapps.io/rest-doc/api/reservations", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        });

        console.log(response.statusText);
    } catch (error) {
        console.error(error);
    }
}

makeReservation();