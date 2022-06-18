import {Sequelize, DataTypes, Model} from "@sequelize/core";

const getPostModel = (sequelize: Sequelize) => {

  class Post extends Model {
    declare name: String
    declare avatarUrl: String
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