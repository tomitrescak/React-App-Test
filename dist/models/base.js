const Random = require('meteor-random');
class BaseModel {
    constructor(connector, collectionName) {
        this.random = Random;
        this.connector = connector;
        this._collectionName = collectionName;
    }
    get collection() {
        if (!this._collection) {
            this._collection = this.connector.collection(this._collectionName);
        }
        return this._collection;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseModel;
//# sourceMappingURL=base.js.map