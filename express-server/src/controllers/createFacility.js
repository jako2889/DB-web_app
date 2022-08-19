// we'll load up node's built in file system helper library here
const fs = require('fs');

const createFacility = (req, res) => { 
    const { val1 } = req.body;

    // create object using val1 from graphql
    const facility = {
      val3: val1,
      val4: Math.floor(Math.random() * val1)
    }

    try {
      // Mimic facility creation from a database
      fs.writeFileSync('./src/data/facility.json', JSON.stringify(facility, null, 2) , 'utf-8');
    } catch(error) {
        return res.send(error).status(500);
    }

    return res.send(facility).status(200);
}

module.exports = createFacility;