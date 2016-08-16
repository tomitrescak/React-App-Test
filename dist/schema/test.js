"use strict";
const schema = `
  type A {
    b: String
  }
`;
const queryText = `
  all: [A]
`;
const queries = {
    all() {
    }
};
const domainElement = {
    schema,
    queryText,
    queries
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = domainElement;
//# sourceMappingURL=test.js.map