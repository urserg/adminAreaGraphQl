const QueryResolver = {
  async currentUser(_parent: any, _args: any, {models}: Record<string, any>) {
    return await models.User.findOne({where: {id: 2}})
  },
  async user(_parent: any, args: {id: number}, {models}: Record<string, any>) {
    return await models.User.findOne({where: {id: args.id}})
  },
  async users(_parent: any, _args: any, {models}: Record<string, any>) {
    return await models.User.findAll({include: models.Post})
  },
  trends() {

  },
  suggestions() {

  },
};
export default QueryResolver;
