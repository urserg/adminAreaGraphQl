import {DataTypes, Model, Sequelize} from "@sequelize/core";

const getPostModel = (sequelize: Sequelize) => {

  class Post extends Model {
    declare name: String
    declare avatarUrl: String

    static associate(models: any) {
      Post.belongsTo(models.User)
    }
  }

  Post.init({
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    body: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: true,
    },
  }, {
    sequelize,
  });

  return Post;
}
export default getPostModel;