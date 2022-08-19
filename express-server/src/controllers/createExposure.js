// we'll load up node's built in file system helper library here
const fs = require('fs');

const createExposure = (req, res) => { 
    const { val2 } = req.body;

    // create object using val2 from graphql
    const exposure = {
      val5: Math.floor(Math.random() * val2)
    }

    try {
      // Mimic exposure creation from a database
      fs.writeFileSync('./src/data/exposure.json', JSON.stringify(exposure, null, 2) , 'utf-8');
    } catch(error) {
        return res.send(error).status(500);
    }

    return res.send(exposure).status(200);
}

module.exports = createExposure;