const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        facilityExposureReturn: [FacilityExposureReturn]
    }

    "Handle the manipulation of person values from input and calculate facility and exposure return values."
    type Mutation {
        calculateFacilityExposure(input: Int): FacilityExposureReturn
    }

    "Facility and exposure return values and the calculation of these."
    type FacilityExposureReturn {
        val3: Int!
        val5: Int!
        calculatedValue: Int!
    }
`;

module.exports = typeDefs;