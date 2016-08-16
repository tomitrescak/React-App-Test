///////////////////////////////////////////////////////////////
// tomi:apollo-mantra                                        //
///////////////////////////////////////////////////////////////

declare interface IApolloState {
  queries: Object;
  mutations: Object;
}

declare interface IApolloSchema {
  schema: string;
  queries?: Object;
  resolvers?: Object;
  mutations?: Object;
  queryText?: string;
  mutationText?: string;
}

declare module 'graphql-tag' {
  let gql: any;
  export default gql;
}

declare module 'apollo-mantra/server' {
  export function processSchema(definition: IApolloSchema[]): void;
  export function schemas(): any;
  export function resolvers(): any;
  export function ioSchema(type: string): void;
  export function modificationSchema(): string;
}