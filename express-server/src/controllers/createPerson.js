// we'll load up node's built in file system helper library here
const fs = require('fs');

const createPerson = (req, res) => { 
    const { input } = req.body;

    // create object using input from graphql
    const person = {
      val1: input,
      val2: Math.floor(Math.random() * input)
    }

    try {
      // Mimic person creation from a database
      fs.writeFileSync('./src/data/person.json', JSON.stringify(person, null, 2) , 'utf-8');
    } catch(error) {
        return res.send(error).status(500);
    }

    return res.send(person).status(200);
}

module.exports = createPerson;