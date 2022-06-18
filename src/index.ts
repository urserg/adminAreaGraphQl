import * as express from 'express';
import {createServer} from "http";
import {createApolloServer} from "./apollo-server";
import {sequelize, models} from "./models";
import {PORT} from "./constants";
const app = express();

async function main() {
  app.use('/static', express.static('static'));


  const httpServer = createServer(app);
  const apolloServer = await createApolloServer(models, httpServer, app);
  console.log("apolloServer.graphqlPath", apolloServer.graphqlPath)

  await sequelize.sync({ force: false }).then(async () => {
    app.listen(PORT, () =>
      console.log(`Listen on port ${PORT}`)
    );
  });

  // app.get(
  //   '/graphql',
  //   graphqlHTTP({
  //     schema,
  //     graphiql: true
  //   })
  // );
}



main().catch((err) => {
  console.error(err);
});
