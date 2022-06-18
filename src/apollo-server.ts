import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader';
import {loadSchemaSync} from '@graphql-tools/load';
import {addResolversToSchema} from '@graphql-tools/schema';
import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core';
import {ApolloServer, ExpressContext} from 'apollo-server-express';
import * as express from 'express';
import {Server} from 'http';
import {GRAPHQL_SCHEMA_PATH} from "./constants";
import {createResolvers} from './resolvers';

const schema = loadSchemaSync(GRAPHQL_SCHEMA_PATH, {
  loaders: [new GraphQLFileLoader()],
});

export async function createApolloServer(
  models: Record<string, any>,
  httpServer: Server,
  app: express.Application
): Promise<ApolloServer<ExpressContext>> {
  const server = new ApolloServer({
    context: () =>
      ({
        models,
        dbTweetCache: {},
        dbTweetToFavoriteCountMap: {},
        dbUserCache: {},
      }),
    schema: addResolversToSchema({
      schema: schema,
      resolvers: createResolvers(),
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  return server;
}
