import { makeExecutableSchema } from 'graphql-tools';
import { startExpress } from './express';
import schemas from './schema/index';
import initContext from './models/context';
import MongoConnector from './connectors/mongo';

// console.log(schemas.schema);
// console.log('--------------------------')
// console.log(schemas.resolvers);

const schema = makeExecutableSchema({ typeDefs: schemas.schema, resolvers: schemas.resolvers });

const conn = new MongoConnector('mongodb://localhost:27017/test', () => {
  // init express and apollo

  const context = initContext(conn);
  const config = {
    schema,
    pretty : true,
    context
  };

  startExpress(config);
});
