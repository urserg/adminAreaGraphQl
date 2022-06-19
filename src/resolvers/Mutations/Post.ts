import {ResolverContext} from "../../resolvers";
import {MutationResolvers} from "../../resolvers-types.generated";

export const Post: Pick<MutationResolvers<ResolverContext>, "createPost"> = {
  createPost: async (_parent, args, {models}) => {
    const {title, body} = args;
    return await models.Post.create({title, body, UserId: 1});
  },
}