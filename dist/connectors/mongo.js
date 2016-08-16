const mongodb_1 = require('mongodb');
class MongoConnector {
    constructor(url, started) {
        this.mongoUrl = url;
        const that = this;
        mongodb_1.MongoClient.connect(url, function (err, db) {
            if (err) {
                return console.dir(err);
            }
            console.log('Connected to MongoDB at ' + url);
            that.db = db;
            // db.collection('test', function(err, collection) {});
            // db.collection('test', {w:1}, function(err, collection) {});
            // db.createCollection('test', function(err, collection) {});
            // db.createCollection('test', {w:1}, function(err, collection) {});
            if (started) {
                started();
            }
        });
    }
    collection(name) {
        return this.db.collection(name);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MongoConnector;
//# sourceMappingURL=mongo.js.map