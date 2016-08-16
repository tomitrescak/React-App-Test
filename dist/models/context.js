const User_1 = require('./User');
function default_1(conn) {
    const user = new User_1.default(conn, 'user');
    user.fixtures();
    return {
        user
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
//# sourceMappingURL=context.js.map