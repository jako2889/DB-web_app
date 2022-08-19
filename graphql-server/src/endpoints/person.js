const fetch = require('node-fetch');

/**
 * This api endpoint creates a person using the input passed.
 * You must pass an input of type integer.
 * @param input 
 * @returns 
 */
const postPerson = async function(input) {
    const response = await fetch('http://localhost:8080/api/person', {
        method: 'post',
        body: JSON.stringify({input}),
        headers: {'Content-Type': 'application/json'}
    });

    // Handle the different responses from the api
    switch(response.status) {
        case 200:
            const data = await response.json();
            return data;
        case 500:
          return { error: response.statusText}
        default:
            return { error: response.statusText}
      }

  }

module.exports = { postPerson };