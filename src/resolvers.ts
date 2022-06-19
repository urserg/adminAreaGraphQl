import QueryResolver from './resolvers/Query';
import UserResolver from './resolvers/User';
import {Resolvers} from "./resolvers-types.generated";
import {Mutation} from "./resolvers/Mutations/Mutation";

export interface ResolverContext {
  models: Record<string, any>;
  dbTweetCache: Record<string, any>;
  dbUserCache: Record<string, any>;
  dbTweetToFavoriteCountMap: Record<string, number>;
}

export function createResolvers(): Resolvers<ResolverContext> {
  return {
    Query: QueryResolver,
    User: UserResolver,
    Mutation: Mutation
  };
}
