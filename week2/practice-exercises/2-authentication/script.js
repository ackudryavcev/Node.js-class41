import fetch from 'node-fetch';
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
async function printBooks() {
    try {
        const username = "admin";
        const password = "hvgX8KlVEa";
        const encodedCredentials = Buffer.from(`${username}:${password}`).toString("base64");
        const response = await fetch("https://restapiabasicauthe-sandbox.mxapps.io/api/books", {
            method: "GET",
            headers: {
                Authorization: `Basic ${encodedCredentials}`
            }
        });

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error);
    }

}

printBooks();