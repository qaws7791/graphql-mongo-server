import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
const app = express();

const startServer = async () => {
    const port = process.env.PORT || 4000;

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
      
    server.applyMiddleware({ app });
      
    await mongoose.connect('mongodb://localhost:27017/test3', {useNewUrlParser: true, useUnifiedTopology: true});
    
    app.listen({ port }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
      
};

startServer();