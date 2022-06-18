const QueryResolver = {
  async currentUser(_parent: any, _args: any, {models}: Record<string, any>) {
    return await models.User.findOne({where: {id: 2}})
  },
  user(_parent: any, _args: any) {

  },
  tweets(parent: any, _args: any, _context: any) {
    console.log("parent", parent)
    return [{
      id: 2,
      body: "Some tweet text",
      createdAt: "01.01.2020",
      updatedAt: "01.01.2020",
      author: null,
      favorites: null,
      retweets:  null,
      stats:  null
    }]
  },
  trends() {

  },
  suggestions() {

  },
};
export default QueryResolver;
