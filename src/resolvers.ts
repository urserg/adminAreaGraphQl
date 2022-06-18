import QueryResolver from './resolvers/Query';
import UserResolver from './resolvers/User';

export function createResolvers() {
  return {
    Query: QueryResolver,
    User: UserResolver,
  };
}
