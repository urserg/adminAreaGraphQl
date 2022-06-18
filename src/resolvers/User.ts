

const UserResolver = {
  async posts(parent: any, _args: any, {}: Record<string, any>) {
    return await parent.getPosts();
  }
};
export default UserResolver;
