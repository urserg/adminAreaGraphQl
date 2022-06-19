import {ResolverContext} from "../resolvers";
import {QueryResolvers} from "../resolvers-types.generated";

const QueryResolver: QueryResolvers<ResolverContext> = {
  async currentUser(_parent, _args, {models}) {
    return await models.User.findOne({where: {id: 2}})
  },
  async user(_parent, args, {models}) {
    return await models.User.findOne({where: {id: args.id}})
  },
  async users(_parent, _args, {models}) {
    return await models.User.findAll({include: models.Post})
  },
};
export default QueryResolver;
