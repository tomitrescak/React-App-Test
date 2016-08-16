import { processSchema, schemas, resolvers } from 'apollo-mantra/server';
import root from './root';
import users from './users';

processSchema([
  users,
  root
]);

export default {
  schema: schemas(),
  resolvers: resolvers()
}
