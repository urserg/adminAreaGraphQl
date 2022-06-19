import {MutationResolvers} from "../resolvers-types.generated";

export const MutationResolver: MutationResolvers = {
  createPost: async (_parent, args, {models}) => {
      const {title, body} = args;
      return await models.Post.create({title, body, UserId: 1});
  }
}