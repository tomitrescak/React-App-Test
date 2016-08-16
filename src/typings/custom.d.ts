declare module 'graphql-tools' {
  interface IExecutableSchemaDefinition {
    typeDefs: any[];
    resolvers: any[];
  }
  export function makeExecutableSchema(definition: IExecutableSchemaDefinition): any;
}

declare module 'meteor-random' {
  export function id(length?: number): string;
  export function secret(length?: number): string;
  export function fraction(): number;
  export function choice<T>(array: T[]): T;
}