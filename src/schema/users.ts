declare global {
  namespace App.Entities {
    interface User {
      name: string;
    }
  }
}
const schema = `
  type User {
    name: String
  }
`;

const queryText = `
  users: [User]
  cachedUsers: [User]
`;

const queries = {
  users(user: App.Entities.User, _: any, context: App.Context) {
    console.log('getting users ...');
    return context.user.getUsers();
  },
  cachedUsers(user: App.Entities.User, _: any, context: App.Context) {
    return context.user.getCachedUsers();
  }
}

const domainElement: IApolloSchema = {
  schema,
  queryText,
  queries
}

export default domainElement;