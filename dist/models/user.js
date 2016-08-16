const base_1 = require('./base');
const DataLoader = require('dataloader');
class User extends base_1.default {
    getUsers() {
        return this.collection.find().toArray();
    }
    getCachedUsers() {
        if (!this.userLoader) {
            this.userLoader = new DataLoader((param) => {
                return Promise.all([this.collection.find().toArray()]);
            });
        }
        return this.userLoader.load(0);
    }
    fixtures() {
        this.collection.count({}, (err, num) => {
            if (num === 0) {
                this.collection.insert({ _id: this.random.id(), name: 'Tomas Trescak ' });
            }
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;
//# sourceMappingURL=user.js.map