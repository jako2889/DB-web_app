const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

// Instantiate server with short-hand notation of typeDefs and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port 4000
        📭  Query at http://localhost:4000
    `)
})