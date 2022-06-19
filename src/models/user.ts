import {DataTypes, Model, Sequelize} from "@sequelize/core";

const getUserModel = (sequelize: Sequelize) => {

  class User extends Model {
    declare name: String
    declare avatarUrl: String

    static associate(models: any) {
      User.hasMany(models.Post,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' })
    }
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    avatarUrl: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: true,
    },
  }, {
    sequelize,
  });

  return User;
}

// Post.associate = (models) => {
//   Post.hasMany(models.Message, { onDelete: 'CASCADE' });
// };
//
// Post.findByLogin = async (login) => {
//   let user = await Post.findOne({
//     where: { username: login },
//   });
//
//   if (!user) {
//     user = await Post.findOne({
//       where: { email: login },
//     });
//   }
//
//   return user;
// };

export default getUserModel;