const calculationResolvers = require('./calculation');

module.exports = {
    Query: {
        ...calculationResolvers.Query
    },
    Mutation: {
        ...calculationResolvers.Mutation
    }
}