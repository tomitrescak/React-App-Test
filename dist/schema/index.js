const server_1 = require('apollo-mantra/server');
const root_1 = require('./root');
const users_1 = require('./users');
server_1.processSchema([
    users_1.default,
    root_1.default
]);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    schema: server_1.schemas(),
    resolvers: server_1.resolvers()
};
//# sourceMappingURL=index.js.map