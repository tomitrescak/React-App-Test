import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as apollo from 'apollo-server';
import * as path from 'path';

const expressPort = process.env.EXPRESS_PORT || 3002;
const app = express();

export function startExpress(graphqlOptions: any) {
  // setup basic properties for parsing requests
  app.use(bodyParser.json());

  // setup static paths
  const indexPath = path.resolve('public/index.html');
  const staticPath = path.resolve('public');
  app.use(express.static(staticPath));

  // setup apollo
  app.use('/graphql', apollo.apolloExpress((req: any) => {
    return graphqlOptions;
  }));
  app.use('/graphiql', apollo.graphiqlExpress({endpointURL: '/graphql'}));

  // setup spa
  app.get('*', function(req, res) {
    res.sendFile(indexPath);
  });

  // start server
  app.listen(expressPort, () => {
      console.log(`Express server is listen on ${expressPort}`);
  });
}
