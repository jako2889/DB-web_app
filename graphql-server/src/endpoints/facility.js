const fetch = require('node-fetch');

/**
 * This api endpoint creates a facility using the argument passed.
 * You must pass an argument of type integer.
 * @param val1 
 * @returns 
 */
const postFacility = async function(val1) {
    const response = await fetch('http://localhost:8080/api/facility', {
        method: 'post',
        body: JSON.stringify({val1}),
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

module.exports = { postFacility };