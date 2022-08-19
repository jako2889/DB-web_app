const { postExposure } = require('../../endpoints/exposure');
const { postFacility } = require('../../endpoints/facility');
const { postPerson } = require('../../endpoints/person');

module.exports = {
    Mutation: {
        // mutation for handling creation of person, facility and exposure as well as calculating the value of 3 and 5
        async calculateFacilityExposure(_, { input }) {
           // request post for person endpoint using input from client
           const person = await postPerson(input);

            console.log('Person: ', person);

           // If person is created succesfully we call the facility and exposure endpoints
           if (person) {
            const facility = await postFacility(person.val1);
            const exposure = await postExposure(person.val2);

            // Then return the required values as well as the calculation for val3 and val5
            return {
                val3: facility.val3,
                val5: exposure.val5,
                calculatedValue: facility.val3 * exposure.val5
            }
           }
        }
    }
}