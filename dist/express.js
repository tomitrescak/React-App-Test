const express = require('express');
const bodyParser = require('body-parser');
const apollo = require('apollo-server');
const path = require('path');
const expressPort = process.env.EXPRESS_PORT || 3002;
const app = express();
function startExpress(graphqlOptions) {
    // setup basic properties for parsing requests
    app.use(bodyParser.json());
    // setup static paths
    const indexPath = path.resolve('public/index.html');
    const staticPath = path.resolve('public');
    app.use(express.static(staticPath));
    // setup apollo
    app.use('/graphql', apollo.apolloExpress((req) => {
        return graphqlOptions;
    }));
    app.use('/graphiql', apollo.graphiqlExpress({ endpointURL: '/graphql' }));
    // setup spa
    app.get('*', function (req, res) {
        res.sendFile(indexPath);
    });
    // start server
    app.listen(expressPort, () => {
        console.log(`Express server is listen on ${expressPort}`);
    });
}
exports.startExpress = startExpress;
//# sourceMappingURL=express.js.map