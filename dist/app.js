const graphql_tools_1 = require('graphql-tools');
const express_1 = require('./express');
const index_1 = require('./schema/index');
const context_1 = require('./models/context');
const mongo_1 = require('./connectors/mongo');
// console.log(schemas.schema);
// console.log('--------------------------')
// console.log(schemas.resolvers);
const schema = graphql_tools_1.makeExecutableSchema({ typeDefs: index_1.default.schema, resolvers: index_1.default.resolvers });
const conn = new mongo_1.default('mongodb://localhost:27017/test', () => {
    // init express and apollo
    const context = context_1.default(conn);
    const config = {
        schema,
        pretty: true,
        context
    };
    express_1.startExpress(config);
});
//# sourceMappingURL=app.js.map