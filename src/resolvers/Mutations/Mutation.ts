import {ResolverContext} from "../../resolvers";
import {MutationResolvers} from "../../resolvers-types.generated";
import {Post} from "./Post";

export const Mutation: MutationResolvers<ResolverContext> = {
  ...Post,
};