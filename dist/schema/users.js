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
    users(user, _, context) {
        console.log('getting users ...');
        return context.user.getUsers();
    },
    cachedUsers(user, _, context) {
        return context.user.getCachedUsers();
    }
};
const domainElement = {
    schema,
    queryText,
    queries
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = domainElement;
//# sourceMappingURL=users.js.map