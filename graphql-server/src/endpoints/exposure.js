const fetch = require('node-fetch');

/**
 * This api endpoint creates a exposure using the argument passed.
 * You must pass an argument of type integer.
 * @param val2
 * @returns 
 */
const postExposure = async function(val2) {
    const response = await fetch('http://localhost:8080/api/exposure', {
        method: 'post',
        body: JSON.stringify({val2}),
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

module.exports = { postExposure };