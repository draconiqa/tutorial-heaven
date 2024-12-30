import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import type { Context } from './context';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

export async function createServer(): Promise<express.Express> {
  const app = express();

  const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
  });
  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    // TODO: set context for request
    expressMiddleware(server),
  );

  return app;
}
